<script setup lang="ts">

const props = defineProps<{
    text: string,
    fontSize: string,
}>()

</script>

<template>
    <div class="glowing-text-container" :style="{ fontSize: props.fontSize }">
        <span v-for="letter in props.text.split('')" :key="letter">{{ letter }}</span>
    </div>
</template>

<style scoped>
* {
    --glow-anim-time: 2.5s;
    --glow-anim-delay-mult: 0.2s;
}

.glowing-text-container {
    font-weight: 700;
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
        text-shadow: 0 0 12px #17d898, 0 0 25px #17d898, 0 0 50px #17d898;
        opacity: 0.9;
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
</style>