const Footer = () => {
  return (
    <footer className="bg-background border-t border-glass-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-semibold text-xl font-primary text-foreground">
              StudyFlow
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Study smarter with adaptive learning tracks and visual progress tracking.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#tracks" className="text-muted-foreground hover:text-primary transition-micro focus-ring rounded-sm px-1 py-0.5">
                  Study Tracks
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-micro focus-ring rounded-sm px-1 py-0.5">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-micro focus-ring rounded-sm px-1 py-0.5">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-micro focus-ring rounded-sm px-1 py-0.5">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-micro focus-ring rounded-sm px-1 py-0.5">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-micro focus-ring rounded-sm px-1 py-0.5">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-micro focus-ring rounded-sm px-1 py-0.5">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-micro focus-ring rounded-sm px-1 py-0.5">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-micro focus-ring rounded-sm px-1 py-0.5">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 StudyFlow. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground">
            StudyFlow by Jash Maniar
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;