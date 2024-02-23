<script setup>
import VueWriter from '../components/vue-writer.vue';

import { ref } from 'vue';

const props = defineProps(['useLanguage']);

const arr = ref(["Web Developer", "Student"])

const data = {
    text_0: [
        "Mein Name ist",
        "My name is",
        "Nimeni on"
    ],
    text_1: [
        "Kennenlernen",
        "Get to know me",
        "Tutustu minuun"
    ]
}

</script>

<template>
    <section>
        <div class="introduction">
            <!-- <h3>Mein Name ist <span class="colored-text">Dominik D.</span></h3> -->
            <h3>{{ data.text_0[props.useLanguage] }}
                <span class="glowing-text-container">
                    <span>D</span>
                    <span>o</span>
                    <span>m</span>
                    <span>i</span>
                    <span>n</span>
                    <span>i</span>
                    <span>k</span>
                </span>
            </h3>
            <VueWriter :array="arr" :delay="1000"></VueWriter>

            <div class="techstack">
                <img class="techicon" src="https://skillicons.dev/icons?i=cs,js">
                <img class="techicon" src="https://skillicons.dev/icons?i=html,css">
                <img class="techicon" src="https://skillicons.dev/icons?i=mysql,mongodb">
                <img class="techicon" src="https://skillicons.dev/icons?i=vue,react">
            </div>

            <a href="#aboutme"><button><span class="button-text">{{ data.text_1[props.useLanguage] }}</span></button></a>
        </div>
    </section>
</template>

<style>
:root {
    --glow-anim-time: 2.5s;
    --glow-anim-delay-mult: 0.2s;
}

.typed {
    font-size: 4em;
    font-weight: 700;
}

/* Styling Typewriter effect */
.is-typed span.caret {
    margin-left: 5px;
    display: inline-flex;
    align-items: flex-end;
    background-color: var(--color-text);
    animation: blink 1s infinite;
}

.is-typed span.underscore {
    width: 3em;
    height: 8px;
}

.is-typed span.cursor {
    width: 8px;
    height: 3.5em;
}

.is-typed span.cursor.typing {
    animation: none;
}

@keyframes blink {
    49% {
        background-color: var(--color-text);
    }

    50% {
        background-color: transparent;
    }

    99% {
        background-color: transparent;
    }
}

@media (max-width: 768px) {
    .typed {
        font-size: 2em;
    }

    .is-typed span.cursor {
        height: 2em;
        width: 4px;
    }
}
</style>

<style scoped>
section {
    scroll-snap-align: start;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
}

.introduction {
    position: relative;
    left: 20%;
}

h3 {
    margin: 0;
    font-size: 4em;
    font-weight: 700;
    line-height: 1.0;
}

.glowing-text-container {
    font-size: inherit;
    font-weight: inherit;
}

.glowing-text-container>span {

    font-size: inherit;
    font-weight: inherit;
    animation: glow var(--glow-anim-time) ease-in-out infinite;
    background: linear-gradient(to right, var(--color-highlight), #17d898);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

@keyframes glow {

    0%,
    100% {
        background: linear-gradient(to right, var(--color-highlight), #17d898);
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        text-shadow: 0 0 12px var(--color-highlight), 0 0 25px var(--color-highlight), 0 0 50px var(--color-highlight);
        opacity: 1;
    }

    10%,
    90% {
        background: linear-gradient(to right, var(--color-highlight), #17d898);
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        text-shadow: none;
        opacity: 0.9;
    }
}

.glowing-text-container>span:nth-child(1) {
    animation-delay: var(--glow-anim-delay-mult);
}

.glowing-text-container>span:nth-child(2) {
    animation-delay: calc(var(--glow-anim-delay-mult) * 2);
}

.glowing-text-container>span:nth-child(3) {
    animation-delay: calc(var(--glow-anim-delay-mult) * 3);
}

.glowing-text-container>span:nth-child(4) {
    animation-delay: calc(var(--glow-anim-delay-mult) * 4);
}

.glowing-text-container>span:nth-child(5) {
    animation-delay: calc(var(--glow-anim-delay-mult) * 5);
}

.glowing-text-container>span:nth-child(6) {
    animation-delay: calc(var(--glow-anim-delay-mult) * 6);
}

.glowing-text-container>span:nth-child(7) {
    animation-delay: calc(var(--glow-anim-delay-mult) * 7);
}

.glowing-text-container>span:nth-child(9) {
    animation-delay: calc(var(--glow-anim-delay-mult) * 8);
}

.glowing-text-container>span:nth-child(10) {
    animation-delay: calc(var(--glow-anim-delay-mult) * 9);
}

.techstack {
    margin-top: 0.5rem;
    display: flex;
    gap: 1rem;
}

.techicon {
    width: 75px;
    aspect-ratio: 1/1;
    transition: transform 1s;
}

.techicon:hover,
.techicon:active {
    cursor: pointer;
    transform: scale(1.1);
}



@media (max-width: 768px) {
    section {
        justify-content: center;
    }

    .introduction {
        left: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    h3 {
        text-align: center;
        font-size: 2em;
    }

    .techicon {
        width: 50px;
    }
}
</style> 
