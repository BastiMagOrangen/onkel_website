"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/assets/ClemensSeidl_Logo_web.svg";
import { BOOKING_URL, NAV_LINKS } from "@/lib/site";
import { ExternalLink } from "./ExternalLink";
import { Icon } from "./Icon";
import styles from "./SiteHeader.module.css";

/** Sticky top bar with logo, main navigation and a collapsible mobile menu. */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu after every navigation.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={styles.header}>
      <a href="#inhalt" className="skip-link">Zum Inhalt springen</a>
      <div className={`wrap ${styles.bar}`}>
        <Link prefetch={false} href="/" className={styles.logo} aria-label="Dr. Clemens Seidl – Startseite">
          <Image src={logo} alt="Dr. Clemens Seidl" priority />
        </Link>

        <nav
          id="hauptmenue"
          aria-label="Hauptnavigation"
          className={`${styles.nav} ${open ? styles.open : ""}`}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              prefetch={false}
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={styles.link}
            >
              {label}
            </Link>
          ))}
          <ExternalLink href={BOOKING_URL} className={`btn ${styles.cta}`}>Jetzt buchen</ExternalLink>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="hauptmenue"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} width="1.6rem" height="1.6rem" />
          <span className="visually-hidden">{open ? "Menü schließen" : "Menü öffnen"}</span>
        </button>
      </div>
    </header>
  );
}
