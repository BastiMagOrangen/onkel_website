import type { Metadata } from "next";

export const metadata: Metadata = { title: "Wahlarzt" };

export default function WahlarztPage() {
  return (
    <div className="page wrap">
      <div className="page-head page-head--wide">
        <h1>Was ist ein Wahlarzt?</h1>
      </div>

      <div className="split split--even">
        <div className="stack">
          <p>Die Bezeichnung <b>Wahlarzt</b> leitet sich aus dem gesetzlichen Recht des Versicherten (Patienten) ab, sich seinen Arzt frei wählen zu können. Es kann in Österreich kein Versicherter beispielsweise von der Gebietskrankenkasse gezwungen werden, nur Vertragsärzte der Gebietskrankenkasse in Anspruch zu nehmen.</p>
          <p>Als Wahlarzt habe ich keinen Vertrag mit den Krankenkassen. Das heißt, dass Sie meine Leistungen nicht mit der e-card in Anspruch nehmen können und die Verrechnung jeder Untersuchung und Behandlung direkt mit mir erfolgt.</p>
        </div>
        <div className="card">
          <p><b>Das Wahlarztsystem bringt für Sie folgende Vorteile:</b></p>
          <ul className="ticks">
            <li>Ausreichend Zeit für Gespräche, Beratungen und Ihre Anliegen</li>
            <li>rasche Behandlungstermine</li>
            <li>kurze Wartezeiten</li>
            <li>das Wartezimmer nicht mit vielen anderen Patienten teilen zu müssen</li>
          </ul>
        </div>
      </div>

      <div className="split split--even" style={{ marginTop: "clamp(2rem, 5vw, 3.5rem)" }}>
        <section className="card">
          <h2>Rezepte und Überweisungen</h2>
          <p>Wahlarztrezepte können Sie wie gewohnt in jeder Apotheke einlösen - Sie bezahlen nur die übliche Rezeptgebühr. Auch bei den Formularen für die Überweisung zu Fachärzten, Transportscheinen, Bestätigungen usw. ergibt sich für Sie kein Unterschied.</p>
        </section>
        <section className="card">
          <h2>Honorarverrechnung</h2>
          <p>Honorarnoten sind nach erbrachter Leistung in der Ordination zu begleichen.</p>
          <p>Erst in einem zweiten Schritt wird Ihnen durch Einreichung der Honorarnote(n) bei Ihrer gesetzlichen Krankenkasse ein Teil des bezahlten Honorars rückerstattet.</p>
          <p>Sollten Sie eine Privatversicherung („Zusatzversicherung“) für ambulante Leistungen abgeschlossen haben, wird - je nach Versicherungsvertrag - von der Privatversicherung der Differenzbetrag zwischen Kassentarif und Privathonorartarif oder auch das gesamte Privathonorar refundiert.</p>
        </section>
      </div>
    </div>
  );
}
