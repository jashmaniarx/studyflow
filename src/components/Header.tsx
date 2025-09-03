import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-glass-border backdrop-blur-[12px]">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-bold text-2xl font-primary text-foreground hover-glow cursor-pointer bounce-in">
            StudyFlow
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a 
              href="#tracks" 
              className="px-4 py-2 text-foreground hover:text-primary transition-micro focus-ring rounded-lg hover-lift"
            >
              Tracks
            </a>
            <a 
              href="#features" 
              className="px-4 py-2 text-foreground hover:text-primary transition-micro focus-ring rounded-lg hover-lift"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="px-4 py-2 text-foreground hover:text-primary transition-micro focus-ring rounded-lg hover-lift"
            >
              Pricing
            </a>
            <a 
              href="#about" 
              className="px-4 py-2 text-foreground hover:text-primary transition-micro focus-ring rounded-lg hover-lift"
            >
              About
            </a>
            
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-2 w-9 h-9 p-0 hover-glow focus-ring"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-accent" />
              ) : (
                <Moon className="h-5 w-5 text-accent" />
              )}
            </Button>

            <Button className="ml-4 glass-button focus-ring hover-lift">
              Sign in
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 p-0 hover-glow focus-ring"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-accent" />
              ) : (
                <Moon className="h-5 w-5 text-accent" />
              )}
            </Button>

            <button
              className="p-2 focus-ring rounded-lg hover-lift"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-glass-border pt-6 bounce-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#tracks" 
                className="px-4 py-3 text-foreground hover:text-primary transition-micro focus-ring rounded-lg hover-lift text-left"
                onClick={() => setIsOpen(false)}
              >
                Study Tracks
              </a>
              <a 
                href="#features" 
                className="px-4 py-3 text-foreground hover:text-primary transition-micro focus-ring rounded-lg hover-lift text-left"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="px-4 py-3 text-foreground hover:text-primary transition-micro focus-ring rounded-lg hover-lift text-left"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#about" 
                className="px-4 py-3 text-foreground hover:text-primary transition-micro focus-ring rounded-lg hover-lift text-left"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <Button className="glass-button focus-ring w-fit mt-4">
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