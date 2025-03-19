<script setup>
</script>

<template>
    <div class="container">
        <footer>
            <p>&copy; Dr. Clemens Seidl, 2024</p>
            <nav>
                <RouterLink to="/datenschutz">Datenschutz</RouterLink> |
                <RouterLink to="/impressum">Impressum</RouterLink>
            </nav>
        </footer>
    </div>
</template>

<style scoped>
.container {
    background: #c6dada;
    font-family: 'Roboto', sans-serif;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 2rem;
    margin-top: 50px;
}
footer {
    display: flex;
    justify-content: space-between;
}
</style>