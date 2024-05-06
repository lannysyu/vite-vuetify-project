<script setup>
import Header from "@/layouts/Header.vue"
</script>

<template>
  <v-app>
    <Header />
    <v-main class="layout-main">
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>
