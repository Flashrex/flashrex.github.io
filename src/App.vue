<script setup>
import Introduction from './components/sections/Introduction.vue';
import AboutMe from './components/sections/AboutMe.vue';
import Projects from './components/sections/Projects.vue';
import Contact from './components/sections/Contact.vue';
import { ref } from 'vue';

import Language from './components/language.vue';

const projects = ref([
  {
    name: "valomizer",
    image: "valomizer.webp",
    tags: ["2024", "html", "css", "typescript", "vueJS", "nodejs", "express", "mysql"],
    github: "https://github.com/Flashrex/valorant_randomizer",
    live: "https://valomizer.net"
  },
  {
    name: "bugtracker",
    image: "bugtracker_full.webp",
    tags: ["2024", "html", "css", "typescript", "vueJS", "nodejs", "express", "mysql", "bcrypt", "passport"],
    github: "https://github.com/Flashrex/bugtracker"
  },
  {
    name: "tesla-clone",
    image: "tesla.webp",
    tags: ["2023", "html", "css", "javascript", "vueJS"],
    github: "https://github.com/Flashrex/tesla-clone",
    demo: "https://tesla-clone-two-green.vercel.app/"
  },
  {
    name: "discord-bot",
    image: "discord.webp",
    tags: ["2023", "c#", ".NET-Framework", "discordNET", "EF Core", "mysql"],
    github: "https://github.com/Flashrex/Codingstube-Bot"
  },
  {
    name: "artlocker",
    image: "artlocker.webp",
    tags: ["2022", "hmtl", "css", "javascript", "nodejs", "express", "passport", "mysql", "dotenv"],
    github: "https://github.com/Flashrex/ArtLocker"
  },
  {
    name: "quiz-app",
    image: "quizapp.webp",
    tags: ["2023", "html", "css", "typescript", "vueJS"],
    github: "https://github.com/Flashrex/quiz-app"
  }
])
</script>

<template>
  <header>

  </header>

  <main>
    <Language />
    <Introduction />
    <AboutMe />
    <Projects :project1="projects[0]" :project2="projects[1]"></Projects>
    <Projects :project1="projects[2]" :project2="projects[3]"></Projects>
    <Projects :project1="projects[4]" :project2="projects[5]"></Projects>
    <Contact />
  </main>
</template>

<style scoped>
main {
  max-height: 100vh;
}
</style>