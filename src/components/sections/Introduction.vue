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

</script>

<template>
    <section>
        <div class="introduction">
            <div class="flex flex-center flex-gap-large">
                <h3>{{ t('introduction.headline') }}</h3>
                <GlowingText text="Dominik" font-size="4em"></GlowingText>
            </div>
            <VueWriter :array="vueWriterArr" :delay="1000"></VueWriter>

            <div class="techstack">
                <Techicon icon="php,ts" size="medium"></Techicon>
                <Techicon icon="html,css" size="medium"></Techicon>
                <Techicon icon="mysql,mongodb" size="medium"></Techicon>
                <Techicon icon="laravel,vue" size="medium"></Techicon>
                <Techicon icon="git,postman" size="medium"></Techicon>
            </div>

            <Button :text="t('introduction.button.label')" href="#contact" size="large"></Button>
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

h3 {
    margin: 0;
    font-size: 4em;
    font-weight: 700;
    line-height: 1.0;
}

.techstack {
    margin-top: 0.5rem;
    display: flex;
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

    h3 {
        text-align: center;
        font-size: 2em;
    }

    .techicon {
        width: 50px;
    }
}
</style>
