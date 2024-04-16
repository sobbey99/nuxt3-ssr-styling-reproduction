<template>
  <main :class="data.main_bg">MAIN (response from server: {{ data.main_bg }})</main>
</template>

<script setup>

import {ENDPOINT} from "../constants";

const {data} = await useFetch(ENDPOINT)
</script>

<style scoped lang="scss">
main {
  flex: 1;
}
</style>