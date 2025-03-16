import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
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
    <section className="relative overflow-hidden min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-echo-lighter/20 to-transparent opacity-40 z-0"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-echo-blue/10 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-echo-light-blue/10 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-1000"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <div className="inline-block glass-panel px-4 py-2 mb-6">
                <span className="text-xs font-medium text-echo-light-blue">Redefining Communication</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Connect. <span className="text-gradient">Chat.</span> <br className="hidden md:block" />
                Without limits.
              </h1>
              <p className="mt-6 text-lg text-white/80 max-w-md">
                Experience real-time messaging with unparalleled privacy and sleek design. ECHO is the next generation of secure communication.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-on-scroll">
              <a href="#download" className="btn-primary flex items-center justify-center group">
                Try It Now 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#features" className="btn-secondary flex items-center justify-center">
                Learn More
              </a>
            </div>
            
            <div className="flex items-center space-x-6 animate-on-scroll">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-echo-lighter flex items-center justify-center text-xs ring-2 ring-echo-dark">
                  <span>🌟</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-echo-blue flex items-center justify-center text-xs ring-2 ring-echo-dark">
                  <span>😊</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-echo-light-blue flex items-center justify-center text-xs ring-2 ring-echo-dark">
                  <span>👍</span>
                </div>
              </div>
              <div className="text-sm text-white/70">
                <span className="font-medium text-white"></span> satisfied users
              </div>
            </div>
          </div>
          
          <div className="relative lg:ml-auto animate-on-scroll">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main app screenshot */}
              <div className="rounded-2xl shadow-echo-lg overflow-hidden border border-white/10 backdrop-blur-sm animate-float">
                <img
                  src="https://res.cloudinary.com/dd8vmqvqp/image/upload/v1742160849/Screenshot_2025-03-15_at_4.49.46_PM_muhcte.png"
                  alt="ECHO Chat Application"
                  className="w-full"
                  loading="lazy"
                />
              </div>
              
              {/* Floating element 1 */}
              <div className="absolute -top-10 -left-10 glass-panel p-3 rounded-lg shadow-echo animate-float max-w-[140px] hidden md:block" style={{ animationDelay: "1s" }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-echo-lighter flex items-center justify-center">
                    <span className="text-xs">🔒</span>
                  </div>
                  <div className="text-xs">
                    End-to-end encrypted
                  </div>
                </div>
              </div>
              
              {/* Floating element 2 */}
              <div className="absolute bottom-10 -right-5 glass-panel p-4 rounded-lg shadow-echo animate-float max-w-[150px] hidden md:block" style={{ animationDelay: "1.5s" }}>
                <div className="flex flex-col space-y-2">
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-echo-blue rounded-full"></div>
                  </div>
                  <p className="text-xs text-white/70">Messages delivered instantly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
