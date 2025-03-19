<script setup>

</script>

<template>
    <main>
        <div class="container">
            <h1>Über mich</h1>
            <div class="row">
                <div class="col">
                    <p>Seit Jänner 2020 bin ich Facharzt für Orthopädie und Traumatologie, seit Mai 2020 Oberarzt am Landesklinikum Baden/Mödling, in welchem ich auch den Großteil meiner Ausbildung absolvierte.</p>
                    <p>Während meiner 1½-Jährigen Tätigkeit als Assistenz- sowie Facharzt am Landesklinikum Hall in Tirol konnte ich zahlreiche einschlägige Erfahrungen aus dem Bereich der Sportverletzungen sammeln.</p>
                    <p>Bereits während meiner Ausbildung entdeckte ich mein Interesse für die Handchirurgie und absolvierte daher mehrere Fortbildungen auf diesem Gebiet. Da ich mich auf diesem Spezialgebiet stark engagierte, wurde mir auch die Möglichkeit geboten, viele einschlägige operative Erfahrungen zu sammeln.</p>
                </div>
                <div class="col">
                    <img src="../assets/ubermich.jpg" alt="">
                </div>
            </div>
            <p>Die Hand stellt eine der wichtigsten Strukturen im täglichen Leben dar und ihre Funktion macht den Menschen zum Menschen. Fehlfunktionen der Hand führen zu einer drastischen Beeinträchtigung der Lebensqualität und gehen oft mit starken Schmerzen einher.</p>
                    <p>Auch viele andere Erkrankungen des muskuloskeletalen Systems führen zu einer Einschränkung der Lebensqualität und starken, oft auch chronischen, Schmerzen. Ich möchte hier gemeinsam mit Ihnen eine Therapiekonzept erstellen, um Ihnen ein schmerzfreies oder schmerzarmes Leben zu ermöglichen. Dies kann man durch diverse konservative Therapien und auch operative Verfahren erreichen. Mir ist es wichtig, vor einer operativen Versorgung alle konservativen Möglichkeiten auszuschöpfen. Hier stehen vor allem bei Arthrosen und Rückenschmerzen viele Möglichkeiten zur Verfügung.</p>
                    <p>Sollte dennoch eine Operation nötig sein, kann ich diese durch meine Anbindung am LK Baden/Mödling dort durchführen. Sie werden von mir vor der Operation ausführlich über die geplante Vorgehensweise aufgeklärt und auch nach der Operation weiter betreut.</p>
                    <p>Als Wahlarzt kann ich in meiner Ordination ohne Zeitdruck alle Ihre Fragen beantworten und mit Ihnen gemeinsam einen individuellen Therapieplan erstellen.</p>
                    <p>Ich freue mich auf eine gute und erfolgreiche Zusammenarbeit!</p>
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

    p{
        text-align: left;
    }

    .container h3 {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }

    .container p {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .sonstiges p{
        text-align: left;
    }

    .row {
        display: flex;
        justify-content: space-between;
    }

    .col {
        flex: 1;
        text-align: left;
    }

    img {
        width: 80%;
        margin-left: 30px;
    }

    @media (max-width: 650px) {
        .row {
            flex-direction: column;
        }
    }
</style>