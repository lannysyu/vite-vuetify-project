<script setup>
const props = defineProps({
    title: {
        type: String
    },
});
</script>

<template>
    <div :class="props.title.class">
        <h1>{{ props.title.name }}</h1>
    </div>
</template>
