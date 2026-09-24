import type { Metadata } from "next";
import Image from "next/image";
import portrait from "@/assets/ubermich.jpg";

export const metadata: Metadata = { title: "Über mich" };

export default function AboutPage() {
  return (
    <div className="page wrap">
      <div className="page-head">
        <h1>Über mich</h1>
      </div>

      <div className="split">
        <div className="card">
          <p>Seit Jänner 2020 bin ich Facharzt für Orthopädie und Traumatologie, seit Mai 2020 Oberarzt am Landesklinikum Baden/Mödling, in welchem ich auch den Großteil meiner Ausbildung absolvierte.</p>
          <p>Während meiner 1½-Jährigen Tätigkeit als Assistenz- sowie Facharzt am Landesklinikum Hall in Tirol konnte ich zahlreiche einschlägige Erfahrungen aus dem Bereich der Sportverletzungen sammeln.</p>
          <p>Bereits während meiner Ausbildung entdeckte ich mein Interesse für die Handchirurgie und absolvierte daher mehrere Fortbildungen auf diesem Gebiet. Da ich mich auf diesem Spezialgebiet stark engagierte, wurde mir auch die Möglichkeit geboten, viele einschlägige operative Erfahrungen zu sammeln.</p>
        </div>
        <div className="photo sticky">
          <Image src={portrait} alt="" priority sizes="(min-width: 900px) 440px, 100vw" />
        </div>
      </div>

      <div className="prose" style={{ marginTop: "clamp(2rem, 5vw, 3.5rem)" }}>
        <p>Die Hand stellt eine der wichtigsten Strukturen im täglichen Leben dar und ihre Funktion macht den Menschen zum Menschen. Fehlfunktionen der Hand führen zu einer drastischen Beeinträchtigung der Lebensqualität und gehen oft mit starken Schmerzen einher.</p>
        <p>Auch viele andere Erkrankungen des muskuloskeletalen Systems führen zu einer Einschränkung der Lebensqualität und starken, oft auch chronischen, Schmerzen. Ich möchte hier gemeinsam mit Ihnen eine Therapiekonzept erstellen, um Ihnen ein schmerzfreies oder schmerzarmes Leben zu ermöglichen. Dies kann man durch diverse konservative Therapien und auch operative Verfahren erreichen. Mir ist es wichtig, vor einer operativen Versorgung alle konservativen Möglichkeiten auszuschöpfen. Hier stehen vor allem bei Arthrosen und Rückenschmerzen viele Möglichkeiten zur Verfügung.</p>
        <p>Sollte dennoch eine Operation nötig sein, kann ich diese durch meine Anbindung am LK Baden/Mödling dort durchführen. Sie werden von mir vor der Operation ausführlich über die geplante Vorgehensweise aufgeklärt und auch nach der Operation weiter betreut.</p>
        <p>Als Wahlarzt kann ich in meiner Ordination ohne Zeitdruck alle Ihre Fragen beantworten und mit Ihnen gemeinsam einen individuellen Therapieplan erstellen.</p>
        <p>Ich freue mich auf eine gute und erfolgreiche Zusammenarbeit!</p>
      </div>
    </div>
  );
}
