import CVLink from "./CVLink";

export default function CaseStudies() {
  return (
    <section className="py-24">
      <div className="text-center">
        <p className="text-slate-400 mb-4">Need detailed case studies?</p>
        <a
          href="mailto:bas@basvandriel.nl?subject=Case%20studies%20request"
          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-200"
        >
          Get anonymized examples →
        </a>
        
        <div className="mt-8 pt-8 border-t border-slate-800/50">
          <CVLink className="text-xs text-slate-500 hover:text-slate-400 transition-colors duration-200">
            Full resume
          </CVLink>
        </div>
      </div>
    </section>
  );
}
