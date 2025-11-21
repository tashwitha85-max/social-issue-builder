import { TrendingUp, Users, Globe, Clock } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      number: "2.5M+",
      label: "People Affected Annually",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Globe,
      number: "150+",
      label: "Countries Impacted",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: TrendingUp,
      number: "35%",
      label: "Increase in Last Decade",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Numbers Tell a Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the scale helps us recognize the urgency for action
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-3xl bg-card hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 rounded-2xl ${stat.bgColor} flex items-center justify-center mx-auto mb-6`}>
                <stat.icon className={`w-10 h-10 ${stat.color}`} />
              </div>
              <div className={`text-5xl font-bold mb-3 ${stat.color}`}>
                {stat.number}
              </div>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            Behind every statistic is a real person, a real story, and a real opportunity 
            to make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
