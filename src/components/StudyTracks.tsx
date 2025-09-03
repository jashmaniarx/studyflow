import { BookOpen, Calculator, Beaker, Languages, Clock, Code } from 'lucide-react';

const tracks = [
  {
    id: 1,
    title: 'Maths Mastery',
    description: 'Algebra • Geometry • Exam drills',
    level: 'Advanced',
    icon: Calculator,
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    title: 'Science Sprint',
    description: 'Physics • Chem • Bio quick labs',
    level: 'Intermediate',
    icon: Beaker,
    className: 'md:col-span-1',
  },
  {
    id: 3,
    title: 'English Focus',
    description: 'Analysis • Writing • Lit devices',
    level: 'Beginner',
    icon: BookOpen,
    className: 'md:col-span-1',
  },
  {
    id: 4,
    title: 'History Timeline',
    description: 'Key events • Recall maps',
    level: 'Intermediate',
    icon: Clock,
    className: 'md:col-span-1',
  },
  {
    id: 5,
    title: 'Language Lab',
    description: 'Vocab • Listening • Speaking',
    level: 'Beginner',
    icon: Languages,
    className: 'md:col-span-1',
  },
  {
    id: 6,
    title: 'Computer Science',
    description: 'Algorithms • Code basics',
    level: 'Advanced',
    icon: Code,
    className: 'md:col-span-2',
  },
];

const StudyTracks = () => {
  return (
    <section id="tracks" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-primary mb-6 text-balanced">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balanced">
            Structured tracks designed to build knowledge progressively with interactive content and real progress tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            
            return (
              <div
                key={track.id}
                className={`group glass-card p-8 cursor-pointer transition-smooth hover:scale-[1.02] focus-within:scale-[1.02] fade-in-up ${track.className}`}
                style={{ animationDelay: `${index * 60}ms` }}
                tabIndex={0}
                role="button"
                aria-label={`Learn more about ${track.title}`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-micro">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full">
                      {track.level}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold font-primary mb-2 group-hover:text-primary transition-micro">
                      {track.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {track.description}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="pt-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span>Progress</span>
                      <span>{Math.floor(Math.random() * 30 + 10)}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-1.5">
                      <div 
                        className="bg-primary h-1.5 rounded-full transition-all duration-1000 group-hover:bg-accent"
                        style={{ width: `${Math.floor(Math.random() * 30 + 10)}%` }}
                      />
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

export default StudyTracks;