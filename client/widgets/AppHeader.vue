<template>
  <header :class="header_bg">
    HEADER
    ({{ header_bg }})
  </header>
</template>

<script setup>
import {useGetField} from "../entities/fields";

const {header_bg} = useGetField(["header_bg"])
</script>

<style scoped lang="scss">

</style>