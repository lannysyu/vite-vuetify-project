<script setup>
import ContentHeader from "@/components/content/Content-header.vue"
import ContentMain from "@/components/content/Content-main.vue"
import ContentFooter from "@/components/content/Content-footer.vue"

const props = defineProps({
    layout: {
        type: String
    },
    title: {
        type: String
    },
});
</script>

<template>
    <v-row>
        <v-col
            :cols="props.layout.cols"
            :class="props.layout.class"
        >
            <div :class="props.title.class">
                <ContentHeader />
            </div>
            <div :class="props.title.class">
                <ContentMain />
            </div>
            <div :class="props.title.class">
                <ContentFooter />
            </div>
        </v-col>
    </v-row>
</template>
