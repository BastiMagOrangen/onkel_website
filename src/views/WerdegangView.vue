<script setup>
</script>

<template>
    <main>
        <div class="container">
            <h1>Werdegang</h1>
            <div class="row">
                <div class="col">
                    <h3>2010</h3>
                    <p>Promotion zum Dr. med. univ.</p>
                    <h3>2011 - 2013</h3>
                    <p>Ausbildung zum Allgemeinmediziner zunächst in der Lehrpraxis Ordination Dr. Reisner in Hornstein und danach als Turnusarzt am Landesklinikum Baden</p>
                    <h3>2014 - 2019</h3>
                    <p>Facharztausbildung für Orthopädie und Traumatologie am Landesklinikum Baden/Mödling, am Orthopädischen Krankenhaus Speising, sowie am Landesklinikum Hall in Tirol</p>
                    <br>
                    <p>Seit Jänner <b>2020</b> Facharzt für Orthopädie und Traumatologie</p>
                    <br>
                    <p>Seit Mai <b>2020</b> Oberarzt an der Abteilung für Orthopädie und Traumatologie am Landesklinikum Baden/Mödling</p>
                </div>
                <div class="col">
                    <img src="../assets/werdegang.jpg" alt="">
                </div>
            </div>
            <div class="sonstiges">
                <h2>Sonstiges</h2>
                <br>
                <p>Ärztekammerdiplom / Manuelle Medizin</p>
                <br>
                <p>Fortbildungsdiplom der österreichischen Ärztekammer</p>
                <br>
                <p>Referent an der Gesundheits- und Krankenplfegeschule Baden</p>
                <br>
                <p>Referent an der Fachhochschule Wiener Neustadt (Ergotherapie)</p>
            </div>
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
        width: 100%;
    }

    @media (max-width: 650px) {
        .row {
            flex-direction: column;
        }
    }
</style>