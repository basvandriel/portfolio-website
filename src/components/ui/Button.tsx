import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

const base =
  "inline-flex items-center justify-center rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-emerald-500 text-slate-900 hover:bg-emerald-400 shadow-lg hover:shadow-emerald-500/25",
  ghost:
    "bg-transparent text-slate-300 hover:text-slate-100 hover:bg-slate-800/50",
  outline:
    "border border-slate-600 text-slate-200 hover:bg-slate-800/50 hover:border-slate-500",
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { className, variant = "primary", size = "md", children, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={cx(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
