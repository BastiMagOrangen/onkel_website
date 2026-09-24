"use client";

import Link from "next/link";
import { useCookieConsent } from "@/lib/cookie-consent";
import { Icon } from "./Icon";
import styles from "./CookieBanner.module.css";

/**
 * Consent dialog for the Google Maps embed. After a decision it collapses to a
 * round button that lets the visitor revoke the consent at any time.
 */
export function CookieBanner() {
  const { status, ready, accept, decline, revoke } = useCookieConsent();

  if (!ready) return null;

  if (status !== "unknown") {
    return (
      <button
        type="button"
        className={styles.settings}
        onClick={revoke}
        aria-label="Cookie-Einstellungen ändern"
        title="Cookie-Einstellungen ändern"
      >
        <Icon name="cookie" width="1.5rem" height="1.5rem" />
      </button>
    );
  }

  return (
    <section className={styles.banner} role="dialog" aria-labelledby="cookie-titel">
      <h3 id="cookie-titel">Cookies</h3>
      <p>
        Wir verwenden Cookies auf unserer Seite, um mithilfe von Google Maps den
        Standort der Ordination visuell besser darzustellen.
      </p>
      <p>
        Dafür benötigen wir eine Einwilligung. Diese können sie auch jederzeit
        links unten wiederrufen.
      </p>
      <p>
        Unsere Datenschutzerklärung ist hier einsehbar:{" "}
        <Link prefetch={false} href="/datenschutz/">Datenschutzerklärung</Link>. Wenn sie auf
        &quot;Cookies akzeptieren&quot; klicken, stimmen sie der Verwendung von
        Cookies zu und akzeptieren unsere Datenschutzerklärung.
      </p>
      <p>
        Sollte den Cookies nicht zugestimmt werden, wird Google Maps auch nicht
        auf der Seite angezeigt.
      </p>
      <h4>Rechte:</h4>
      <p>
        Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten
        personenbezogenen Daten zu verlangen, sowie das Recht auf Berichtigung,
        Löschung oder Einschränkung der Verarbeitung.
      </p>
      <p>
        Genauso wie das Recht darauf die Einwilligung zu widerrufen und das
        Recht auf Beschwerde bei der Datenschutzbehörde.
      </p>
      <div className={styles.actions}>
        <button type="button" className="btn" onClick={accept}>
          Cookies akzeptieren
        </button>
        <button type="button" className="btn btn--ghost" onClick={decline}>
          Cookies ablehnen
        </button>
      </div>
    </section>
  );
}
