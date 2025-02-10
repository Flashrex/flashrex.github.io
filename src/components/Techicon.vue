<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    href?: string,
    icon: string,
    size?: string
}>();

const computedWidth = computed(() => {
    switch (props.size) {
        case 'small':
            return '40px';
        case 'medium':
            return '75px';
        default:
            return '40px';
    }
})

</script>

<template>
    <a
        v-if="props.href"
        :href="props.href" 
        target="_blank"
    >
        <img 
            class="techicon" 
            :alt="`${props.icon}_icon`"
            :src="`https://skillicons.dev/icons?i=${props.icon}`"
            :style="{ width: computedWidth}"
        >
    </a>

    <img
        v-else
        class="techicon" 
        :alt="`${props.icon}_icon`"
        :src="`https://skillicons.dev/icons?i=${props.icon}`"
        :style="{ width: computedWidth}"
    >
</template>

<style scoped>
.techicon {
    aspect-ratio: 1/1;
    transition: transform 1s;
}

.techicon:hover {
    transform: translateY(-0.2rem);
}
</style>