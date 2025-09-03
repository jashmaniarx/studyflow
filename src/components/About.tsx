import { Users, Target, Award, Heart } from 'lucide-react';

const stats = [
  { label: 'Active Students', value: '10,000+', icon: Users },
  { label: 'Study Sessions', value: '1M+', icon: Target },
  { label: 'Grade Improvements', value: '87%', icon: Award },
  { label: 'Teacher Satisfaction', value: '4.9/5', icon: Heart },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold font-primary text-balanced bounce-in">
                  Transforming education through{' '}
                  <span className="progress-gradient">smart design</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  StudyFlow was born from a simple belief: learning should be intuitive, 
                  engaging, and measurably effective. We combine cognitive science with 
                  beautiful design to create study experiences that actually work.
                </p>
              </div>

              <div className="space-y-4">
                <div className="glass-card p-6 fade-in-up hover-lift">
                  <h3 className="font-semibold text-lg font-primary mb-2 text-foreground">
                    Evidence-based learning
                  </h3>
                  <p className="text-muted-foreground">
                    Every feature is built on proven learning science, from spaced repetition 
                    to visual memory techniques.
                  </p>
                </div>

                <div className="glass-card p-6 fade-in-up hover-lift" style={{ animationDelay: '100ms' }}>
                  <h3 className="font-semibold text-lg font-primary mb-2 text-foreground">
                    Student-first design
                  </h3>
                  <p className="text-muted-foreground">
                    We obsess over every interaction, ensuring our platform reduces stress 
                    and increases focus.
                  </p>
                </div>

                <div className="glass-card p-6 fade-in-up hover-lift" style={{ animationDelay: '200ms' }}>
                  <h3 className="font-semibold text-lg font-primary mb-2 text-foreground">
                    Continuous improvement
                  </h3>
                  <p className="text-muted-foreground">
                    Your feedback drives our roadmap. We ship new features based on real 
                    student and teacher needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="glass-card p-6 text-center fade-in-up hover-lift hover-glow"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="space-y-4">
                        <div className="flex justify-center">
                          <div className="p-3 bg-primary/10 rounded-xl">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold font-primary text-foreground">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="glass-card p-8 fade-in-up" style={{ animationDelay: '300ms' }}>
                <blockquote className="text-lg text-foreground italic mb-4">
                  "StudyFlow didn't just improve my grades—it changed how I think about learning itself."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-medium">M</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Maya Chen</div>
                    <div className="text-sm text-muted-foreground">University Student, Computer Science</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;