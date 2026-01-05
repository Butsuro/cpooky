const badges = [
  { stat: "5AM", label: "Fajr Runs" },
  { stat: "2.7+", label: "Brothers" },
  { stat: "3", label: "Pace Groups" },
  { stat: "Daily", label: "Discipline" },
];

const TrustBadges = () => {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-5xl md:text-6xl text-foreground mb-2">
                {badge.stat}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-[0.3em]">
                {badge.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;