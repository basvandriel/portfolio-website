import { useState } from "react";
import { Button } from "./ui/Button";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call - replace with actual implementation
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      console.log("Newsletter signup tracked");
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-6 bg-emerald-900/20 border border-emerald-500/20 rounded-lg">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-emerald-400"
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
        <h4 className="font-semibold text-slate-100 mb-2">Welcome aboard!</h4>
        <p className="text-sm text-slate-400">
          You'll get weekly insights on scaling engineering teams.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg">
      <h4 className="font-semibold text-slate-100 mb-2">
        Weekly DevOps Insights
      </h4>
      <p className="text-sm text-slate-400 mb-4">
        Get case studies, tips, and lessons learned from scaling enterprise
        systems. No spam, unsubscribe anytime.
      </p>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          placeholder="your@company.com"
        />
        <Button type="submit" disabled={isLoading} size="sm" className="px-4">
          {isLoading ? "..." : "Subscribe"}
        </Button>
      </form>

      <p className="text-xs text-slate-500 mt-2">
        Join 500+ engineering leaders
      </p>
    </div>
  );
}
