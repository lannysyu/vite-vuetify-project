<script setup>
const props = defineProps({
    btn: {
        type: String
    },
});
</script>

<template>
    <div>
        <v-btn :class="props.btn.class">
            {{ props.btn.name }}
        </v-btn>
    </div>
</template>
