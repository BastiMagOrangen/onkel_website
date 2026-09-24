import Link from "next/link";
import styles from "./SiteFooter.module.css";

/** Copyright line with links to the legal pages. */
export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <p>&copy; Dr. Clemens Seidl, 2026</p>
        <nav aria-label="Rechtliches" className={styles.links}>
          <Link prefetch={false} href="/datenschutz/">Datenschutz</Link>
          <Link prefetch={false} href="/impressum/">Impressum</Link>
        </nav>
      </div>
    </footer>
  );
}
