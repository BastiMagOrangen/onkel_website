import { ExternalLink } from "@/components/ExternalLink";
import type { Metadata } from "next";
import Image from "next/image";
import room from "@/assets/vereinbarung.jpg";

export const metadata: Metadata = { title: "Leistungen" };

export default function LeistungenPage() {
  return (
    <div className="page wrap">
      <div className="page-head">
        <h1>Konservativ</h1>
      </div>

      <div className="split">
        <div className="card">
          <ul className="ticks">
            <li>Unfallchirurgische Fragestellungen inkl. Nachbehandlung</li>
            <li>Orthopädische Fragestellungen inkl. Nachbehandlung</li>
            <li>Kindertraumatologie</li>
            <li>Handpathologien</li>
            <li>Fußpathologien</li>
            <li>Gelenksarthrosen</li>
            <li>Wirbelsäule (Schmerztherapie, Abklärung, ...)</li>
            <li>Ansatztendinopathien</li>
            <li>Wundbehandlungen (auch chronische Wunden)</li>
            <li>Manuelle Medizin</li>
            <li>Kinesio Taping</li>
            <li><ExternalLink href="https://acp-therapie.at/">ACP</ExternalLink></li>
            <li><ExternalLink href="https://repuls.at/repuls-fuer-zuhause/">Repuls</ExternalLink></li>
            <li>Hyaluronsäure Therapie - Knorpelaufbaukur</li>
            <li>Schmerztherapie</li>
            <li>Infusionstherapie</li>
            <li>Neuraltherapie</li>
            <li>Infiltrationstherapie</li>
            <li>Verordnung von Heilbehelfen (z.B. Unterarmstützkrücken, Gehwagen, Rollstuhl, ...)</li>
            <li>Verordnung von Heilgymnastik, Physiotherapie, Ergotherapie, Rückenschule, ...</li>
          </ul>
        </div>
        <div className="photo sticky">
          <Image src={room} alt="" sizes="(min-width: 900px) 440px, 100vw" />
        </div>
      </div>

      <section className="card" style={{ marginTop: "clamp(2rem, 5vw, 3.5rem)" }}>
        <h2>Operativ</h2>
        <ul className="ticks columns">
          <li>Unfallchirurgische Operationen</li>
          <li>Kindertraumatologische Operationen</li>
          <li>Folgeoperationen nach unfallchirurgischen Operationen</li>
          <li>Materialentfernungen</li>
          <li>Handchirurgie (Karpaltunnelsyndrom, schnellender Finger, Tendovaginitis de Quervain, Dupuytren&apos;sche Kontraktur, Fingergelenksarthrose, …)</li>
          <li>Endoprothetik Hüfte und Knie</li>
          <li>Nervenkompressionssyndrome</li>
          <li>Sehnenchirurgie - Achillessehne, Sehnenscheidenengen</li>
          <li>Arthroskopische Operationen an Knie und Hand</li>
          <li>Fußchirurgie (z.B. Hallux valgus, Hallux rigidus, Hammerzehen, Metatarsalgie, Arthrosen der Fußgelenke, …)</li>
          <li>Wundrevisionen bzw. -sanierungen</li>
        </ul>
      </section>
    </div>
  );
}
