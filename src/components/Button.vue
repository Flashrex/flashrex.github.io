<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{
    size?: string,
    text: string,
    href?: string
}>();

const computedPadding = computed(() => {
    switch(props.size) {
        case "medium":
            return "0.5rem 2rem";

        case "large":
            return "1rem 3rem";

        default: //small
            return "0.5rem 2rem";
    }
})

</script>

<template>
    <a :href="props.href">
        <button :style="{ padding: computedPadding }">
            <slot name="pre"></slot>
            <span class="button-text">{{ props.text }}</span>
            <slot name="post"></slot>
        </button>
    </a>
</template>

<style scoped>
button {
    background: var(--color-background-mute);
    background-blend-mode: darken;
    border: none;
    position: relative;
    margin-top: 2rem;

    font-size: 1.2em;
    font-weight: bold;
    transition: all 1s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
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
    background-color: linear-gradient(to right, var(--color-highlight), #17d898);
    transition: all 1s;
    position: absolute;
    top: 0;
    left: 0;
}

button:hover,
button:active {
    cursor: pointer;
    color: linear-gradient(to right, var(--color-highlight), #17d898);
}

button::before,
button::after {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    transition: all 0.2s linear;
    background: linear-gradient(to right, var(--color-highlight), #17d898);
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
</style>