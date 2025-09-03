import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex',
    role: 'Year 11',
    content: 'My grades jumped a full level in 4 weeks. The visual notes actually make sense.',
    rating: 4.9,
    avatar: 'A',
  },
  {
    id: 2,
    name: 'Priya',
    role: 'Teacher',
    content: 'Quizzes feel fair and fast. The hints help students learn instead of just guessing.',
    rating: 4.8,
    avatar: 'P',
  },
  {
    id: 3,
    name: 'Sam',
    role: 'Year 10',
    content: 'The layout keeps me calm before exams. Everything is where I expect it to be.',
    rating: 4.7,
    avatar: 'S',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-primary mb-6 text-balanced">
            Trusted by students and educators
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balanced">
            Real feedback from learners who've transformed their study habits with StudyFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-card p-8 fade-in-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= Math.floor(testimonial.rating)
                          ? 'text-accent fill-accent'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {testimonial.rating} out of 5
                  </span>
                </div>

                <blockquote className="text-foreground leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center space-x-3 pt-4 border-t border-glass-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-medium text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;