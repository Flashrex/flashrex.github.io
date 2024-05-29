<script setup>
const props = defineProps(['useLanguage']);

const data = {
    text_0: [
        "Über mich",
        "About me",
        "Minusta"
    ],
    text_1: [
        "Ich bin Student im B.Sc. Angewandte Informatik und entwickle leidenschaftlich gerne Webseiten und -applikationen. Ich bin bereits vor meinem Studium durchs Modding auf die Programmierung aufmerksam geworden und liebe es mich stets neu auszuprobieren. Derzeit beschäftige ich mich viel mit Frameworks wie Vue oder React habe aber auch großes Interesse an der Backendprogrammierung.",
        "I am a student in B.Sc. Applied Computer Science and I love to develop websites and applications. I became aware of programming through modding before I started my studies and I love to try out new things. At the moment I am working a lot with frameworks like Vue or React but I am also very interested in backend programming.",
        "Olen opiskelija B.Sc. Sovellettu tietojenkäsittelytiede ja rakastan kehittää verkkosivustoja ja sovelluksia. Tulin tietoiseksi ohjelmoinnista muokkauksen kautta ennen kuin aloitin opintoni, ja rakastan kokeilla uusia asioita. Tällä hetkellä työskentelen paljon Vue- tai React-kehyksillä, mutta olen myös erittäin kiinnostunut backend-ohjelmoinnista."
    ]
}

</script>

<template>
    <section id="aboutme">
        <img src="../assets/Bild1.jpg" alt="passfoto" loading="lazy">

        <div class="text-container">
            <h3>{{ data.text_0[props.useLanguage] }}</h3>
            <div>
                <p>
                    {{ data.text_1[props.useLanguage] }}
                </p>
            </div>

            <div class="techcontainer">
                <a href="https://www.github.com/flashrex" target="_blank"><img class="techicon" alt="github_logo"
                        src="https://skillicons.dev/icons?i=github"></a>
                <a href="https://www.linkedin.com/in/dominik-duda-89b10b229/" target="_blank"><img class="techicon"
                        alt="linkedin_logo" src="https://skillicons.dev/icons?i=linkedin"></a>
                <a href="mailto:duda.dominik96@gmail.com" target="_blank"><img class="techicon" alt="gmail_logo"
                        src="https://skillicons.dev/icons?i=gmail"></a>
            </div>
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
    align-items: center;
    justify-content: center;
    gap: 6rem;

    background: linear-gradient(to right, var(--color-highlight) 20%, #17d898);
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 75%);
}

section>img {
    position: relative;
    top: -7rem;
    box-shadow: 1px 1px 4px rgba(59, 59, 59, 0.573);

    border-radius: 100%;
    width: 350px;
    aspect-ratio: 1/1;
    object-fit: cover;

    transition: top 0.5s;
}

section>img:hover {
    top: -7.5rem;
}

.text-container {
    position: relative;
    top: -7rem;
    width: 30%;
    height: 350px;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.text-container>div {
    display: flex;
}

.techcontainer {
    display: flex;
    gap: 1rem;
}

.techicon {
    width: 40px;
    aspect-ratio: 1/1;
    transition: transform 1s;
}

.techicon:hover {
    transform: translateY(-0.2rem);
}

h3 {
    color: #2e2f2e;
    font-weight: 700;
    line-height: 1.6;
    font-size: 1.5em;
    text-transform: uppercase;
}

p {
    color: rgba(255, 255, 255, 0.805);
    line-height: 1.4;
    font-size: 1.2em;
    text-wrap: balance;
    margin-bottom: 1rem;
}

@media (max-width: 768px) {

    section {
        justify-content: flex-start;
        flex-direction: column;
        height: 150vh;
    }

    section>img {
        margin-top: 2rem;
        width: 60%;
        top: 0;
    }

    section>img:hover {
        top: 0;
    }

    .text-container {
        margin-top: 2rem;
        width: 90%;
        height: fit-content;
        padding: 1rem 0.5rem;
        overflow-y: auto;
        text-align: center;
        justify-content: flex-start;
    }

    .techcontainer {
        margin-top: 1rem;
        justify-content: center;
    }

    h3 {
        position: relative;
        top: 0.5rem;
    }

    p {
        position: relative;
        top: 1rem;
    }
}
</style>