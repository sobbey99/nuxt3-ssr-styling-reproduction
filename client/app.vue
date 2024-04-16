<template>
  <div class="min-h-screen flex flex-col justify-between">
    <AppHeader/>
    <div class="flex-1">
      <AppMain/>
    </div>
    <AppFooter/>
  </div>
</template>

<script setup>
import {useGetFieldsDictionary} from "./entities/fields"
import AppHeader from "./widgets/AppHeader.vue";
import AppMain from "./widgets/AppMain.vue";
import AppFooter from "./widgets/AppFooter.vue";

const {suspense} = useGetFieldsDictionary()


onServerPrefetch(async () => {
  try {
    await suspense();
  } catch (e) {
  }
});
</script>

<style scoped lang="scss">

</style>