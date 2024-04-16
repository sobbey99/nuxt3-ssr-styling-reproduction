<template>
  <main :class="main_bg">MAIN ({{ main_bg }})</main>
</template>

<script setup>
import {useGetField} from "../entities/fields";

const {main_bg} = useGetField(["main_bg"])
</script>

<style scoped lang="scss">

</style>