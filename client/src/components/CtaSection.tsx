import { ArrowRight, Check } from 'lucide-react';

const CtaSection = () => {
  return (
    <section id="download" className="relative py-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-echo-darker via-echo-dark to-echo-darker opacity-70 z-0"></div>
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-echo-blue/20 to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="glass-panel rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-gradient">experience ECHO?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-md">
                Try our web application now and join thousands of users who have upgraded their communication experience with ECHO.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-echo-blue/20 rounded-full p-1">
                    <Check className="h-4 w-4 text-echo-light-blue" />
                  </div>
                  <span className="text-white/80">Access from any browser</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-echo-blue/20 rounded-full p-1">
                    <Check className="h-4 w-4 text-echo-light-blue" />
                  </div>
                  <span className="text-white/80">No installation required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-echo-blue/20 rounded-full p-1">
                    <Check className="h-4 w-4 text-echo-light-blue" />
                  </div>
                  <span className="text-white/80">Unlimited messages and contacts</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="/auth" className="btn-primary flex items-center justify-center group">
                  Try It Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#" className="btn-secondary flex items-center justify-center">
                  View Documentation
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative bg-echo-dark/50 hidden lg:block">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-echo-blue/30 rounded-full filter blur-3xl"></div>
                <div className="absolute top-10 right-20 w-40 h-40 bg-echo-light-blue/20 rounded-full filter blur-2xl"></div>
              </div>
              
              <div className="relative h-full flex items-center justify-center p-12">
                <div className="relative transform rotate-1 shadow-echo-lg">
                  <img 
                    src="https://res.cloudinary.com/dd8vmqvqp/image/upload/v1742161007/Screenshot_2025-03-17_at_3.06.32_AM_fysaqj.png"
                    alt="ECHO Mobile App"
                    className="rounded-2xl border border-white/10 max-w-full shadow-echo-lg"
                    style={{ maxHeight: '500px' }}
                    loading="lazy"
                  />
                  
                  <div className="absolute -bottom-4 -right-4 glass-panel px-4 py-2 rounded-lg shadow-echo animate-pulse-slow">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span className="text-xs text-white/90">Active Users</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
