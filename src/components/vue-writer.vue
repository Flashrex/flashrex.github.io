<script setup>
import { onMounted, ref } from 'vue';

const typeValue = ref("");
const count = ref(0);
const typeStatus = ref(false);
const arrayIndex = ref(0);
const charIndex = ref(0);

const props = defineProps({
    array: {
        type: Array,
        required: true
    },
    eraseSpeed: {
        type: Number,
        default: 100,
    },
    typeSpeed: {
        type: Number,
        default: 200,
    },
    delay: {
        type: Number,
        default: 2000,
    },
    intervals: {
        type: Number,
        default: 500,
    },
    start: {
        type: Number,
        default: 0,
    },
    caret: {
        type: String,
        default: "cursor",
    },
    iterations: {
        type: Number,
        default: 0,
    }
})

function typewriter() {
    let loop = 0;
    if (charIndex.value < props.array[arrayIndex.value].length) {
        if (!typeStatus.value) {
            typeStatus.value = true;
        }

        typeValue.value += props.array[arrayIndex.value].charAt(charIndex.value);
        charIndex.value += 1;
        setTimeout(typewriter, props.typeSpeed);
    } else {
        count.value += 1;

        onTyped(props.array[arrayIndex.value]);

        if (count.value === props.array.length) {
            loop += 1;
            if (loop === props.iterations) {
                return (typeStatus.value = false);
            }
        }

        typeStatus.value = false;

        setTimeout(eraser, props.delay);
    }
}

function eraser() {
    if (charIndex.value > 0) {
        if (!typeStatus.value) typeStatus.value = true;
        typeValue.value = props.array[arrayIndex.value].substring(
            0,
            charIndex.value - 1
        );
        charIndex.value -= 1;
        setTimeout(eraser, props.eraseSpeed);
    } else {
        typeStatus.value = false;
        arrayIndex.value += 1;
        if (arrayIndex.value >= props.array.length) arrayIndex.value = 0;
        setTimeout(typewriter, props.typeSpeed + props.intervals);
    }
}

function onTyped(typedString) {
    //this.$emit("typed", typedString);
}

onMounted(() => {
    setTimeout(typewriter, props.start);
})
</script>

<template>
    <div class="is-typed">
        <slot />
        <span class="typed">{{ typeValue }}</span>
        <span :class="`caret ${props.caret}`">&nbsp;</span>
    </div>
</template>

<style scoped></style>