import Card from "./ui/Card";

const testimonials = [
  {
    quote:
      "Bas helped us cut pipeline failures by 80% — and taught our engineers how to keep it that way.",
    author: "Engineering Manager",
    company: "SaaS Enterprise",
    metric: "80% fewer failures",
  },
  {
    quote:
      "A rare combination of senior engineering skill and practical delivery focus.",
    author: "Head of Data",
    company: "Fintech Startup",
    metric: "2x faster releases",
  },
  {
    quote:
      "Finally, someone who understands both the technical depth and business impact.",
    author: "CTO",
    company: "Scale-up",
    metric: "40% cost reduction",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
          What clients say
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Real results from real partnerships
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            as="figure"
            className="p-8 group hover:scale-[1.02] transition-all duration-300 relative"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-6 text-4xl text-emerald-500/20 group-hover:text-emerald-500/30 transition-colors duration-300">
              "
            </div>

            <blockquote className="text-slate-300 text-lg leading-relaxed mb-6 relative z-10">
              {testimonial.quote}
            </blockquote>

            <figcaption className="flex items-center justify-between">
              <div>
                <div className="text-slate-100 font-semibold mb-1">
                  {testimonial.author}
                </div>
                <div className="text-slate-400 text-sm">
                  {testimonial.company}
                </div>
              </div>

              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/10 to-sky-500/10 border border-emerald-500/20">
                <span className="text-emerald-400 text-sm font-semibold">
                  {testimonial.metric}
                </span>
              </div>
            </figcaption>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-slate-400 mb-4">Need detailed case studies?</p>
        <a
          href="mailto:bas@basvandriel.nl?subject=Case%20studies%20request"
          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-200"
        >
          Get anonymized examples →
        </a>
      </div>
    </section>
  );
}
