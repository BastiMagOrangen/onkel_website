import type { AnchorHTMLAttributes } from "react";

/** Link to another website; opens in a new tab without leaking the opener. */
export function ExternalLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="visually-hidden"> (öffnet in neuem Tab)</span>
    </a>
  );
}
