<script setup>
import Introduction from './components/Introduction.vue';
import AboutMe from './components/AboutMe.vue';
import Projects from './components/Projects.vue';

</script>

<template>
  <header>

  </header>

  <main>
    <Introduction></Introduction>
    <AboutMe></AboutMe>
    <Projects></Projects>
  </main>
</template>

<style scoped>
main {
  max-height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}
</style>