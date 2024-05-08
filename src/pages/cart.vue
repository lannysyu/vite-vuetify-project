<script setup>
import { reactive, inject, ref } from "vue";
import ContentHeader from "@/components/content/Content-header.vue";
import ContentFooter from "@/components/content/Content-footer.vue";
import CartTable from "@/components/cart/CartTable.vue";

// 🚀 Data
const layoutTable = reactive({
    cols: "8",
    class: "ma-auto"
})
const headerTable = reactive({
    name: "Cart",
    class: "py-12 mt-8",
})

// 🚀 method

</script>

<template>
    <v-row>
        <v-col
            :cols="layoutTable.cols"
            :class="layoutTable.class"
        >
            <ContentHeader :title="headerTable" />
            <CartTable />
            <ContentFooter />
        </v-col>
    </v-row>
</template>
