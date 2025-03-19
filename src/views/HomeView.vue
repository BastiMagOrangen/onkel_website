<script setup>
import CookieBanner from '../components/CookieBanner.vue';
</script>

<template>
  <main>
    <div class="container">
      <h1>Willkommen in meiner Ordination für Orthopädie und Traumatologie</h1>
      <img src="../assets/0069.jpg" alt="Dr. Clemens Seidl" id="img">
      <p>Südstadtzentrum 1/5/1, 2344 Maria Enzersdorf</p>
      <p>Tel: +43 (0) 676/3580037</p>
      <p>Email: <a href="mailto:ordination@dr-seidl.at" id="mail">ordination@dr-seidl.at</a></p>
      <p>Termine nur nach telefonischer Vereinbarung oder online</p>
      <a href="https://patient.latido.at/arzt/_Seidl" id="button">Jetzt buchen</a>
    </div>
  </main>
</template>

<script>

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

.container p {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

#mail {
  color: #047f8c;
}

#img {
  width: 80%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

#button {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  margin-top: 1rem;
  border-radius: 5px;
}
</style>