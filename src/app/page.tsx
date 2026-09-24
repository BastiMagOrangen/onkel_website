import { ExternalLink } from "@/components/ExternalLink";
import Image from "next/image";
import portrait from "@/assets/0069.jpg";
import { Icon } from "@/components/Icon";
import { BOOKING_URL } from "@/lib/site";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.text}>
          <h1>Willkommen in meiner Ordination für Orthopädie und Traumatologie</h1>

          <ul className={styles.contact}>
            <li>
              <Icon name="pin" />
              <p>Südstadtzentrum 1/5/1, 2344 Maria Enzersdorf</p>
            </li>
            <li>
              <Icon name="phone" />
              <p>Tel: <a href="tel:+436763580037">+43 (0) 676/3580037</a></p>
            </li>
            <li>
              <Icon name="mail" />
              <p>Email: <a href="mailto:ordination@dr-seidl.at">ordination@dr-seidl.at</a></p>
            </li>
            <li>
              <Icon name="clock" />
              <p>
                <b>Ordinationszeiten:</b> Dienstag 14 – 20 Uhr sowie nach Bedarf<br />
                Telefonisch erreichbar Montag bis Freitag 14 – 19 Uhr
              </p>
            </li>
          </ul>

          <p className={styles.note}>Termine nur nach telefonischer Vereinbarung oder online</p>
          <ExternalLink href={BOOKING_URL} className="btn">Jetzt buchen</ExternalLink>
        </div>

        <div className={styles.media}>
          <div className={`photo ${styles.portrait}`}>
            <Image src={portrait} alt="Dr. Clemens Seidl" priority sizes="(min-width: 900px) 560px, 100vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
