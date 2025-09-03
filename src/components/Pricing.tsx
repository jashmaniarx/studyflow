import { Button } from '@/components/ui/button';
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      '3 study tracks',
      'Basic quizzes',
      'Progress tracking',
      'Visual notes (limited)',
      'Community support'
    ],
    cta: 'Start free',
    popular: false,
  },
  {
    name: 'Student',
    price: '9',
    period: 'month',
    description: 'Ideal for dedicated learners',
    features: [
      'Unlimited study tracks',
      'Advanced quizzes with hints',
      'Detailed analytics',
      'Unlimited visual notes',
      'Priority support',
      'Export progress reports',
      'Custom study plans'
    ],
    cta: 'Start 7-day free trial',
    popular: true,
  },
  {
    name: 'Educator',
    price: '29',
    period: 'month',
    description: 'Built for teachers and schools',
    features: [
      'Everything in Student',
      'Classroom management',
      'Student progress monitoring',
      'Custom track creation',
      'Bulk student imports',
      'Advanced reporting',
      'SSO integration',
      'Dedicated support'
    ],
    cta: 'Contact sales',
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle absolute top-1/4 left-1/5 w-1 h-1 bg-accent rounded-full opacity-30" />
        <div className="particle absolute top-3/4 left-4/5 w-1.5 h-1.5 bg-secondary rounded-full opacity-40" />
        <div className="particle absolute top-1/2 left-2/3 w-1 h-1 bg-primary rounded-full opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-primary mb-6 text-balanced bounce-in">
            Choose your learning journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balanced">
            Start free and upgrade when you're ready to unlock your full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`glass-card p-8 relative fade-in-up hover:scale-[1.02] transition-smooth ${
                plan.popular ? 'ring-2 ring-primary/50 pulse-glow' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1 bounce-in">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-primary text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    /{plan.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full focus-ring hover-lift ${
                    plan.popular ? 'glass-button hover-glow' : 'glass-card hover:bg-card-glass'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            All plans include 30-day money-back guarantee
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-accent" />
              <span>Instant setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-accent" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;