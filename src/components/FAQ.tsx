import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How does StudyFlow adapt to my learning style?',
    answer: 'StudyFlow uses machine learning to analyze your study patterns, quiz performance, and progress speed. It then automatically adjusts difficulty levels, suggests optimal study times, and recommends learning techniques that work best for you.',
  },
  {
    question: 'Can I use StudyFlow offline?',
    answer: 'Yes! StudyFlow automatically syncs your progress when you\'re online, but you can access downloaded study materials, take quizzes, and create notes even without an internet connection. Everything syncs when you reconnect.',
  },
  {
    question: 'Is StudyFlow suitable for all age groups?',
    answer: 'StudyFlow is designed for students aged 13 and up, including high school, college, and adult learners. Our interface and content difficulty automatically adapt to different learning levels and academic requirements.',
  },
  {
    question: 'How do visual notes work?',
    answer: 'Our visual notes system lets you create mind maps, flowcharts, and concept diagrams using a simple drag-and-drop interface. You can link concepts, add images, and create connections that help you understand complex topics better.',
  },
  {
    question: 'Can teachers monitor student progress?',
    answer: 'Yes! With our Educator plan, teachers get comprehensive dashboards to track student progress, identify learning gaps, assign custom study tracks, and generate detailed progress reports for parents and administrators.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'You can export all your study materials, notes, and progress data at any time. After cancellation, your account remains accessible for 30 days to download your content, then data is permanently deleted for privacy.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-primary mb-6 text-balanced bounce-in">
              Frequently asked questions
            </h2>
            <p className="text-xl text-muted-foreground text-balanced">
              Got questions? We've got answers. Can't find what you're looking for? 
              <a href="#" className="text-primary hover:text-accent transition-micro ml-1 hover-lift">
                Contact our support team
              </a>.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden fade-in-up hover-lift"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus-ring transition-micro"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-medium font-primary text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 text-primary">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6 fade-in-up">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="glass-card p-8 inline-block">
              <h3 className="text-xl font-semibold font-primary mb-2 text-foreground">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our support team is here to help you succeed.
              </p>
              <button className="glass-button px-6 py-2 text-sm focus-ring hover-lift hover-glow">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;