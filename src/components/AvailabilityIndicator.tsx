import { useState, useEffect } from "react";

export default function AvailabilityIndicator() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Calculate next quarter start
    const now = new Date();
    const currentQuarter = Math.floor(now.getMonth() / 3);
    const nextQuarter = currentQuarter + 1;
    let nextQuarterStart: Date;

    if (nextQuarter > 3) {
      // Next year Q1
      nextQuarterStart = new Date(now.getFullYear() + 1, 0, 1);
    } else {
      // Same year next quarter
      nextQuarterStart = new Date(now.getFullYear(), nextQuarter * 3, 1);
    }

    const updateTimer = () => {
      const diff = nextQuarterStart.getTime() - new Date().getTime();
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setTimeLeft(`${days}d ${hours}h`);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/20 rounded-lg p-4 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
          <div>
            <p className="text-sm font-medium text-amber-200">
              Limited Availability
            </p>
            <p className="text-xs text-amber-300/80">
              Only 2 project spots open for Q1 2025
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-amber-300/60">Next intake in</p>
          <p className="text-sm font-mono text-amber-200">{timeLeft}</p>
        </div>
      </div>
    </div>
  );
}
