"use client";

import { useCookieConsent } from "@/lib/cookie-consent";
import styles from "./MapEmbed.module.css";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1332.395398607328!2d16.307468083643567!3d48.094978964143294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476daf1fa988f1e7%3A0x86b0bed8639c8c8f!2sS%C3%BCdstadtzentrum%201%2F1%2C%202344%20Maria%20Enzersdorf!5e0!3m2!1sde!2sat!4v1605386320573!5m2!1sde!2sat";

/** Google Maps embed that is only loaded after the visitor accepted cookies. */
export function MapEmbed() {
  const { status } = useCookieConsent();

  if (status !== "accepted") {
    return (
      <p className={styles.placeholder}>
        Google Maps wird nicht angezeigt. Akzeptiere die Cookies, um diese Funktion zu nutzen.
      </p>
    );
  }

  return (
    <iframe
      className={styles.map}
      src={MAP_SRC}
      title="Karte: Südstadtzentrum 1, 2344 Maria Enzersdorf"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
