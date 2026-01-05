const reviews = [
  {
    name: "Ahmed K.",
    text: "Cpooky changed how I approach my mornings. Running after Fajr has become the highlight of my week.",
  },
  {
    name: "Yusuf M.",
    text: "I was a complete beginner. The pace groups made it easy to join without feeling left behind.",
  },
  {
    name: "Omar S.",
    text: "It's not just about fitness. The spiritual grounding of running after prayer hits different.",
  },
  {
    name: "Ibrahim H.",
    text: "The accountability is unmatched. When the brothers are waiting, you show up.",
  },
];

const ReviewsSection = () => {
  return (
    <section id="community" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 tracking-wider">
            From The Brothers
          </h2>
          <p className="text-muted-foreground">
            Real talk from real runners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-background p-10 md:p-12 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 font-light">
                "{review.text}"
              </p>
              <div className="text-xs text-muted-foreground uppercase tracking-[0.3em]">
                — {review.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;