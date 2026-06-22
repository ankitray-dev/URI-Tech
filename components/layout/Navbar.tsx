// ─── NAVBAR ───

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants";
import {
  NAVBAR_PADDING_Y,
  SECTION_CONTAINER,
  SECTION_PADDING_X,
} from "@/lib/layout";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`bg-background sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-nav" : ""
      }`}
    >
      <div className={SECTION_PADDING_X}>
        <nav
          className={`${SECTION_CONTAINER} ${NAVBAR_PADDING_Y} flex items-center justify-between`}
          aria-label="Main navigation"
        >
          <Link
            href="#home"
            className="text-logo font-bold tracking-tight"
            onClick={closeMenu}
          >
            <span className="text-brand-blue">URI</span>
            <span className="text-text-dark"> Tech</span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-medium hover:text-text-dark text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="primary" href="#">
              Get Started
            </Button>
          </div>

          <button
            type="button"
            className="text-text-dark border-border rounded-card flex h-10 w-10 items-center justify-center border lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <div
          id="mobile-menu"
          className={`border-border border-t lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className={SECTION_CONTAINER}>
            <ul className="flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-medium hover:text-text-dark block py-3 text-base font-medium transition-colors"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-border flex flex-col gap-3 border-t py-4">
              <Button variant="primary" href="#" className="w-full justify-center">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ─── END NAVBAR ───
