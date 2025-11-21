import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const quotes = [
    {
      text: "Getting involved in this cause changed my perspective entirely. I realized that each of us has the power to create meaningful change in our communities.",
      author: "Sarah Johnson",
      role: "Community Volunteer",
    },
    {
      text: "Education and awareness are powerful tools. Once I understood the depth of this issue, I couldn't stay silent. Now I'm part of the solution.",
      author: "Michael Chen",
      role: "Educator & Advocate",
    },
    {
      text: "This issue touches more lives than we realize. By taking action together, we've seen real improvements in our community. Hope is contagious.",
      author: "Emma Rodriguez",
      role: "Local Organizer",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Voices of Change
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from those who are making a difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {quotes.map((quote, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 animate-scale-in border-none bg-card relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>
              <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                "{quote.text}"
              </blockquote>
              <div className="border-t border-border pt-6">
                <p className="font-semibold text-foreground">{quote.author}</p>
                <p className="text-sm text-muted-foreground">{quote.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
