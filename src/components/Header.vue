<script setup>
import { useRoute } from "vue-router";

// 🚀 Data
const route = useRoute();
</script>

<template>
    <div>
        <v-toolbar dark>
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

            <v-img
                width="50px"
                src="../assets/logo/logo.png"
                class="d-block cursor-pointer ml-4 flex-0-0"
            >
                <!-- <router-link :to="{ name: 'Home' }">

                </router-link> -->
            </v-img>

            <v-toolbar-title>LUBUBU WEB</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-export</v-icon>
            </v-btn>
        </v-toolbar>
    </div>
</template>
