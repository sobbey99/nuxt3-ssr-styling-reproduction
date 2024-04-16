<template>
  <header :class="data.header_bg">
    HEADER
    (response from server: {{ data.header_bg }})
  </header>
</template>

<script setup>

import {ENDPOINT} from "../constants";

const {data} = await useFetch(ENDPOINT)

</script>

<style scoped lang="scss">

</style>