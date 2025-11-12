import React, { useEffect, useRef } from 'react';
import { FiSettings, FiCode, FiZap } from 'react-icons/fi';

const MaintenanceSection: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const fadeInUp = (element: Element, delay: number = 0): void => {
      element.animate([
        { opacity: 0, transform: 'translateY(30px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], {
        duration: 800,
        delay: delay,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: 'forwards'
      });
    };

    const elements = mainRef.current?.querySelectorAll('.animate-element');
    elements?.forEach((el: Element, index: number) => {
      fadeInUp(el, index * 150);
    });

    iconRefs.current.forEach((icon: HTMLDivElement | null, index: number) => {
      if (icon) {
        icon.animate([
          { transform: 'translateY(0px)' },
          { transform: 'translateY(-10px)' },
          { transform: 'translateY(0px)' }
        ], {
          duration: 2000 + (index * 300),
          iterations: Infinity,
          easing: 'ease-in-out'
        });
      }
    });
  }, []);

  return (
    <section id="maintenance" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-600 to-slate-900 flex items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div ref={mainRef} className="relative z-10 max-w-4xl w-full">
        <div className="flex justify-center gap-8 mb-12 animate-element" style={{ opacity: 0 }}>
          <div
            ref={(el: HTMLDivElement | null) => { iconRefs.current[0] = el; }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-2xl"
          >
            <FiSettings className="text-5xl text-purple-300" />
          </div>
          <div
            ref={(el: HTMLDivElement | null) => { iconRefs.current[1] = el; }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-2xl"
          >
            <FiCode className="text-5xl text-blue-300" />
          </div>
          <div
            ref={(el: HTMLDivElement | null) => { iconRefs.current[2] = el; }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-2xl"
          >
            <FiZap className="text-5xl text-yellow-300" />
          </div>
        </div>

        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white animate-element" style={{ opacity: 0 }}>
            This section is in Development phase...

          </h1>



          <div className="max-w-md mx-auto mt-8 animate-element" style={{ opacity: 0 }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-full h-3 overflow-hidden border border-white/20">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full w-2/3 animate-pulse"></div>
            </div>
            <p className="text-gray-400 mt-3 text-sm">Almost there... 66% complete</p>
          </div>






        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;