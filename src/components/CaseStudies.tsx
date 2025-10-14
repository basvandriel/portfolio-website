import CVLink from "./CVLink";

export default function CaseStudies() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-slate-400 mb-4">Need detailed case studies?</p>
          <a
            href="mailto:bas@basvandriel.nl?subject=Case%20studies%20request"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-200"
          >
            Get anonymized examples →
          </a>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg text-center">
            <h4 className="font-semibold text-slate-100 mb-2">
              Quick Win Assessment
            </h4>
            <p className="text-sm text-slate-400 mb-4">
              Get a 5-minute analysis of your biggest DevOps bottleneck and how
              to fix it.
            </p>
            <a
              href="mailto:bas@basvandriel.nl?subject=Quick%20assessment%20request"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-200 text-sm"
            >
              Request free assessment →
            </a>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-slate-800/50">
          <CVLink className="text-xs text-slate-500 hover:text-slate-400 transition-colors duration-200">
            Full resume
          </CVLink>
        </div>
      </div>
    </section>
  );
}
