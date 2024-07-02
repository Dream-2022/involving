<template>
    <div class="wow animate__fadeInUp">black</div>
</template>
<script setup>
import { onMounted } from "vue";
import WOW from "wow.js";
onMounted(() => {
    const wow = new WOW({})
    wow.init();
})
</script>
<style lang="scss" scoped></style>