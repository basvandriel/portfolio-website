import { useState } from "react";
import { Button } from "./ui/Button";
import { trackEvent } from "../utils/analytics";

export default function LeadMagnetInline() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Track conversion
    trackEvent(
      "Lead Generation",
      "lead_magnet_submitted",
      "DevOps ROI Calculator"
    );

    // Simulate submission (replace with actual API call)
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);

      // In production, send to your email service provider
      // Example: ConvertKit, Mailchimp, or custom backend
      console.log("Lead captured:", { email, company });
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-emerald-500/10 to-sky-500/10 border-2 border-emerald-500/30 rounded-2xl p-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-emerald-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-100 mb-2">
            Check Your Inbox!
          </h3>
          <p className="text-slate-300 mb-4">
            Your DevOps ROI Calculator is on its way to{" "}
            <span className="text-emerald-400 font-medium">{email}</span>
          </p>
          <p className="text-sm text-slate-400">
            Can't find it? Check your spam folder or{" "}
            <a
              href="mailto:contact@basvandriel.nl"
              className="text-emerald-400 hover:text-emerald-300 underline"
            >
              contact me directly
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-emerald-500/10 to-sky-500/10 border-2 border-emerald-500/30 rounded-2xl p-6 lg:p-8 relative overflow-hidden">
      {/* Animated badge */}
      <div className="absolute -top-3 -right-3">
        <div className="bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
          🎁 FREE TOOL
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Left: Value prop */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Downloaded by 247 engineering teams
          </div>

          <h3 className="text-xl lg:text-2xl font-bold text-slate-100 mb-2">
            Calculate How Much Your Downtime{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
              Actually Costs
            </span>
          </h3>

          <p className="text-slate-300 text-sm lg:text-base mb-4">
            Get the exact spreadsheet I use with enterprise clients to quantify
            DevOps ROI. Includes:
          </p>

          <ul className="space-y-2 text-sm text-slate-300 mb-4">
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              Downtime cost calculator (€ per hour)
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              Deployment efficiency analyzer
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              Infrastructure waste detector
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              ROI projections for common improvements
            </li>
          </ul>
        </div>

        {/* Right: Form */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Work Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Corp"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
              size="lg"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                <>
                  Download Free Calculator
                  <span className="ml-2">→</span>
                </>
              )}
            </Button>

            <p className="text-xs text-slate-500 text-center">
              🔒 No spam. Instant download. Unsubscribe anytime.
            </p>
          </form>

          {/* Social proof */}
          <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center justify-center gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-1">
              <span>⭐</span>
              <span>4.9/5 rating</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-1">
              <span>📥</span>
              <span>247 downloads</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
