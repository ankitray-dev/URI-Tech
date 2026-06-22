// ─── FOOTER ───

import Link from "next/link";
import { FOOTER_COLUMNS, SOCIAL_LINKS, COPYRIGHT } from "@/constants";
import { SECTION_CONTAINER, SECTION_PADDING } from "@/lib/layout";

export default function Footer() {
  return (
    <footer className="bg-background border-border border-t">
      <div className={SECTION_PADDING}>
        <div className={SECTION_CONTAINER}>
          <div className="mb-10">
            <Link href="#home" className="text-logo font-bold tracking-tight">
              <span className="text-brand-blue">URI</span>
              <span className="text-text-dark"> Tech</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 md:gap-10 lg:grid-cols-4">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-text-dark mb-4 text-sm font-semibold">
                  {column.title}
                </h3>
                {column.content && (
                  <address className="text-text-subtle space-y-1 text-sm not-italic">
                    {column.content.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </address>
                )}
                {column.links && (
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-text-subtle hover:text-text-dark text-sm transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="border-border mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
            <p className="text-text-muted text-sm">{COPYRIGHT}</p>
            <ul className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-brand-blue flex h-9 w-9 items-center justify-center transition-colors"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── END FOOTER ───
