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
    name: "Create Account",
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
                    for="firstName"
                    class="font-weight-bold text-overline d-block"
                >FIRST NAME</label>
                <v-text-field
                    id="firstName"
                    label="Your first name"
                    variant="outlined"
                    single-line
                ></v-text-field>
            </div>
            <div>
                <label
                    for="lastName"
                    class="font-weight-bold text-overline"
                >LAST NAME</label>
                <v-text-field
                    id="lastName"
                    label="Your last name"
                    variant="outlined"
                    single-line
                ></v-text-field>
            </div>
            <div>
                <label
                    for="email"
                    class="font-weight-bold text-overline"
                >EMAIL</label>
                <v-text-field
                    id="email"
                    label="Your email"
                    variant="outlined"
                    single-line
                ></v-text-field>
            </div>
            <div>
                <label
                    for="password"
                    class="font-weight-bold text-overline"
                >PASSWORD</label>
                <v-text-field
                    id="password"
                    label="Your password"
                    variant="outlined"
                    single-line
                ></v-text-field>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="agree"
                >
                <label
                    for="agree"
                    class="pl-3 font-weight-light text-overline"
                > Subscribe to stay updated with new products!</label>
            </div>
            <div class=" mt-4">
                <v-btn
                    class="w-100"
                    size="large"
                >
                    CREATE
                </v-btn>
            </div>
            <ContentFooter />
        </v-col>
    </v-row>
</template>
