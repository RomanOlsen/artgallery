<script setup>
import { Art } from '@/models/Art.js';


defineProps({
  artProp: { type: Art, required: true }
})



</script>


<template>
  <div>{{ artProp.description }}</div>
  <img :src="artProp.image" alt="" class="img-fluid">
</template>


<style lang="scss" scoped></style>