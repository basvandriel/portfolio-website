import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      questionKey: "homepage.faq_q1",
      answerKey: "homepage.faq_a1",
    },
    {
      questionKey: "homepage.faq_q2",
      answerKey: "homepage.faq_a2",
    },
    {
      questionKey: "homepage.faq_q3",
      answerKey: "homepage.faq_a3",
    },
    {
      questionKey: "homepage.faq_q4",
      answerKey: "homepage.faq_a4",
    },
    {
      questionKey: "homepage.faq_q5",
      answerKey: "homepage.faq_a5",
    },
    {
      questionKey: "homepage.faq_q6",
      answerKey: "homepage.faq_a6",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-slate-100">{t("homepage.faq_title")}</span>
          </h2>
          <p className="text-xl text-slate-400">{t("homepage.faq_subtitle")}</p>
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
                  {t(faq.questionKey)}
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
                    {t(faq.answerKey)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">
            {t("homepage.faq_cta_question")}
          </p>
          <a
            href="mailto:contact@basvandriel.nl?subject=Question%20about%20working%20together"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-200"
          >
            {t("homepage.faq_cta_link")}
          </a>
        </div>
      </div>
    </section>
  );
}
