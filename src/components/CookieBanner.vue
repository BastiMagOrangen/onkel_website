<script setup>
import { useCookieStore } from "../stores/cookies";
</script>

<template>
  <div
    class="cookie-banner"
    v-if="!cookieStore.accepted && !cookieStore.rejected"
  >
    <div class="cookie-content">
      <h3>Cookies</h3>
      <br />
      <p>
        Wir verwenden Cookies auf unserer Seite, um mithilfe von Google Maps den
        Standort der Ordination visuell besser darzustellen.
      </p>
      <p>
        Dafür benötigen wir eine Einwilligung. Diese können sie auch jederzeit
        links unten wiederrufen.
      </p>
      <p>
        Unsere Datenschutzerklärung ist hier einsehbar:
        <router-link to="/datenschutz">Datenschutzerklärung</router-link>. Wenn
        sie auf "Cookies akzeptieren" klicken, stimmen sie der Verwendung von
        Cookies zu und akzeptieren unsere Datenschutzerklärung.
      </p>
      <p>
        Sollte den Cookies nicht zugestimmt werden, wird Google Maps auch nicht
        auf der Seite angezeigt.
      </p>
      <br />
      <h4>Rechte:</h4>
      <br />
      <p>
        Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten
        personenbezogenen Daten zu verlangen, sowie das Recht auf Berichtigung,
        Löschung oder Einschränkung der Verarbeitung.
      </p>
      <p>
        Genauso wie das Recht darauf die Einwilligung zu widerrufen und das
        Recht auf Beschwerde bei der Datenschutzbehörde.
      </p>
      <br />
      <div class="button-group">
        <button class="accept-btn" @click="cookieStore.acceptCookies">
          Cookies akzeptieren
        </button>
        <button class="reject-btn" @click="cookieStore.declineCookies">
          Cookies ablehnen
        </button>
      </div>
    </div>
  </div>
  <!-- Cookie-Button zum erneuten Aufrufen -->
  <button
    class="cookie-settings-btn"
    v-if="cookieStore.accepted || cookieStore.rejected"
    @click="cookieStore.revokeCookies"
    title="Cookie-Einstellungen anpassen"
  >
    🍪
  </button>
</template>

<script>
export default {
  data() {
    return {
      cookieStore: useCookieStore(),
    };
  },
  mounted() {
    this.cookieStore.checkCookies();
  },
};
</script>

<style scoped>
/* .cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 10px;
} */

.cookie-banner {
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  max-width: 500px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 20px;
  z-index: 1000;
  max-height: 80vh; /* Maximale Höhe relativ zum Viewport */
  overflow-y: auto;
}

.cookie-content {
  color: #333;
}

h3 {
  margin: 0 0 10px;
  font-size: 1.5rem;
  color: #2c3e50;
}

p {
  margin: 0 0 10px;
  font-size: 1rem;
  line-height: 1.5;
}

a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.accept-btn, .reject-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.accept-btn {
  background-color: #2ecc71;
  color: white;
}

.accept-btn:hover {
  background-color: #27ae60;
}

.reject-btn {
  background-color: #e74c3c;
  color: white;
}

.reject-btn:hover {
  background-color: #c0392b;
}

/* Cookie-Settings-Button Styling */
.cookie-settings-btn {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background-color 0.3s ease;
}

.cookie-settings-btn:hover {
  background-color: #2980b9;
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 600px) {
  .cookie-banner {
    bottom: 10px;
    left: 10px;
    right: 10px;
    max-width: none; /* Volle Breite auf Mobilgeräten */
    max-height: 50vh; /* Reduzierte Höhe auf Mobilgeräten */
    padding: 15px; /* Weniger Padding */
  }

  h3 {
    font-size: 1.25rem; /* Kleinere Überschrift */
  }

  p {
    font-size: 0.9rem; /* Kleinerer Text */
  }

  .button-group {
    flex-direction: column; /* Buttons untereinander */
    gap: 8px;
  }

  .accept-btn, .reject-btn {
    padding: 8px 16px; /* Kleinere Buttons */
    font-size: 0.9rem;
  }

  .cookie-settings-btn {
    bottom: 10px;
    left: 10px;
    width: 40px; /* Kleinerer Button */
    height: 40px;
    font-size: 1.2rem;
  }
}
</style>
