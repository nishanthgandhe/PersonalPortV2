import React, { useState, useEffect } from 'react';

const Loader = ({ onFinished }: { onFinished: () => void }) => {
  const [phase, setPhase] = useState<'initial' | 'growing' | 'expanding' | 'fullscreen' | 'fading'>('initial');

  useEffect(() => {
    const growTimer = setTimeout(() => setPhase('growing'), 100);
    const expandTimer = setTimeout(() => setPhase('expanding'), 1100);
    const fullscreenTimer = setTimeout(() => setPhase('fullscreen'), 1600);
    const fadeTimer = setTimeout(() => setPhase('fading'), 2800);
    const finishedTimer = setTimeout(onFinished, 3300); 

    return () => {
      clearTimeout(growTimer);
      clearTimeout(expandTimer);
      clearTimeout(fullscreenTimer);
      clearTimeout(fadeTimer);
      clearTimeout(finishedTimer);
    };
  }, [onFinished]);

  const loaderStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#000',
    transition: 'all 1s cubic-bezier(0.86, 0, 0.07, 1)',
    height: phase === 'expanding' || phase === 'fullscreen' || phase === 'fading' ? '100vh' : '10px',
    width: phase === 'initial' ? '0px' : (phase === 'expanding' || phase === 'fullscreen' || phase === 'fading' ? '100vw' : '400px'),
    ...(phase === 'expanding' && { transform: 'translate(-50%, -50%)' }),
    ...(phase === 'fullscreen' && { transform: 'translate(-50%, -50%)' }),
    ...(phase === 'fading' && { transform: 'translate(-50%, -50%)', opacity: 1 }),
  };

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${phase === 'fading' ? 'opacity-0' : 'opacity-100'}`}>
       <div style={loaderStyle}>
         {phase === 'fullscreen' && (
           <div 
             className="absolute inset-0 flex items-center justify-center px-4"
             style={{
               animation: 'epicWelcome 1.2s ease-out forwards',
             }}
           >
             <div className="text-center relative">
               {/* Animated background particles */}
               <div className="absolute inset-0 -m-20">
                 {[...Array(12)].map((_, i) => (
                   <div
                     key={i}
                     className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-70"
                     style={{
                       left: `${Math.random() * 100}%`,
                       top: `${Math.random() * 100}%`,
                       animation: `floatParticle ${2 + Math.random() * 2}s ease-in-out infinite`,
                       animationDelay: `${Math.random() * 2}s`,
                     }}
                   />
                 ))}
               </div>
               
               <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-white to-purple-500 bg-clip-text text-transparent tracking-wider relative z-10 drop-shadow-2xl">
                 WELCOME
               </h1>
               
               {/* Glowing underline */}
               <div className="mt-4 sm:mt-6 w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto opacity-80 shadow-lg shadow-cyan-400/50 relative">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
               </div>
               
               {/* Subtle subtitle */}
               <p className="mt-6 sm:mt-8 text-sm sm:text-base text-gray-300 opacity-80 tracking-widest font-light animate-pulse">
                 NICE TO MEET YOU
               </p>
               
               {/* Rotating border effect */}
               <div className="absolute inset-0 -m-8 sm:-m-12 border border-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg opacity-30 animate-spin-slow"></div>
             </div>
           </div>
         )}
       </div>
       
       <style>{`
         @keyframes epicWelcome {
           0% { 
             opacity: 0; 
             transform: scale(0.3) translateY(50px);
             filter: blur(15px);
           }
           20% { 
             opacity: 0.4; 
             transform: scale(0.7) translateY(20px);
             filter: blur(8px);
           }
           50% { 
             opacity: 0.8; 
             transform: scale(1.1) translateY(-10px);
             filter: blur(2px);
           }
           70% { 
             opacity: 0.95; 
             transform: scale(0.95) translateY(5px);
             filter: blur(1px);
           }
           85% { 
             opacity: 1; 
             transform: scale(1.02) translateY(-2px);
             filter: blur(0px);
           }
           100% { 
             opacity: 1; 
             transform: scale(1) translateY(0);
             filter: blur(0px);
           }
         }
         
         @keyframes floatParticle {
           0%, 100% { 
             transform: translateY(0px) scale(0.8);
             opacity: 0.3;
           }
           50% { 
             transform: translateY(-30px) scale(1.2);
             opacity: 0.8;
           }
         }
         
         @keyframes spin-slow {
           from { transform: rotate(0deg); }
           to { transform: rotate(360deg); }
         }
         
         .animate-spin-slow {
           animation: spin-slow 8s linear infinite;
         }
       `}</style>
    </div>
  );
};

export default Loader;