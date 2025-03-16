import { useEffect, useRef } from 'react';
import { MessageSquare, Shield, Zap, Globe, Bell, Smile } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-6 w-6 text-echo-blue" />,
    title: "Real-time Messaging",
    description: "Send and receive messages instantly with no delay, creating a seamless chat experience."
  },
  {
    icon: <Shield className="h-6 w-6 text-echo-blue" />,
    title: "End-to-End Encryption",
    description: "All your conversations are secured with military-grade encryption, ensuring complete privacy."
  },
  {
    icon: <Zap className="h-6 w-6 text-echo-blue" />,
    title: "Lightning Fast",
    description: "Built with cutting-edge technology to provide lightning-fast performance on any device."
  },
  {
    icon: <Globe className="h-6 w-6 text-echo-blue" />,
    title: "Cross-Platform",
    description: "Available on iOS, Android, Windows, and Mac, allowing you to chat from anywhere."
  },
  {
    icon: <Bell className="h-6 w-6 text-echo-blue" />,
    title: "Smart Notifications",
    description: "Customizable notifications keep you informed without being overwhelming."
  },
  {
    icon: <Smile className="h-6 w-6 text-echo-blue" />,
    title: "Rich Media Support",
    description: "Share photos, videos, and files seamlessly within your conversations."
  }
];

const FeaturesSection = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a small delay to each item for cascade effect
          setTimeout(() => {
            entry.target.classList.add('animate-fade-up');
          }, index * 100);
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.feature-item');
    elements.forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="features" className="relative py-20 flex justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-echo-darker via-echo-dark to-echo-darker opacity-70 z-0"></div>
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-echo-blue/20 to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-block glass-panel px-4 py-2 mb-4">
            <span className="text-xs font-medium text-echo-light-blue">Cutting-edge Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Designed for <span className="text-gradient">Modern Communication</span>
          </h2>
          <p className="text-white/70 text-lg">
            ECHO combines elegant design with powerful functionality to deliver a messaging experience like no other.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-16">
          {features.map((feature, index) => (
            <div key={index} className="feature-card feature-item opacity-0">
              <div className="bg-echo-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 animate-on-scroll">
          <div className="glass-panel overflow-hidden rounded-2xl border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Beautiful Interface</h3>
                <p className="text-white/70 mb-6">
                  Our minimalist design focuses on what matters - your conversations. The clean, intuitive interface makes messaging a pleasure.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-echo-blue"></div>
                    <span className="text-white/80">Intuitive navigation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-echo-blue"></div>
                    <span className="text-white/80">Dark mode by default</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-echo-blue"></div>
                    <span className="text-white/80">Customizable themes</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dd8vmqvqp/image/upload/v1742160846/Screenshot_2025-03-15_at_4.49.55_PM_f7qel2.png"
                  alt="ECHO Chat Interface"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
