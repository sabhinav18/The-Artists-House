import React from "react";
import { ArrowRight } from "lucide-react";

/**
 * Reusable CTA button.
 * variant: "primary" (gold fill) | "secondary" (outlined)
 */
export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
  type = "button",
  className = "",
  showArrow = true,
  ...rest
}) {
  const base =
    "group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-1 focus-visible:outline-gold";

  const styles = {
    primary:
      "bg-gold text-black hover:bg-gold-light hover:scale-[1.03] active:scale-[0.99]",
    secondary:
      "bg-transparent text-white border border-white/40 hover:border-gold hover:text-gold",
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${styles[variant]} ${className}`} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {content}
    </button>
  );
}
