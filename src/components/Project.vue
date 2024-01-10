<script setup>

const props = defineProps(['index', 'data'])

</script>

<template>
    <div v-if="index % 2 == 0" class="project">
        <div class="text-container">
            <h3>{{ props.data.headline }}</h3>
            <p>{{ props.data.description }}</p>
            <div class="tag-container">
                <span v-for="(item, index) in props.data.tags" class="tag">{{ item }}</span>
            </div>
            <div class="button-container">
                <button v-if="props.data.github != ''">
                    <a class="button-text" :href="props.data.github" target="_blank">Code</a>
                    <img src="../assets/icons/github_alt.svg" alt="">
                </button>
                <button v-if="props.data.live != ''">
                    <a class="button-text" :href="props.data.live" target="_blank">Live Demo</a>
                    <img src="../assets/icons/external.svg" alt="">
                </button>
            </div>
        </div>
        <div class="image-container">
            <img :src="'src/assets/project_thumbnails/' + props.data.image">
        </div>
    </div>

    <div v-else class="project">
        <div class="image-container">
            <img :src="'src/assets/project_thumbnails/' + props.data.image">
        </div>
        <div class="text-container">
            <h3>{{ props.data.headline }}</h3>
            <p>{{ props.data.description }}</p>
            <div class="tag-container">
                <span v-for="(item, index) in props.data.tags" class="tag">{{ item }}</span>
            </div>
            <div class="button-container">
                <button v-if="props.data.github != ''">
                    <a class="button-text" :href="props.data.github" target="_blank">Code</a>
                    <img src="../assets/icons/github_alt.svg" alt="">
                </button>
                <button v-if="props.data.live != ''">
                    <a class="button-text" :href="props.data.live" target="_blank">Live Demo</a>
                    <img src="../assets/icons/external.svg" alt="">
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project {

    background: rgba(0, 0, 0, 0.151);
    border-radius: 15px;

    width: 90%;
    height: 50vh;
    padding: 2rem;

    display: flex;
    justify-content: space-evenly;
}

.text-container {
    width: 40%;
    padding: 2rem;
    border-radius: 15px;
}

h3 {
    line-height: 2;
    font-weight: 600;
    font-size: 1.4em;
}

p {
    font-size: 1.1em;
    text-wrap: balance;
}

.tag-container {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
}

.tag {
    background: var(--color-highlight);
    padding: 4px 12px;
    color: rgba(255, 255, 255, 0.805);
    margin: 2px;
    border-radius: 15px;
    font-size: 0.8em;
    font-weight: 600;
}

.button-container {
    display: flex;
    justify-content: space-around;
}

button>img {
    width: 20px;
    filter: invert(42%) sepia(78%) saturate(5212%) hue-rotate(135deg) brightness(101%) contrast(84%);
    aspect-ratio: 1/1;

}

button {
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.image-container {
    /* background-color: rgba(165, 42, 42, 0.121); */

    width: 50%;
    overflow: hidden;
    border-radius: 15px;
}

.image-container>img {
    position: relative;
    top: 0;
    width: 100%;
    transition: transform 20s;

}

.image-container>img:hover {
    transform: translateY(-80%);
    cursor: pointer;
}


@media (max-width: 768px) {
    .project {
        flex-direction: column;
        justify-content: flex-start;
        padding: 0.5rem;
        min-height: 50vh;
        overflow-y: scroll;
    }

    .text-container {
        width: 100%;
        padding: 0.5rem;
        text-align: center;
    }

    .image-container {
        display: none;
    }

}
</style>