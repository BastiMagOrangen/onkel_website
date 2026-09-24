import type { Metadata } from "next";
import Image from "next/image";
import portrait from "@/assets/werdegang.jpg";

export const metadata: Metadata = { title: "Werdegang" };

export default function WerdegangPage() {
  return (
    <div className="page wrap">
      <div className="page-head">
        <h1>Werdegang</h1>
      </div>

      <div className="split">
        <ol className="timeline">
          <li>
            <h3>2010</h3>
            <p>Promotion zum Dr. med. univ.</p>
          </li>
          <li>
            <h3>2011 - 2013</h3>
            <p>Ausbildung zum Allgemeinmediziner zunächst in der Lehrpraxis Ordination Dr. Reisner in Hornstein und danach als Turnusarzt am Landesklinikum Baden</p>
          </li>
          <li>
            <h3>2014 - 2019</h3>
            <p>Facharztausbildung für Orthopädie und Traumatologie am Landesklinikum Baden/Mödling, am Orthopädischen Krankenhaus Speising, sowie am Landesklinikum Hall in Tirol</p>
          </li>
          <li className="timeline-now">
            <p>Seit Jänner <b>2020</b> Facharzt für Orthopädie und Traumatologie</p>
          </li>
          <li className="timeline-now">
            <p>Seit Mai <b>2020</b> Oberarzt an der Abteilung für Orthopädie und Traumatologie am Landesklinikum Baden/Mödling</p>
          </li>
        </ol>
        <div className="photo sticky">
          <Image src={portrait} alt="" sizes="(min-width: 900px) 440px, 100vw" />
        </div>
      </div>

      <section className="card" style={{ marginTop: "clamp(2rem, 5vw, 3.5rem)" }}>
        <h2>Sonstiges</h2>
        <ul className="ticks">
          <li>Ärztekammerdiplom / Manuelle Medizin</li>
          <li>Fortbildungsdiplom der österreichischen Ärztekammer</li>
          <li>Referent an der Gesundheits- und Krankenplfegeschule Baden</li>
          <li>Referent an der Fachhochschule Wiener Neustadt (Ergotherapie)</li>
        </ul>
      </section>
    </div>
  );
}
