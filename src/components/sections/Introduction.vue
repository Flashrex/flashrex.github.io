<script setup lang="ts">
import VueWriter from '../Vue-writer.vue';
import Button from '../Button.vue';
import GlowingText from '../GlowingText.vue';

import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import Techicon from '../Techicon.vue';

const { t, locale } = useI18n();

const vueWriterArr = ref([ t('introduction.software-developer'), t('introduction.student') ]);

watch(locale, () => {
    vueWriterArr.value = [ t('introduction.software-developer'), t('introduction.student') ];
})

const scrollToContact = () => {
    const contact = document.getElementById('contact');
    contact.scrollIntoView({ behavior: 'smooth' });
}

</script>

<template>
    <section>
        <div class="introduction">
            <div class="headline">
                <h3>{{ t('introduction.headline') }}</h3>
                <GlowingText text="Dominik"></GlowingText>
            </div>
            <VueWriter :array="vueWriterArr" :delay="1000"></VueWriter>

            <div class="techstack">
                <Techicon icon="php,ts" size="medium"></Techicon>
                <Techicon icon="html,css" size="medium"></Techicon>
                <Techicon icon="mysql,mongodb" size="medium"></Techicon>
                <Techicon icon="laravel,vue" size="medium"></Techicon>
                <Techicon icon="git,postman" size="medium"></Techicon>
            </div>

            <Button :text="t('introduction.button.label')" size="large" @click="scrollToContact" ></Button>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
}

.introduction {
    position: relative;
    left: 20%;
}

.headline {
    display: flex;
    align-items: center;
    gap: 1rem;
}

h3 {
    margin: 0;
    font-size: 4em;
    font-weight: 700;
    line-height: 1.0;
}

.techstack {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 1rem;
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

    .headline {
        gap: 0.5rem;
    }

    h3 {
        text-align: center;
        font-size: 2em;
        white-space: nowrap;
    }

    .techstack {
        justify-content: center;
    }
}
</style>
