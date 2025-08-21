import React, { useState, useRef, useEffect } from 'react';

export type ModernNavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
};

export interface ModernNavProps {
  items: ModernNavItem[];
  activeHref?: string;
  className?: string;
}

const ModernNav: React.FC<ModernNavProps> = ({
  items,
  activeHref,
  className = "",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentActiveHref, setCurrentActiveHref] = useState<string>(activeHref || '#home');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash || '#home';
      setCurrentActiveHref(hash);
    };

    updateActiveSection();

    window.addEventListener('hashchange', updateActiveSection);

    const handleScroll = () => {
      const internalItems = items.filter(item => !item.external && item.href.startsWith('#'));
      const sections = internalItems.map(item => document.querySelector(item.href)).filter(Boolean);
      const scrollPosition = window.scrollY + 100; 

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          const href = `#${section.id}`;
          if (href !== currentActiveHref) {
            setCurrentActiveHref(href);
            window.history.replaceState(null, '', href);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('hashchange', updateActiveSection);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items, currentActiveHref]);

  const handleClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank', 'noopener noreferrer');
    } else {
      window.history.pushState(null, '', href);
      setCurrentActiveHref(href);
      
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const calculateMagnification = (index: number) => {
    if (hoveredIndex === null) return 1;
    
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.2; 
    if (distance === 1) return 1.1; 
    if (distance === 2) return 1.05;
    return 1; 
  };

  const calculateYOffset = (index: number) => {
    if (hoveredIndex === null) return 0;
    
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 4; 
    if (distance === 1) return 2; 
    return 0; 
  };

  return (
    <div className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <div 
        ref={navRef}
        onMouseLeave={() => setHoveredIndex(null)}
        className="mx-auto hidden md:flex h-16 gap-3 items-center justify-center rounded-2xl 
                 bg-gray-900/90 backdrop-blur-md px-4 py-3 shadow-2xl 
                 border border-gray-700 transition-colors duration-300"
      >
        {items.map((item, index) => {
          const isActive = currentActiveHref === item.href;
          const isHovered = hoveredIndex === index;
          const scale = calculateMagnification(index);
          const yOffset = calculateYOffset(index);
          
          return (
            <div key={item.href} className="relative group">
              <button
                onClick={() => handleClick(item.href, item.external)}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`
                  aspect-square rounded-full flex items-center justify-center relative 
                  transition-all duration-500 ease-out cursor-pointer
                  ${isActive 
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25' 
                    : isHovered 
                    ? 'bg-gray-700 text-cyan-400 shadow-lg'
                    : 'bg-gray-800 text-gray-400 hover:text-cyan-400'
                  }
                `}
                style={{ 
                  width: `${40 * scale}px`, 
                  height: `${40 * scale}px`,
                  transform: `translateY(${yOffset}px) scale(${scale})`,
                  transformOrigin: 'center',
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  willChange: 'transform'
                }}
                aria-label={item.label}
              >
                <div 
                  className="flex items-center justify-center transition-all duration-500 ease-out" 
                  style={{ 
                    width: '20px', 
                    height: '20px',
                    transform: `scale(${Math.min(scale, 1.2)})`,
                    transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  {item.icon}
                </div>
              </button>
              
              <div className={`
                absolute top-full left-1/2 transform -translate-x-1/2 mt-3
                px-3 py-1.5 text-sm font-medium 
                text-white bg-gray-900/95
                rounded-lg whitespace-nowrap
                opacity-0 pointer-events-none transition-all duration-300 ease-out
                group-hover:opacity-100 group-hover:translate-y-2
                shadow-xl border border-gray-700
              `}
              style={{
                transform: `translateX(-50%) translateY(${8 + yOffset}px) scale(${Math.min(scale * 0.8 + 0.2, 1.1)})`,
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                {item.label}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900/95"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModernNav;
