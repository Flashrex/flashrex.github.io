<script setup>

import Project from '../project.vue';

const props = defineProps(["project1", "project2"])
</script>

<template>
    <section>
        <div class="project-container">
            <Project :index="0" :data="props.project1"></Project>
            <Project :index="1" :data="props.project2"></Project>
        </div>

    </section>
</template>

<style scoped>
section {
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
}

@media (max-width: 768px) {
    section {
        margin-bottom: 4rem;
    }

    .project-container {
        width: 100%;
        padding: 0.5rem;
    }

}
</style>