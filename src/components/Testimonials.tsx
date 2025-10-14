import Card from "./ui/Card";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    quote:
      "Bas is highly skilled in Python and able to translate requirements into concrete tasks. He adapts implementations according to changing requirements and delivers quality work consistently.",
    author: "Senior Developer",
    company: "NS (Nederlandse Spoorwegen)",
    metric: "Delivered on time",
    project: "Railway maintenance planning system",
  },
  {
    quote:
      "Very strong in Python programming, always keen to improve processes in a structural way. His friendly personality and willingness to help others benefitted our team greatly.",
    author: "Lead Developer",
    company: "ABN AMRO",
    metric: "Process optimization",
    project: "Data pipeline development",
  },
  {
    quote:
      "A team player who thinks along with solutions in complex environments. He contributes ideas independently, collaborates well, and delivers within agreed timeframes.",
    author: "Technical Lead",
    company: "Ministerie van Volksgezondheid",
    metric: "Complex solutions delivered",
    project: "Healthcare identity & authentication",
  },
];

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="py-24" aria-labelledby="testimonials-heading">
      {/* Simple header */}
      <div className="text-center mb-16">
        <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
          {t("homepage.testimonials_title_main")}
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          {t("homepage.testimonials_subtitle")}
        </p>
      </div>

      {/* Simple grid layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            as="article"
            className="p-6 border border-slate-700/30 bg-slate-800/20"
            role="article"
            aria-label={`Testimonial from ${testimonial.author} at ${testimonial.company}`}
          >
            <blockquote className="text-slate-300 text-base leading-relaxed mb-4">
              <p>"{testimonial.quote}"</p>
            </blockquote>

            <footer>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <cite className="text-slate-200 font-medium text-sm not-italic">
                    {testimonial.author}
                  </cite>
                  <p className="text-slate-500 text-sm">
                    {testimonial.company}
                  </p>
                </div>
                <div 
                  className="text-xs text-slate-300 bg-slate-700/50 border border-slate-600/30 px-2 py-1 rounded font-medium"
                  aria-label={`Achievement: ${testimonial.metric}`}
                >
                  {testimonial.metric}
                </div>
              </div>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-700/30">
                <span className="sr-only">Project: </span>
                {testimonial.project}
              </div>
            </footer>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-slate-500 mb-3 text-sm">
          {t("homepage.testimonials_cta_question")}
        </p>
        <a
          href="mailto:contact@basvandriel.nl?subject=Case%20studies%20request"
          className="text-slate-400 hover:text-slate-300 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded px-2 py-1"
          aria-label="Request detailed case studies via email"
        >
          {t("homepage.testimonials_cta_link")}
        </a>
      </div>
    </section>
  );
}
