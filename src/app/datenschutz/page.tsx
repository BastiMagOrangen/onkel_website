import { ExternalLink } from "@/components/ExternalLink";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutzerklärung" };

export default function DatenschutzPage() {
  return (
    <div className="page wrap">
      <div className="page-head">
        <h1>Datenschutzerklärung</h1>
      </div>

      <div className="card prose">
        <h2>Allgemeines zur Datenverarbeitung</h2>

        <h3>Verantwortlicher</h3>
        <p>Verantwortlich für die Datenverarbeitung ist: Dr. Clemens Seidl</p>
        <p>Südstadtzentrum 1/5/1, 2344 Maria Enzersdorf</p>
        <p>Sollten Sie irgendwelche Fragen oder Anliegen bezüglich Ihrer Daten haben, kontaktieren sie <a href="mailto:ordination@dr-seidl.at">ordination@dr-seidl.at</a>.</p>
        <p>Tel: +43 (0) 676/3580037</p>

        <h3>Umfang der Verarbeitung personenbezogener Daten</h3>
        <p>Wir verarbeiten personenbezogene Daten unserer Nutzer nur, um den Standort der Ordination visuell besser darzustellen.</p>

        <h3>Rechtsgrundlage für die Verarbeitung personenbezogener Daten</h3>
        <p>Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.</p>

        <h3>Ihre Rechte</h3>
        <p>Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen, sowie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung. Genauso wie das Recht darauf die Einwilligung zu widerrufen und das Recht auf Beschwerde bei der Datenschutzbehörde.</p>

        <h2>Zustimmung wiederrufen</h2>
        <p>Sie können Ihre Zustimmung jederzeit wiederrufen, indem Sie auf den Button unten links klicken.</p>

        <h2>Einbindung von Google Maps und Weitergabe an Dritte</h2>
        <p>Auf unserer Website nutzen wir das Angebot von Google Maps. Dadurch können wir Ihnen interaktive Karten direkt in der Website anzeigen und ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion.</p>
        <p>Durch Ihre Zustimmung erhält Google die Information, dass Sie die entsprechende Unterseite unserer Website aufgerufen haben, oder die IP-Adresse. Zudem werden weitere Daten übermittelt. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Sie eingeloggt sind, oder ob kein Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto zugeordnet.</p>
        <p>Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <ExternalLink href="https://www.google.de/intl/de/policies/privacy/">https://www.google.de/intl/de/policies/privacy/</ExternalLink>.</p>

        <h2>Aktualität und Änderung dieser Datenschutzerklärung</h2>
        <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand (März 2025). Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.</p>
      </div>
    </div>
  );
}
