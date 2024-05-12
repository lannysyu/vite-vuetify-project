<script setup>
import { reactive, inject, ref } from "vue";
import ContentHeader from "@/components/content/Content-header.vue";
import ContentFooter from "@/components/content/Content-footer.vue";

// 🚀 Data
const layoutTable = reactive({
    cols: "3",
    class: "ma-auto"
})
const headerTable = reactive({
    name: "Login",
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
            <div>
                <label
                    for="email"
                    class="font-weight-bold text-overline d-block"
                >EMAIL</label>
                <v-text-field
                    id="email"
                    label="Your email"
                    variant="outlined"
                    single-line
                ></v-text-field>
            </div>
            <div>
                <div class="d-flex justify-space-between">
                    <label
                        for="password"
                        class="font-weight-bold text-overline"
                    >PASSWORD</label>
                    <a
                        href="#"
                        class="font-weight-light text-overline text-decoration-none text-white"
                    >forget?</a>
                </div>
                <v-text-field
                    id="password"
                    label="Your password"
                    variant="outlined"
                    single-line
                ></v-text-field>
            </div>
            <div class=" mt-4">
                <v-btn
                    class="w-100"
                    size="large"
                >
                    Sign In
                </v-btn>
            </div>
            <div class="mt-10">
                <router-link
                    class="font-weight-light text-overline text-decoration-none text-white"
                    to="/create"
                >CREATE ACCOUNT</router-link>
            </div>
            <ContentFooter />
        </v-col>
    </v-row>
</template>
