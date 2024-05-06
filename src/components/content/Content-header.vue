<script setup>
const props = defineProps({
    title: {
        type: String
    },
});

</script>

<template>
    <v-col>
        <div>
            <h1>{{ props.title }}</h1>
        </div>
    </v-col>
</template>
