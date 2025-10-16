import CVLink from "./CVLink";

export default function CaseStudies() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center pt-8 border-t border-slate-800/50">
          <CVLink className="text-xs text-slate-500 hover:text-slate-400 transition-colors duration-200">
            Full resume
          </CVLink>
        </div>
      </div>
    </section>
  );
}
