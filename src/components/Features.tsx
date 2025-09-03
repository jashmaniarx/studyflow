import { Calendar, Brain, Zap } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Adaptive Plans',
    description: 'Your week auto-fills with smart goals that adapt to your learning pace and schedule.',
    stat: '4.8/5 satisfaction',
  },
  {
    icon: Brain,
    title: 'Visual Notes',
    description: 'Mind maps and cards you can drag, connect, and organize in ways that make sense to you.',
    stat: '87% retention boost',
  },
  {
    icon: Zap,
    title: 'Live Quiz',
    description: 'Timed drills with instant hints that help you learn faster without frustration.',
    stat: '2.3x faster progress',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle absolute top-1/4 left-1/6 w-1 h-1 bg-accent rounded-full opacity-30" />
        <div className="particle absolute top-3/4 left-5/6 w-1.5 h-1.5 bg-secondary rounded-full opacity-40" />
        <div className="particle absolute top-1/2 left-1/3 w-1 h-1 bg-primary rounded-full opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-primary mb-6 text-balanced">
            Built for students and teachers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balanced">
            Features designed to make learning more effective, engaging, and enjoyable for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={feature.title}
                className="glass-card p-8 text-center fade-in-up group hover:scale-[1.02] transition-smooth"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-smooth">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold font-primary mb-4 group-hover:text-primary transition-micro">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-glass-border">
                    <div className="text-sm font-medium text-accent">
                      {feature.stat}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;