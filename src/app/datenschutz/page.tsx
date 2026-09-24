import { ExternalLink } from "@/components/ExternalLink";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutzerklärung" };

export default function DatenschutzPage() {
  return (
    <div className="page wrap">
      <div className="page-head page-head--wide">
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
        <p>Wir verarbeiten personenbezogene Daten unserer Nutzer nur, um den Standort der Ordination visuell besser darzustellen (Google Maps, nur mit Ihrer Einwilligung), um die Website technisch bereitzustellen und um Ihre Anfragen per E-Mail oder Telefon zu beantworten.</p>

        <h3>Rechtsgrundlage für die Verarbeitung personenbezogener Daten</h3>
        <p>Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) in Verbindung mit § 165 Abs. 3 Telekommunikationsgesetz 2021 als Rechtsgrundlage.</p>
        <p>Für die technische Bereitstellung der Website (Server-Logfiles) ist die Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website). Für die Beantwortung von Anfragen ist es Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f DSGVO.</p>

        <h3>Server-Logfiles</h3>
        <p>Beim Aufruf dieser Website verarbeitet der Webserver unseres Hosting-Anbieters World4You Internet Services GmbH (Hafenstraße 47–51, 4020 Linz, Österreich) automatisch technisch notwendige Daten, insbesondere die IP-Adresse, Datum und Uhrzeit, die aufgerufene Seite sowie Browser- und Betriebssysteminformationen. Diese Daten dienen dem sicheren Betrieb der Website und werden nicht mit anderen Daten zusammengeführt. Mit dem Hosting-Anbieter besteht ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.</p>

        <h3>Kontaktaufnahme</h3>
        <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, Kontaktdaten, Inhalt der Anfrage) ausschließlich zur Bearbeitung Ihres Anliegens. Die Daten werden nicht ohne Ihre Einwilligung weitergegeben.</p>

        <h3>Speicherdauer</h3>
        <p>Das Cookie zur Speicherung Ihrer Einwilligung wird für 30 Tage in Ihrem Browser gespeichert. Anfragen werden gelöscht, sobald sie erledigt sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Server-Logfiles werden vom Hosting-Anbieter nur für kurze Zeit gespeichert.</p>

        <h3>Ihre Rechte</h3>
        <p>Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen, sowie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung. Genauso wie das Recht darauf die Einwilligung zu widerrufen und das Recht auf Beschwerde bei der Datenschutzbehörde (Barichgasse 40–42, 1030 Wien, <ExternalLink href="https://www.dsb.gv.at/">www.dsb.gv.at</ExternalLink>).</p>

        <h2>Zustimmung widerrufen</h2>
        <p>Sie können Ihre Zustimmung jederzeit widerrufen, indem Sie auf den Button unten links klicken. Die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung bleibt davon unberührt.</p>

        <h2>Einbindung von Google Maps und Weitergabe an Dritte</h2>
        <p>Auf unserer Website nutzen wir das Angebot von Google Maps. Dadurch können wir Ihnen interaktive Karten direkt in der Website anzeigen und ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion.</p>
        <p>Durch Ihre Zustimmung erhält Google die Information, dass Sie die entsprechende Unterseite unserer Website aufgerufen haben, oder die IP-Adresse. Zudem werden weitere Daten übermittelt. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Sie eingeloggt sind, oder ob kein Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto zugeordnet.</p>
        <p>Empfänger ist Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland) bzw. deren Muttergesellschaft Google LLC (USA). Eine Übermittlung in die USA stützt sich auf den Angemessenheitsbeschluss der EU-Kommission zum EU-U.S. Data Privacy Framework, dem Google angehört.</p>
        <p>Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <ExternalLink href="https://www.google.de/intl/de/policies/privacy/">https://www.google.de/intl/de/policies/privacy/</ExternalLink>.</p>

        <h2>Aktualität und Änderung dieser Datenschutzerklärung</h2>
        <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand (September 2026). Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.</p>
      </div>
    </div>
  );
}
