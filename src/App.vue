<script setup>
import Introduction from './components/sections/Introduction.vue';
import AboutMe from './components/sections/AboutMe.vue';
import Projects from './components/sections/Projects.vue';
import Contact from './components/sections/Contact.vue';
import { onMounted, ref } from 'vue';

import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const projects = ref([
  {
    name: "valomizer",
    image: "valomizer.png",
    tags: ["2024", "html", "css", "typescript", "vueJS", "nodejs", "express", "mysql"],
    github: "https://github.com/Flashrex/valorant_randomizer",
    live: "https://valomizer.net"
  },
  {
    name: "bugtracker",
    image: "bugtracker_full.png",
    tags: ["2024", "html", "css", "typescript", "vueJS", "nodejs", "express", "mysql", "bcrypt", "passport"],
    github: "https://github.com/Flashrex/bugtracker",
    live: ""
  },
  {
    name: "tesla-clone",
    image: "tesla.png",
    tags: ["2023", "html", "css", "javascript", "vueJS"],
    github: "https://github.com/Flashrex/tesla-clone",
    live: "https://tesla-clone-two-green.vercel.app/"
  },
  {
    name: "discord-bot",
    image: "discord.png",
    tags: ["2023", "c#", ".NET-Framework", "discordNET", "EF Core", "mysql"],
    github: "https://github.com/Flashrex/Codingstube-Bot",
    live: ""
  },
  {
    name: "artlocker",
    image: "artlocker.png",
    tags: ["2022", "hmtl", "css", "javascript", "nodejs", "express", "passport", "mysql", "dotenv"],
    github: "https://github.com/Flashrex/ArtLocker",
    live: ""
  },
  {
    name: "quiz-app",
    image: "quizapp.png",
    tags: ["2023", "html", "css", "typescript", "vueJS"],
    github: "https://github.com/Flashrex/quiz-app",
    live: ""
  }
])


onMounted(() => {
  switch (navigator.language) {
    case "de-DE":
    case "de":
      locale.value = 'de-DE';
      break;
    case "en-US":
    case "en-GB":
    case "en":
    locale.value = 'en-US';
      break;
    case "fi-FI":
    case "fi":
      locale.value = 'fi-FI';
      break;
    default:
      locale.value = 'en-US';
      break;
  }
})
</script>

<template>
  <header>

  </header>

  <main>
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