import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import studyCube from '@/assets/study-cube.png';

const Hero = () => {
  const cubeRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cubeRef.current) return;
      
      const rect = cubeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;
      
      const tiltX = deltaY * 12; // ±12° range
      const tiltY = deltaX * -12;
      
      cubeRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(135deg, hsl(120 35% 77% / 0.9), hsl(120 46% 33% / 0.8))' 
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle absolute top-3/4 left-1/4 w-2 h-2 bg-secondary rounded-full opacity-60" />
        <div className="particle absolute top-1/2 left-3/4 w-1 h-1 bg-accent rounded-full opacity-40" />
        <div className="particle absolute top-2/3 left-1/2 w-1.5 h-1.5 bg-primary rounded-full opacity-50" />
        <div className="particle absolute top-1/3 left-1/3 w-1 h-1 bg-secondary rounded-full opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-primary text-balanced leading-tight bounce-in">
                Study smarter.{' '}
                <span className="progress-gradient">See progress.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/80 text-balanced max-w-xl">
                Tracks, quizzes, and visual notes in one clean space.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button size="lg" className="glass-button text-lg px-8 py-4 focus-ring hover-glow pulse-glow">
                Start free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 glass-card hover:bg-card-glass focus-ring hover-lift"
              >
                See a live demo
              </Button>
            </div>
          </div>

          {/* Right: 3D Model */}
          <div className="relative flex justify-center">
            <div className="relative">
              <img
                ref={cubeRef}
                src={studyCube}
                alt="Interactive 3D study cube"
                className="w-80 h-80 lg:w-96 lg:h-96 transition-transform duration-100 ease-out drop-shadow-2xl"
                style={{ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;