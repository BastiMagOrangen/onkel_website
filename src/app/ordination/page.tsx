import { ExternalLink } from "@/components/ExternalLink";
import type { Metadata } from "next";
import { ImageCarousel } from "@/components/ImageCarousel";
import { MapEmbed } from "@/components/MapEmbed";
import { BOOKING_URL } from "@/lib/site";
import ordination from "@/assets/ordination.jpg";
import leistungen from "@/assets/leistungen.jpg";
import vereinbarung from "@/assets/vereinbarung.jpg";

export const metadata: Metadata = { title: "Ordination" };

const SLIDES = [
  { src: ordination, alt: "ordination1" },
  { src: leistungen, alt: "ordination2" },
  { src: vereinbarung, alt: "ordination3" },
];

export default function OrdinationPage() {
  return (
    <div className="page wrap">
      <div className="page-head page-head--wide">
        <h1>Ordination Maria Enzersdorf</h1>
      </div>

      <div className="split">
        <div className="stack">
          <section className="card">
            <h2>Wahlarzt</h2>
            <div className="facts">
              <p><b>Adresse:</b> Südstadtzentrum 1/5/1 2344 Maria Enzersdorf</p>
              <p><b>Telefon:</b> <a href="tel:+436763580037">+43 (0) 676/3580037</a></p>
              <p><b>Email:</b> <a href="mailto:ordination@dr-seidl.at">ordination@dr-seidl.at</a></p>
            </div>
          </section>

          <section className="card">
            <h2>Terminvereinbarung</h2>
            <div className="facts">
              <p>Telefonisch Montag bis Freitag 14 bis 19 Uhr</p>
              <p>Per E-Mail oder SMS</p>
              <p><ExternalLink href={BOOKING_URL}>Online Terminvereinbarung</ExternalLink></p>
              <p>Bei Notfällen jederzeit!</p>
              <p><b>Ordinationszeiten:</b> Dienstag von 14 - 20 Uhr sowie nach Bedarf</p>
              <p><b>Hausbesuche: nach telefonischer Vereinbarung</b></p>
            </div>
          </section>

          <section className="card">
            <h2>Preise</h2>
            <p>Erstordination: 120 €</p>
            <p>Folgeordination je nach Aufwand</p>
            <p>Honorarnoten können</p>
            <ul className="ticks">
              <li>bar</li>
              <li>mit Bankomatkarte</li>
              <li>mit Kreditkarte</li>
            </ul>
            <p>beglichen werden</p>
            <p>Bitte haben Sie Verständnis, dass eine <b>Bezahlung per Rechnung nicht möglich</b> ist!</p>
            <p>Zur Erstordination bitte mitnehmen:</p>
            <ul className="ticks">
              <li>Aktuelle Befunde</li>
              <li>Röntgenbilder, MRT, Sonographie, ... (wenn möglich DVD und schriftlicher Befund)</li>
              <li>Dauermedikation</li>
              <li>Dauerdiagnosen</li>
              <li>Voroperation</li>
            </ul>
          </section>
        </div>

        <div className="stack sticky">
          <ImageCarousel slides={SLIDES} />
          <section className="card">
            <h2>Standort</h2>
            <p><b>Lage:</b> Die Ordination liegt in verkehrsgünstiger Lage im neu errichteten Südstadtzentrum. Parkmöglichkeiten sind in der Nähe der Ordination ausreichend vorhanden. Die Ordination ist im 1. Stock und barrierefrei mit einem Lift erreichbar.</p>
            <h2>Öffentliche Erreichbarkeit</h2>
            <MapEmbed />
          </section>
        </div>
      </div>
    </div>
  );
}
