<script setup>
import { ref } from 'vue';
import Project from './Project.vue';

const projects = ref([
    {
        headline: "Tesla Clone",
        description: "Dies ist ein Klon der offiziellen Website tesla.com. (Stand: Dezember 2023) Ich habe dabei darauf geachtet die Website möglichst genau nachzubauen und auch Effekte wie den Scroll-Snap-Effekt zu implementieren.",
        image: "tesla.png",
        tags: ["2023", "html", "css", "javascript", "vueJS"],
        github: "https://github.com/Flashrex/tesla-clone",
        live: ""
    },
    {
        headline: "Codingstube Discord Bot",
        description: "Dies ist ein Discord Bot den ich für meinen Discord Server mit rund 1000 Mitgliedern erstellt habe.",
        image: "discord.png",
        tags: ["2023", "c#", ".NET-Framework", "discordNET", "mysql"],
        github: "https://github.com/Flashrex/Codingstube-Bot",
        live: ""
    },
    {
        headline: "Artlocker - Kunst Marktplatz",
        description: "Dieses Website ist als Uniprojekt entstanden. Nutzer können Bilder zum Verkauf einstellen, haben ein eigenes Profil, können aktuelle und beliebte Angebote einsehen und es werden Angebotsaufrufe sowie Favorisierungen getrackt.",
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
        github: "https://github.com/Flashrex/tesla-clone",
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
    <section>
        <div class="project-container">
            <Project v-for="(item, index) in projects" :index="index" :data="item"></Project>
        </div>

    </section>
</template>

<style scoped>
section {
    scroll-snap-align: start;
    position: relative;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
}

.project-container {
    width: 80%;
    height: 95vh;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    overflow-y: scroll;
}

@media (max-width: 768px) {
    .project-container {
        width: 100%;
        padding: 0.5rem;
    }

}
</style>