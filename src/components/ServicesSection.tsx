import { Moon, Users, Sunrise, Calendar } from "lucide-react";

const services = [
  {
    icon: Moon,
    title: "Fajr Runs",
    description: "Our signature. We run immediately after Fajr prayer while the world still sleeps.",
  },
  {
    icon: Users,
    title: "3 Pace Groups",
    description: "Beginner, intermediate, advanced. Three pace leaders ensure no one gets left behind.",
  },
  {
    icon: Sunrise,
    title: "Prayer-Led Schedule",
    description: "Runs after other daily prayers for those seeking more than just the morning.",
  },
  {
    icon: Calendar,
    title: "Weekly Consistency",
    description: "Same time. Every week. Building discipline one run at a time.",
  },
];

const ServicesSection = () => {
  return (
    <section id="about" className="py-24 bg-card noise-overlay">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 tracking-wider">
            What We Do
          </h2>
          <p className="text-muted-foreground">
            More than a run club. A daily test of faith and fitness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-10 md:p-12 hover:bg-secondary/50 transition-colors duration-500 animate-fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="w-8 h-8 text-foreground mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-3xl text-foreground mb-4 tracking-wider">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;