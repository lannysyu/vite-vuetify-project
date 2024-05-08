<script setup>
import { reactive, inject, ref } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";

// 🚀 Data
const route = useRoute();
const productItems = reactive([
    { title: '盲盒手辦' },
    { title: '手機周邊' },
    { title: '設計小物' },
    { title: '大型公仔' },
])
const themeItems = reactive([
    { title: '心動馬卡龍' },
    { title: '頑皮日記' },
    { title: '春天野在家' },
    { title: '看不見我' },
])

// 🚀 method

</script>

<template>
    <div>
        <v-toolbar
            dark
            class="v-toolbar"
        >
            <router-link to="/">
                <v-img
                    width="80px"
                    src="@/assets/logo/logo.png"
                    class="d-block cursor-pointer ml-8 flex-0-0"
                />

            </router-link>

            <v-toolbar-title>THE MONSTERS</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items>

                <v-btn
                    to="/about"
                    :ripple="false"
                > ABOUT </v-btn>

                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn
                            v-bind="props"
                            :ripple="false"
                        > THEME </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="(item, index) in themeItems"
                            :key="index"
                            :value="index"
                        >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn
                            v-bind="props"
                            :ripple="false"
                        > PRODUCT </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="(item, index) in productItems"
                            :key="index"
                            :value="index"
                        >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-btn
                    to="/cart"
                    color="orange"
                    :ripple="false"
                > CART </v-btn>

            </v-toolbar-items>

            <v-btn
                icon
                class="ml-1 mr-10"
                to="/login"
            >
                <v-icon>mdi-account</v-icon>
            </v-btn>

            <!-- <v-btn icon>
                <v-icon>mdi-export</v-icon>
            </v-btn> -->
        </v-toolbar>
    </div>
</template>

<style></style>
