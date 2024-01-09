<script setup>
import VueWriter from '../components/vue-writer.vue';

import { ref } from 'vue';

const arr = ref(["Web Developer", "Student"])

</script>

<template>
    <section>
        <div class="introduction">
            <h3>Mein Name ist <span class="colored-text">Dominik D.</span></h3>
            <VueWriter :array="arr" :delay="1000"></VueWriter>


            <div class="socials">
                <a href="https://github.com/Flashrex" target="_blank">
                    <img class="social_icon" src="../assets/icons/github.svg">
                </a>
                <a href="https://www.linkedin.com/in/dominik-duda-89b10b229/" target="_blank">
                    <img class="social_icon" src="../assets/icons/linkedin.svg">
                </a>
                <a href="mailto:duda.dominik96@gmail.com" target="_blank">
                    <img class="social_icon" src="../assets/icons/mail.svg">
                </a>
            </div>

            <button><a href="#aboutme" class="button-text">Kennenlernen</a></button>
        </div>
    </section>
</template>

<style>
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

.colored-text {
    font-size: inherit;
    font-weight: inherit;


    background: linear-gradient(to right, var(--color-highlight), #17d898);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.socials {
    margin-top: 0.5rem;
    display: flex;
    gap: 1rem;
}

.social_icon {
    width: 50px;
    aspect-ratio: 1/1;
    transition: transform 1s;
    filter: var(--color-icon);
}

.social_icon:hover,
.social_icon:active {
    cursor: pointer;
    transform: scale(1.2);
    filter: invert(95%) sepia(29%) saturate(2788%) hue-rotate(61deg) brightness(103%) contrast(83%);
}

button {
    background: var(--color-background-mute);
    background-blend-mode: darken;
    border: none;
    position: relative;
    margin-top: 2rem;

    padding: 1rem 2rem;

    font-size: 1.2em;
    font-weight: bold;
    transition: all 1s;
}

.button-text {
    text-decoration: none;
    background: linear-gradient(to right, var(--color-highlight), #17d898);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

button::before {
    content: "";
    width: 0%;
    height: 100%;
    background-color: var(--color-highlight);
    transition: all 1s;
    position: absolute;
    top: 0;
    left: 0;
}

button:hover,
button:active {
    cursor: pointer;
    color: var(--color-highlight);
}

button::before,
button::after {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    transition: all 0.2s linear;
    background: var(--color-highlight);
}

.button-text::before,
.button-text::after {
    content: "";
    width: 2px;
    height: 0;
    position: absolute;
    transition: all 0.2s linear;
    background: var(--color-highlight);
}

button:hover::before,
button:hover::after {
    width: 100%;
}

button:hover .button-text::before,
button:hover .button-text::after {
    height: 100%;
}

/*----- button 1 -----*/
button::before,
button::after {
    transition-delay: 0.2s;
}

button .button-text::before,
button .button-text::after {
    transition-delay: 0s;
}

button::before {
    right: 0;
    top: 0;
}

button::after {
    left: 0;
    bottom: 0;
}

button .button-text::before {
    left: 0;
    top: 0;
}

button .button-text::after {
    right: 0;
    bottom: 0;
}

button:hover::before,
button:hover::after {
    transition-delay: 0s;
}

button:hover .button-text::before,
button:hover .button-text::after {
    transition-delay: 0.2s;
}

@media (max-width: 768px) {

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

    .social_icon {
        width: 30px;
    }
}
</style> 
