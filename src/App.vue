<script setup>
import Introduction from './components/Introduction.vue';
import AboutMe from './components/AboutMe.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import { ref } from 'vue';

const projects = ref([
  {
    headline: "Tesla Clone",
    description: "Dies ist ein Klon der offiziellen Website tesla.com. (Stand: Dezember 2023) Ich habe dabei darauf geachtet die Website möglichst genau nachzubauen und auch Effekte wie den Scroll-Snap-Effekt zu implementieren.",
    image: "tesla.png",
    tags: ["2023", "html", "css", "javascript", "vueJS"],
    github: "https://github.com/Flashrex/tesla-clone",
    live: "https://tesla-clone-two-green.vercel.app/"
  },
  {
    headline: "Codingstube Discord Bot",
    description: "Dies ist ein Discord Bot den ich für meinen Discord Server mit rund 1000 Mitgliedern erstellt habe.",
    image: "discord.png",
    tags: ["2023", "c#", ".NET-Framework", "discordNET", "EF Core", "mysql"],
    github: "https://github.com/Flashrex/Codingstube-Bot",
    live: ""
  },
  {
    headline: "Artlocker - Kunst Marktplatz",
    description: "Diese WebApplikation ist als Uniprojekt entstanden. Nutzer können Bilder zum Verkauf einstellen, haben ein eigenes Profil, können aktuelle und beliebte Angebote einsehen und es werden Angebotsaufrufe sowie Favorisierungen getrackt.",
    image: "artlocker.png",
    tags: ["2022", "hmtl", "css", "javascript", "nodejs", "express", "passport", "mysql", "dotenv"],
    github: "https://github.com/Flashrex/ArtLocker",
    live: ""
  },
  {
    headline: "Quiz App/Framework",
    description: "Diese App ist ein Framework mit dem man eigene Quizzes erstellen kann um sich zum Beispiel für eine Prüfung vorzubereiten. Es gibt verschiedene Fragetypen wie Single- und Multiple-Choice-Fragen und weitere.",
    image: "quizapp.png",
    tags: ["2023", "html", "css", "typescript", "vueJS"],
    github: "https://github.com/Flashrex/quiz-app",
    live: ""
  },
  {
    headline: "Flashrex's Website",
    description: "Meine alte Website, die ich komplett in vanilla javascript erstellt habe. Es gibt unteranderem einen Cookie-Banner, Dark/Lightmode und eine Projektsuchleiste sowie einige kleine CSS Effekte.",
    image: "website.png",
    tags: ["2022", "html", "css", "javascript"],
    github: "https://github.com/Flashrex/portfolio-old",
    live: ""
  },
  {
    headline: "Tic Tac Toe",
    description: "Dies ist meine erste React App. Es ist das Spiel Tic Tac Toe. Alle Schritte werden in einer Liste gespeichert und man kann beliebig hin und herspringen.",
    image: "myfirstapp.png",
    tags: ["2022", "html", "css", "javascript", "react"],
    github: "https://github.com/Flashrex/FirstReactApp",
    live: ""
  }
])

</script>

<template>
  <header>

  </header>

  <main>
    <Introduction></Introduction>
    <AboutMe></AboutMe>
    <Projects :project1="projects[0]" :project2="projects[1]"></Projects>
    <Projects :project1="projects[2]" :project2="projects[3]"></Projects>
    <Projects :project1="projects[4]" :project2="projects[5]"></Projects>
    <Contact></Contact>
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