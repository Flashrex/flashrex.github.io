<script setup lang="ts">
import VueWriter from '../vue-writer.vue';
import Button from '../button.vue';
import GlowingText from '../glowingText.vue';

import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';

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
                <img class="techicon" src="https://skillicons.dev/icons?i=php,ts" alt="logo_php_ts">
                <img class="techicon" src="https://skillicons.dev/icons?i=html,css" alt="logo_html_css">
                <img class="techicon" src="https://skillicons.dev/icons?i=mysql,mongodb" alt="logo_mysql_mongodb">
                <img class="techicon" src="https://skillicons.dev/icons?i=laravel,vue" alt="logo_laravel_vue">
                <img class="techicon" src="https://skillicons.dev/icons?i=git,postman" alt="logo_git_postman">
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
