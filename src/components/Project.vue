<script setup>

import Button from './button.vue'

const props = defineProps(['index', 'data'])

</script>

<template>
    <div v-if="index % 2 == 0" class="project">
        <div class="text-container">
            <h3>{{ $t(`project.${props.data.name}.headline`) }}</h3>
            <p>{{ $t(`project.${props.data.name}.description`) }}</p>
            <div class="tag-container">
                <span v-for="(item, index) in props.data.tags" class="tag">{{ item }}</span>
            </div>
            <div class="button-container">
                <Button v-if="props.data.github" text="Code" :href="props.data.github">
                    <template #post>
                        <img src="../assets/icons/github_alt.svg" alt="external_github_icon">
                    </template>
                </Button>

                <Button v-if="props.data.live" text="Live" :href="props.data.live">
                    <template #post>
                        <img src="../assets/icons/external.svg" alt="external_link_icon">
                    </template>
                </Button>

                <Button v-if="props.data.demo" text="Demo" :href="props.data.demo">
                    <template #post>
                        <img src="../assets/icons/external.svg" alt="external_link_icon">
                    </template>
                </Button>
            </div>
        </div>
        <div class="image-container" :style="{ backgroundImage: 'url(' + `${props.data.image}` + ')' }">
        </div>
    </div>

    <div v-else class="project">
        <div class="image-container" :style="{ backgroundImage: 'url(' + `${props.data.image}` + ')' }">
        </div>
        <div class="text-container">
            <h3>{{ $t(`project.${props.data.name}.headline`) }}</h3>
            <p>{{ $t(`project.${props.data.name}.description`) }}</p>
            <div class="tag-container">
                <span v-for="(item, index) in props.data.tags" class="tag">{{ item }}</span>
            </div>
            <div class="button-container">
                <Button v-if="props.data.github" text="Code" :href="props.data.github">
                    <template #post>
                        <img src="../assets/icons/github_alt.svg" alt="external_github_icon">
                    </template>
                </Button>

                <Button v-if="props.data.live" text="Code" :href="props.data.live">
                    <template #post>
                        <img src="../assets/icons/external.svg" alt="external_link_icon">
                    </template>
                </Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project {

    background: rgba(0, 0, 0, 0.151);
    border-radius: 15px;

    width: 90%;
    height: auto;
    min-height: 42.5vh;
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
    background: rgb(23, 99, 50);
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

.button-link {
    text-decoration: none;
}

button>img {
    width: 20px;
    filter: invert(42%) sepia(78%) saturate(5212%) hue-rotate(135deg) brightness(101%) contrast(84%);
    aspect-ratio: 1/1;
    background-repeat: repeat-y;
}

button {
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.image-container {
    background-size: cover;

    background-position-x: center;

    width: 50%;
    border-radius: 15px;
    height: 100%;

    display: grid;
    grid-template-rows: repeat(4, 1fr);
    transition: background-position 10s;
}

.image-container:hover {
    background-position-y: 100%;
    cursor: pointer;
}


@media (max-width: 768px) {
    .project {
        flex-direction: column;
        justify-content: flex-start;
        padding: 0.5rem;
        min-height: 45vh;
        overflow-y: scroll;
    }

    .tag-container {
        justify-content: center;
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