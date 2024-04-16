<template>
  <div class="min-h-screen flex flex-col justify-between">
    <AppHeader/>
    <AppMain/>
    <AppFooter/>
  </div>
</template>

<script setup>
import AppHeader from "./widgets/AppHeader.vue";
import AppMain from "./widgets/AppMain.vue";
import AppFooter from "./widgets/AppFooter.vue";
</script>

<style scoped lang="scss">

</style>