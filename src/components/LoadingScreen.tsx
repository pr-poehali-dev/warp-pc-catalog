import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-destructive/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo with animations */}
        <div className="relative animate-scale-in">
          {/* Rotating rings */}
          <div className="absolute inset-0 -m-12 animate-spin-slow">
            <div className="w-full h-full border-2 border-primary/20 rounded-full" />
          </div>
          <div className="absolute inset-0 -m-8 animate-spin-slow-reverse">
            <div className="w-full h-full border-2 border-destructive/20 rounded-full" />
          </div>
          
          {/* Logo with filter for theme adaptation */}
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <img 
              src="https://cdn.poehali.dev/files/1a63eeaa-f3cc-46a8-a560-65d427484deb.png" 
              alt="WAPC Logo" 
              className="relative w-32 h-32 object-contain animate-float dark:brightness-110 dark:contrast-110 brightness-90 contrast-90"
            />
          </div>
        </div>

        {/* Company name */}
        <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent animate-gradient bg-300">
            WarpPC
          </h1>
          <p className="text-sm text-muted-foreground tracking-widest">КОМПЬЮТЕРЫ БУДУЩЕГО</p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-border rounded-full overflow-hidden animate-fade-in" style={{animationDelay: '0.5s'}}>
          <div 
            className="h-full bg-gradient-to-r from-primary via-destructive to-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading text */}
        <div className="text-xs text-muted-foreground animate-pulse" style={{animationDelay: '0.7s'}}>
          Загрузка {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
