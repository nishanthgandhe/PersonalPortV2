import React, { useState, useEffect } from 'react';

const Loader = ({ onFinished }: { onFinished: () => void }) => {
  const [phase, setPhase] = useState<'initial' | 'growing' | 'expanding' | 'fullscreen' | 'fading'>('initial');

  useEffect(() => {
    const growTimer = setTimeout(() => setPhase('growing'), 100);
    const expandTimer = setTimeout(() => setPhase('expanding'), 1100);
    const fullscreenTimer = setTimeout(() => setPhase('fullscreen'), 1600); // Welcome appears here
    const fadeTimer = setTimeout(() => setPhase('fading'), 2100);
    const finishedTimer = setTimeout(onFinished, 2600);

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
             className="absolute inset-0 flex items-center justify-center"
             style={{
               animation: 'epicWelcome 0.8s ease-out forwards',
             }}
           >
             <div className="text-center">
               <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent tracking-wider">
                 WELCOME
               </h1>
               <div className="mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-80"></div>
             </div>
           </div>
         )}
       </div>
       
       <style>{`
         @keyframes epicWelcome {
           0% { 
             opacity: 0; 
             transform: scale(0.5) translateY(30px);
             filter: blur(10px);
           }
           40% { 
             opacity: 0.8; 
             transform: scale(1.05) translateY(-5px);
             filter: blur(2px);
           }
           60% { 
             opacity: 1; 
             transform: scale(0.98) translateY(2px);
             filter: blur(0px);
           }
           100% { 
             opacity: 1; 
             transform: scale(1) translateY(0);
             filter: blur(0px);
           }
         }
       `}</style>
    </div>
  );
};

export default Loader;