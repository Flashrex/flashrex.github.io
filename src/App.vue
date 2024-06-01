<script setup>
import Introduction from './components/Introduction.vue';
import AboutMe from './components/AboutMe.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import { ref } from 'vue';

const projects = ref([
  {
    headline: [
      "Todo App",
      "Todo App",
      "Todo App"
    ],
    description: [
      "Dies ist eine einfache Todo App. Es ist möglich Todos zu erstellen, zu bearbeiten und zu löschen. Die App beinhaltet User-Authentifizierung und -Autorisierung.",
      "This is a simple Todo App. It is possible to create, edit and delete todos. The app includes user authentication and authorization.",
      "Tämä on yksinkertainen Todo-sovellus. On mahdollista luoda, muokata ja poistaa tehtäviä. Sovellus sisältää käyttäjän tunnistuksen ja valtuutuksen."
    ],
    image: "todo.png",
    tags: ["2024", "html", "css", "php", "mysql"],
    github: "https://github.com/Flashrex/php-todolist",
    live: ""
  },
  {
    headline: [
      "Bugtracker",
      "Bugtracker",
      "Bugtracker"
    ],
    description: [
      "Dies ist ein Bugtracker. Es ist möglich Bugs zu melden, zu bearbeiten und zu schließen. Es gibt Teams und man kann innerhalb eines Teams über die Bugs diskutieren.",
      "This is a bugtracker. It is possible to report, edit and close bugs. There are teams and you can discuss the bugs within a team.",
      "Tämä on bugtracker. On mahdollista raportoida, muokata ja sulkea bugeja. On tiimejä ja voit keskustella bugeista tiimin sisällä."
    ],
    image: "bugtracker_full.png",
    tags: ["2024", "html", "css", "typescript", "vueJS", "vueRouter", "express", "nodejs", "mysql", "bcrypt", "passport"],
    github: "https://github.com/Flashrex/bugtracker",
    live: ""
  },
  {
    headline: [
      "Tesla Clone",
      "Tesla Clone",
      "Tesla Clone"
    ],
    description: [
      "Dies ist ein Klon der offiziellen Website tesla.com. (Stand: Dezember 2023) Ich habe dabei darauf geachtet die Website möglichst genau nachzubauen und auch Effekte wie den Scroll-Snap-Effekt zu implementieren.",
      "This is a clone of the official website tesla.com. (As of December 2023) I made sure to recreate the website as closely as possible and also to implement effects such as the scroll snap effect.",
      "Tämä on klooni virallisesta verkkosivustosta tesla.com. (Joulukuu 2023) Huolehdin, että verkkosivusto luodaan mahdollisimman tarkasti ja toteutetaan myös vaikutuksia, kuten vieritysruudun vaikutus."
    ],
    image: "tesla.png",
    tags: ["2023", "html", "css", "javascript", "vueJS"],
    github: "https://github.com/Flashrex/tesla-clone",
    live: "https://tesla-clone-two-green.vercel.app/"
  },
  {
    headline: [
      "Codingstube Discord Bot",
      "Codingstube Discord Bot",
      "Codingstube Discord Bot"
    ],
    description: [
      "Dies ist ein Discord Bot den ich für meinen Discord Server mit rund 1000 Mitgliedern erstellt habe.",
      "This is a Discord Bot I created for my Discord Server with around 1000 members.",
      "Tämä on Discord Bot, jonka loin Discord-palvelimelleni, jossa on noin 1000 jäsentä."
    ],
    image: "discord.png",
    tags: ["2023", "c#", ".NET-Framework", "discordNET", "EF Core", "mysql"],
    github: "https://github.com/Flashrex/Codingstube-Bot",
    live: ""
  },
  {
    headline: [
      "Artlocker - Kunst Marktplatz",
      "Artlocker - Art Marketplace",
      "Artlocker - Taide Markkinapaikka"
    ],
    description: [
      "Diese WebApplikation ist als Uniprojekt entstanden. Nutzer können Bilder zum Verkauf einstellen, haben ein eigenes Profil, können aktuelle und beliebte Angebote einsehen und es werden Angebotsaufrufe sowie Favorisierungen getrackt.",
      "This web application was created as a university project. Users can upload pictures for sale, have their own profile, can view current and popular offers and offer calls and favorites are tracked.",
      "Tämä verkkosovellus luotiin yliopistoprojektina. Käyttäjät voivat ladata kuvia myyntiin, heillä on oma profiili, he voivat tarkastella nykyisiä ja suosittuja tarjouksia ja tarjousten kutsuja ja suosikkeja seurataan."
    ],
    image: "artlocker.png",
    tags: ["2022", "hmtl", "css", "javascript", "nodejs", "express", "passport", "mysql", "dotenv"],
    github: "https://github.com/Flashrex/ArtLocker",
    live: ""
  },
  {
    headline: [
      "Quiz App",
      "Quiz App",
      "Quiz App"
    ],
    description: [
      "Diese App ist ein Framework mit dem man eigene Quizzes erstellen kann um sich zum Beispiel für eine Prüfung vorzubereiten. Es gibt verschiedene Fragetypen wie Single- und Multiple-Choice-Fragen und weitere.",
      "This app is a framework with which you can create your own quizzes to prepare for an exam, for example. There are different types of questions such as single and multiple choice questions and more.",
      "Tämä sovellus on kehys, jonka avulla voit luoda omia tietovisoja valmistautuaksesi esimerkiksi tenttiin. Kysymyksiä on erilaisia, kuten yksittäisiä ja monivalintakysymyksiä ja paljon muuta."
    ],
    image: "quizapp.png",
    tags: ["2023", "html", "css", "typescript", "vueJS"],
    github: "https://github.com/Flashrex/quiz-app",
    live: ""
  }
])

const lang = ref(1);

switch (navigator.language) {
  case "de-DE":
  case "de":
    lang.value = 0;
    break;
  case "en-US":
  case "en-GB":
  case "en":
    lang.value = 1;
    break;
  case "fi-FI":
    lang.value = 2;
    break;
  default:
    lang.value = 1;
    break;
}
</script>

<template>
  <header>

  </header>

  <main>
    <Introduction :useLanguage="lang"></Introduction>
    <AboutMe :useLanguage="lang"></AboutMe>
    <Projects :project1="projects[0]" :project2="projects[1]" :useLanguage="lang"></Projects>
    <Projects :project1="projects[2]" :project2="projects[3]" :useLanguage="lang"></Projects>
    <Projects :project1="projects[4]" :project2="projects[5]" :useLanguage="lang"></Projects>
    <Contact :useLanguage="lang"></Contact>
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