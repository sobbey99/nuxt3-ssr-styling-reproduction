<template>
  <footer :class="footer_bg">footer ({{ footer_bg }})</footer>
</template>

<script setup>
import {useGetField} from "../entities/fields";

const {footer_bg} = useGetField(["footer_bg"])
</script>

<style scoped lang="scss">

</style>