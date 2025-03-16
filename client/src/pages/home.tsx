import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CtaSection from '../components/CtaSection';
import FooterSection from '../components/FooterSection';

const Home = () => {
  useEffect(() => {
    document.title = "ECHO | Next Generation Chat Application";
    
    // Initialize animation for elements with animate-on-scroll class
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex  flex-col items-center bg-echo-darker text-white overflow-hidden">
      <Navbar />
      
      
        <HeroSection />
        <FeaturesSection />
        <CtaSection />

      
      <FooterSection />
    </div>
  );
};

export default Home;
