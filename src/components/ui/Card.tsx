import React from "react";

type Props = React.HTMLAttributes<HTMLElement> & { as?: React.ElementType };

export default function Card({
  as: Component = "div",
  className,
  children,
  ...rest
}: Props) {
  const baseStyles =
    "rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300";

  return (
    <Component
      className={[baseStyles, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </Component>
  );
}
