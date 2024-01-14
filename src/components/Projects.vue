<script setup>

import Project from './Project.vue';

const props = defineProps(["project1", "project2", "useLanguage"])


</script>

<template>
    <section>
        <div class="project-container">
            <Project :index="0" :data="props.project1" :useLanguage="props.useLanguage"></Project>
            <Project :index="1" :data="props.project2" :useLanguage="props.useLanguage"></Project>

            <!-- <Project v-for="(item, index) in projects" :index="index" :data="item"></Project> -->
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