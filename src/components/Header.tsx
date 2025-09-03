import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-glass-border backdrop-blur-[12px]">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="font-semibold text-xl font-primary text-foreground">
            StudyFlow
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#tracks" className="text-foreground hover:text-primary transition-micro focus-ring rounded-sm px-2 py-1">
              Tracks
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-micro focus-ring rounded-sm px-2 py-1">
              Features
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-micro focus-ring rounded-sm px-2 py-1">
              Pricing
            </a>
            <Button variant="outline" className="focus-ring">
              Sign in
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 focus-ring rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-glass-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#tracks" className="text-foreground hover:text-primary transition-micro focus-ring rounded-sm px-2 py-1">
                Tracks
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-micro focus-ring rounded-sm px-2 py-1">
                Features
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-micro focus-ring rounded-sm px-2 py-1">
                Pricing
              </a>
              <Button variant="outline" className="focus-ring w-fit">
                Sign in
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;