import { Heart, Users, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const aspects = [
    {
      icon: Heart,
      title: "The Issue",
      description: "This social challenge affects millions worldwide, impacting communities, families, and individuals in profound ways. Understanding the scope helps us take meaningful action.",
    },
    {
      icon: Users,
      title: "Who's Affected",
      description: "From vulnerable populations to entire communities, this issue touches lives across all demographics, creating ripple effects that extend far beyond what we initially see.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "We're committed to raising awareness, mobilizing communities, and creating lasting change through education, advocacy, and direct action.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Understanding the Issue
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Knowledge is the first step toward meaningful change
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {aspects.map((aspect, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 animate-scale-in border-none bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <aspect.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{aspect.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {aspect.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-md">
          <h3 className="text-3xl font-bold mb-6">Root Causes & Impact</h3>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              This issue stems from complex systemic factors including inequality, 
              lack of access to resources, insufficient education, and societal stigma. 
              These interconnected causes create barriers that prevent progress and perpetuate cycles of harm.
            </p>
            <p>
              The impact is far-reaching: decreased quality of life, limited opportunities, 
              strained relationships, and long-term health consequences. Communities face 
              economic challenges, social fragmentation, and generational trauma that can 
              persist without intervention.
            </p>
            <p className="font-semibold text-foreground">
              But change is possible. With awareness, commitment, and collective action, 
              we can address these root causes and create lasting positive impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
