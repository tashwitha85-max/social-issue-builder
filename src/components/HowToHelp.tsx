import { Megaphone, HandHeart, GraduationCap, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HowToHelp = () => {
  const actions = [
    {
      icon: Megaphone,
      title: "Raise Awareness",
      description: "Share information on social media, start conversations, and help others understand the importance of this issue.",
      action: "Spread the Word",
    },
    {
      icon: HandHeart,
      title: "Volunteer Your Time",
      description: "Join local organizations, participate in events, and contribute your skills to support those affected.",
      action: "Find Opportunities",
    },
    {
      icon: GraduationCap,
      title: "Educate Yourself",
      description: "Learn more about the issue, understand different perspectives, and stay informed about current developments.",
      action: "Access Resources",
    },
    {
      icon: Share2,
      title: "Advocate for Change",
      description: "Contact local representatives, support relevant policies, and use your voice to push for systemic solutions.",
      action: "Take Action",
    },
  ];

  return (
    <section id="how-to-help" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How You Can Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every action, no matter how small, creates ripples of positive change
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {actions.map((action, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 animate-slide-in-left border-none bg-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <action.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">{action.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {action.description}
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    {action.action}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Start Making a Difference Today</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Choose one action from above and commit to it this week. Small steps lead to big changes.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-secondary hover:bg-secondary/90 text-lg px-8 py-6"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
