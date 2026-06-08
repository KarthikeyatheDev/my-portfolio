import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className="relative px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-150 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 group"
  >
    {children}
  </a>
);

export default NavLink;