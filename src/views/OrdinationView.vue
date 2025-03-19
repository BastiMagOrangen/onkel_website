<script setup>
import ordination from '../assets/ordination.jpg';
import leistungen from '../assets/leistungen.jpg';
import vereinbarung from '../assets/vereinbarung.jpg';
import { useCookieStore } from '../stores/cookies';
</script>

<template>
    <main>
      <div class="container">
        <h1>Ordination Maria Enzersdorf</h1>
        <div class="row">
          <div class="col">
            <h2>Wahlarzt</h2>
            <p><b>Adresse:</b> Südstadtzentrum 1/5/1 2344 Maria Enzersdorf</p>
            <p><b>Telefon:</b> +43 (0) 676/3580037</p>
            <p><b>Email:</b> <a href="mailto:ordination@dr-seidl.at">ordination@dr-seidl.at</a></p>
            <h2>Terminvereinbarung</h2>
            <p>Telefonisch Montag bis Freitag 14 bis 19 Uhr</p>
            <p>Per E-Mail oder SMS</p>
            <p><a href="https://patient.latido.at/arzt/_Seidl">Online Terminvereinbarung</a></p>
            <p>Bei Notfällen jederzeit!</p>
            <p><b>Ordinationszeiten:</b> Dienstag von 14 - 20 Uhr sowie nach Bedarf</p>
            <p><b>Hausbesuche: nach telefonischer Vereinbarung</b></p>
            <h2>Preise</h2>
            <p>Erstordination: 120 €</p>
            <p>Folgeordination je nach Aufwand</p>
            <p>Honorarnoten können</p>
            <ul>
              <li>bar</li>
              <li>mit Bankomartkarte</li>
              <li>mit Kreditkarte</li>
            </ul>
            <p>beglichen werden</p>
            <p>Bitte haben Sie Verständnis, dass eine <b>Bezahlung per Rechnung nicht möglich</b> ist!</p>
            <p>Zur Erstordination bitte mitnehmen:</p>
            <ul>
              <li>Aktuelle Befunde</li>
              <li>Röntgenbilder, MRT, Sonographie, ... (wenn möglich DVD und schriftlicher Befund)</li>
              <li>Dauermedikation</li>
              <li>Dauerdiagnoesen</li>
              <li>Voroperation</li>
            </ul>
          </div>
          <div class="col">
            <div class="carousel">
              <img src="" alt="" class="img">
            </div>
            <h2>STANDORT</h2>
            <p><b>Lage:</b> Die Ordination liegt in verkehrsgünstiger Lage im neu errichteten Südstadtzentrum. Pakrmöglichkeiten sind in der Nähe der Ordination ausreichend vorhanden. Die Ordination ist im 1. Stock und barrierefrei mit einem Lift erreichbar.</p>
            <h2>Öffentliche Erreichbarkeit</h2>
            <div>
              <iframe v-if="cookieStore.accepted" class="hochiframe" id="noShow"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1332.395398607328!2d16.307468083643567!3d48.094978964143294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476daf1fa988f1e7%3A0x86b0bed8639c8c8f!2sS%C3%BCdstadtzentrum%201%2F1%2C%202344%20Maria%20Enzersdorf!5e0!3m2!1sde!2sat!4v1605386320573!5m2!1sde!2sat"
                            width="410" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
              <p v-else>Google Maps wird nicht angezeigt. Akzeptiere die Cookies, um diese Funktion zu nutzen.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: ordination,
          alt: 'ordination1'
        },
        {
          src: leistungen,
          alt: 'ordination2'
        },
        {
          src: vereinbarung,
          alt: 'ordination3'
        }
      ],
      cookieStore: useCookieStore()
    }
  },
  mounted() {
    this.cookieStore.checkCookies();
    console.log();
    let i = 0;
    setInterval(() => {
      i++;
      if (i === this.images.length) i = 0;
      document.querySelector('.img').src = this.images[i].src;
    }, 5000);
  }
}
</script>

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

    .container p {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        text-align: left;
    }

    .container ul {
        text-align: left;
        padding-left: 2rem
    }

    .row {
        display: flex;
        justify-content: space-between;
    }

    .img{
        width: 80%;
    }

    .col {
        padding-left: 20px;
        text-align: left;
    }

    .hochiframe {
        margin-top: 2rem;
    }

    @media (max-width: 760px) {
        .row {
            flex-direction: column;
        }
        .img{
            width: 100%;
            padding-top: 2rem;
        }
    }

    @media (max-width: 460px) {
        .hochiframe {
            width: 100%;
        }
    }
</style>