<script setup>
</script>

<template>
    <main>
        <div class="container">
            <h1>Konservativ</h1>
            <div class="row">
                <div class="col">
                    <ul>
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
                        <li><a href="https://acp-therapie.at/">ACP</a></li>
                        <li><a href="https://repuls.at/repuls-fuer-zuhause/">Repuls</a></li>
                        <li>Hyaluronsäure Therapie - Knorpelaufbaukur</li>
                        <li>Schmerztherapie</li>
                        <li>Infusionstherapie</li>
                        <li>Neuraltherapie</li>
                        <li>Infiltrationstherapie</li>
                        <li>Verordnung von Heilbehelfen (z.B. Unterarmstützkrücken, Gehwagen, Rollstuhl, ...)</li>
                        <li>Verordnung von Heilgymnastik, Physiotherapie, Ergotherapie, Rückenschule, ...</li>
                    </ul>
                </div>
                <div class="col">
                    <img src="../assets/vereinbarung.jpg" alt="">
                </div>
            </div>
            <h2>Operativ</h2>
            <ul>
                <li>Unfallchirurgische Operationen</li>
                <li>Kindertraumatologische Operationen</li>
                <li>Folgeoperationen nach unfallchirurgischen Operationen</li>
                <li>Materialentfernungen</li>
                <li>Handchirurgie (Karpaltunnelsyndrom, schnellender Finger, Tendovaginitis de Quervain, Dupuytren'sche Kontraktur, Fingergelenksarthrose, …)</li>
                <li>Endoprothetik Hüfte und Knie</li>
                <li>Nervenkompressionssyndrome</li>
                <li>Sehnenchirurgie - Achillessehne, Sehnenscheidenengen</li>
                <li>Arthroskopische Operationen an Knie und Hand</li>
                <li>Fußchirurgie (z.B. Hallux valgus, Hallux rigidus, Hammerzehen, Metatarsalgie, Arthrosen der Fußgelenke, …)</li>
                <li>Wundrevisionen bzw. -sanierungen</li>
            </ul>
        </div>
    </main>
</template>

<style scoped>
    .container {
        background: #c6dada;
        font-family: 'Roboto', sans-serif;
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        padding: 2rem;
    }

    .container h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .container h2 {
        font-size: 2rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    .container h3 {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }

    .container p {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .row {
        display: flex;
        justify-content: space-between;
    }

    .col {
        width: 45%;
    }

    ul {
        text-align: left;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        padding-left: 2rem;
    }

    img {
        width: 100%;
    }

    @media (max-width: 650px) {
        .row {
            flex-direction: column;
        }
    }
</style>