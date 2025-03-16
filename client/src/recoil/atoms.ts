import { atom } from 'recoil';

type ChatType= {
  messages:[{senderID: number,data:string}],
  users:[{id:number}]
}

export const chatSection = atom<ChatType>({
    key: 'chatSection',
    default:{messages:[{senderID:-2,data:""}],users:[{id:-2}]}, 
});

export const chatSelected = atom({
  key:'chatSelected',
  default: -1,
})

export const chatMobile = atom({
  key:'chatMobile',
  default: {screen:false,tab:false},
})

export const chatReceiver = atom<number | undefined>({
  key: 'chatReceiver',
  default: -2,
})

export const chatID = atom<number | undefined>({
  key: 'chatID',
  default: -2,
})

export const menuSelect = atom<number | undefined>({
  key: 'menuSelect',
  default: 1,
})

export const fetchLoader = atom<boolean>({
  key: "fetchLoader",
  default: false,
})