import { useEffect, useState } from 'react';
import { useParallax } from '@/hooks/useParallax';

const ParallaxBackground = () => {
  const parallaxOffset = useParallax(0.3);
  const [computers, setComputers] = useState<Array<{
    id: number;
    x: number;
    y: number;
    scale: number;
    rotation: number;
    delay: number;
    icon: string;
  }>>([]);

  useEffect(() => {
    const icons = ['💻', '🖥️', '⌨️', '🖱️', '💾', '🔌', '⚡', '🎮'];
    const newComputers = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 80,
      scale: 0.5 + Math.random() * 0.8,
      rotation: Math.random() * 360,
      delay: Math.random() * 5,
      icon: icons[Math.floor(Math.random() * icons.length)]
    }));
    setComputers(newComputers);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {computers.map((computer) => (
        <div
          key={computer.id}
          className="absolute animate-float opacity-20 dark:opacity-10"
          style={{
            left: `${computer.x}%`,
            top: `${computer.y}%`,
            transform: `
              translateY(${parallaxOffset * 0.5}px) 
              scale(${computer.scale}) 
              rotate(${computer.rotation}deg)
            `,
            fontSize: `${2 + computer.scale * 2}rem`,
            animationDelay: `${computer.delay}s`,
            filter: 'blur(1px)',
            transition: 'transform 0.1s ease-out'
          }}
        >
          {computer.icon}
        </div>
      ))}
      
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
        style={{
          transform: `translateY(${parallaxOffset * 0.2}px)`
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
