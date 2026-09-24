import { ExternalLink } from "@/components/ExternalLink";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <div className="page wrap">
      <div className="page-head">
        <h1>Impressum</h1>
      </div>

      <div className="card prose">
        <p>Information gemäß §5 E-Commerce-Gesetz und Offenlegung gemäß §25 Mediengesetz</p>
        <p>Diensteanbieter und Medieninhaber: Dr. Clemens Seidl</p>
        <p>Südstadtzentrum 1/5/1, 2344 Maria Enzersdorf</p>
        <p>Email: <a href="mailto:ordination@dr-seidl.at">ordination@dr-seidl.at</a></p>
        <p>Tel: <a href="tel:+436763580037">+43 (0) 676/3580037</a></p>
        <p>Unternehmensgegenstand: Ärztliche Tätigkeit (Wahlarztordination)</p>
        <p>Grundlegende Richtung der Website: Information über die Ordination, das Leistungsangebot und den Werdegang von Dr. Clemens Seidl</p>
        <h3>Berufsrechtliche Angaben</h3>
        <p>Berufsbezeichnung: Facharzt für Orthopädie und Traumatologie (verliehen in Österreich)</p>
        <p>Kammer: Österreichische Ärztekammer, Ärztekammer für Niederösterreich (<ExternalLink href="https://www.arztnoe.at/">www.arztnoe.at</ExternalLink>)</p>
        <p>Berufsrecht: Ärztegesetz 1998 (<ExternalLink href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&amp;Gesetzesnummer=10011138">abrufbar im Rechtsinformationssystem des Bundes</ExternalLink>)</p>
        <h3>Haftungsausschluss:</h3>
        <p>Dr. Clemens Seidl übernimmt keine Verantwortung oder Haftung für die Aktualität und Richtigkeit sowie Vollständigkeit der Inhalte. Insofern kann Dr. Clemens Seidl für keinerlei Schäden, die sich aus der Nutzung des Inhalts ergeben können, haftbar gemacht werden. Für die Richtigkeit der gebotenen Informationen und der von anderen Diensten übernommenen Daten wird keine Gewähr übernommen.</p>
        <h3>Links zu externen Websites</h3>
        <p>Hiermit distanziert sich Dr. Clemens Seidl ausdrücklich von allen Inhalten aller gelinkten Seiten auf seiner Website. Für den Inhalt dieser gelinkten Seiten übernimmt er keine Verantwortung. Verantwortlich für den Inhalt dieser Links ist der Betreiber der jeweiligen Internet-Angebote.</p>
      </div>
    </div>
  );
}
