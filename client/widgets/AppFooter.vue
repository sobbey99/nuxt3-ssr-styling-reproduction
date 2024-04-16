<template>
  <footer :class="data.footer_bg">footer (response from server: {{ data.footer_bg }})</footer>
</template>

<script setup>
import {ENDPOINT} from "../constants";

const {data} = await useFetch(ENDPOINT)
</script>

<style scoped lang="scss">

</style>