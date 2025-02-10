<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const menuVisible = ref(false);

const languages = ref({
    us: 'English',
    de: 'Deutsch',
    fi: 'Suomi',
});

function selectLanguage(code: string) {
    locale.value = code;

    localStorage.setItem('locale', code);
}

function toggleMenu() {
    menuVisible.value = !menuVisible.value;
}

onMounted(() => {
    const storedLocale = localStorage.getItem('locale');

    if (storedLocale) {
        locale.value = storedLocale;
    }

    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.select-menu') && !target.closest('.language-selector')) {
            menuVisible.value = false;
        }
    });
});

</script>

<template>
    <div class="language-selector" :class="{ active: menuVisible }" @click="toggleMenu">
        <img class="icon" src="../assets/icons/translate.svg" alt="language-icon">
    </div>

    <transition name="fade">
        <div class="select-menu" v-if="menuVisible">
            <ul>
                <li v-for="(language, code) in languages" :key="code" :class="[code === locale ? `selected` : ``]"
                    @click="selectLanguage(code)">
                    <span class="fi" :class="`fi-${code}`"></span> <span>{{
                        language }}</span>
                </li>
            </ul>
        </div>
    </transition>
</template>

<style scoped>
.language-selector {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border-radius: 100%;

    padding: 0.5rem;
}

.language-selector:hover {
    background-color: var(--color-background-soft);
}

.icon {
    width: 1.5rem;
    aspect-ratio: 1/1;
    filter: brightness(0.6);
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    padding: 0.5rem;
    cursor: pointer;
}

.select-menu {
    position: fixed;
    top: 4rem;
    right: 1rem;
    z-index: 100;

    background-color: var(--color-background-soft);
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.active {
    background-color: var(--color-background-soft);
}

.selected {
    background-color: var(--color-background);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>