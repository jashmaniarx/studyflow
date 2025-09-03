import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-secondary/20 to-primary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 lg:p-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-bold font-primary text-balanced">
                  Ready to lock in progress?
                </h2>
                <p className="text-xl lg:text-2xl text-muted-foreground text-balanced">
                  Join free. No card needed.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="glass-button text-lg px-12 py-4 focus-ring"
                >
                  Create account
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-lg px-12 py-4 hover:bg-card-glass focus-ring"
                >
                  View pricing
                </Button>
              </div>

              <div className="pt-8 text-sm text-muted-foreground">
                Join 10,000+ students already studying smarter
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;