import { useState } from "react";

const faqs = [
  {
    question: "How quickly can you start on a project?",
    answer:
      "For urgent issues, I can often start within 24-48 hours. For planned projects, I typically have 1-2 week lead time. Emergency DevOps support is available with same-day response.",
  },
  {
    question: "Do you work with existing teams or independently?",
    answer:
      "Both! I integrate seamlessly with your existing engineering teams and can also work independently on specific technical deliverables. My experience at enterprise scale means I know how to collaborate effectively with distributed teams.",
  },
  {
    question: "What if our tech stack is different from your experience?",
    answer:
      "While I specialize in Python, Go, and cloud infrastructure, my 15+ years of enterprise experience means I can quickly adapt to new technologies. I focus on patterns and principles that work across any stack.",
  },
  {
    question: "How do you ensure knowledge transfer to our team?",
    answer:
      "Every engagement includes documentation, code reviews, and hands-on training. I don't just deliver solutions—I ensure your team can maintain and extend the work independently.",
  },
  {
    question: "What's your approach to remote vs. on-site work?",
    answer:
      "I work fully remote but can accommodate on-site requirements for strategic sessions or complex implementations. Based in Hulst, Netherlands, I serve clients throughout Europe.",
  },
  {
    question: "How do you handle project scope changes?",
    answer:
      "I use agile approaches with regular check-ins and transparent communication. Scope changes are discussed openly with impact assessments on timeline and budget before implementation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-slate-100">Common</span>{" "}
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text">
              questions
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            Everything you need to know about working together
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/30 border border-slate-700/50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-slate-100 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-4 border-t border-slate-700/50 bg-slate-800/20">
                  <p className="text-slate-200 leading-relaxed text-base font-normal">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <a
            href="mailto:bas@basvandriel.nl?subject=Question%20about%20working%20together"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-200"
          >
            Get in touch directly →
          </a>
        </div>
      </div>
    </section>
  );
}
