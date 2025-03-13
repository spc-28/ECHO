import { PrismaClient, Type } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Clean the database first
  await prisma.message.deleteMany({})
  await prisma.chat.deleteMany({})
  await prisma.user.deleteMany({})

  // Create users
  const user1 = await prisma.user.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'hashedPassword123', 
    },
  })

  const user2 = await prisma.user.create({
    data: {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      password: 'hashedPassword456',
    },
  })

  const user3 = await prisma.user.create({
    data: {
      firstName: 'Mike',
      lastName: 'Johnson',
      email: 'mike@example.com',
      password: 'hashedPassword789',
    },
  })

  // Create direct chats between users
  const chat1 = await prisma.chat.create({
    data: {
      groupChat: false,
      users: {
        connect: [
          { id: user1.id },
          { id: user2.id },
        ],
      },
    },
  })

  const chat2 = await prisma.chat.create({
    data: {
      groupChat: false,
      users: {
        connect: [
          { id: user2.id },
          { id: user3.id },
        ],
      },
    },
  })

  // Add messages to chat between John and Jane
  await prisma.message.createMany({
    data: [
      {
        senderID: user1.id,
        chatID: chat1.id,
        dataType: Type.TEXT,
        data: "Hey Jane, how are you?",
      },
      {
        senderID: user2.id,
        chatID: chat1.id,
        dataType: Type.TEXT,
        data: "Hi John! I'm doing great, thanks!",
      },
      {
        senderID: user1.id,
        chatID: chat1.id,
        dataType: Type.IMAGE,
        data: "vacation-photo.jpg",
      },
    ],
  })

  // Add messages to chat between Jane and Mike
  await prisma.message.createMany({
    data: [
      {
        senderID: user2.id,
        chatID: chat2.id,
        dataType: Type.TEXT,
        data: "Hi Mike, did you check the latest docs?",
      },
      {
        senderID: user3.id,
        chatID: chat2.id,
        dataType: Type.DOCS,
        data: "project-requirements.pdf",
      },
      {
        senderID: user2.id,
        chatID: chat2.id,
        dataType: Type.TEXT,
        data: "Thanks! I'll review them now.",
      },
    ],
  })

  console.log('Database has been seeded. 🌱')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect
  })