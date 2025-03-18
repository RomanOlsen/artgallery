<script setup>
import { Art } from '@/models/Art.js';


defineProps({
  artProp: { type: Art, required: true }
})



</script>

// TODO fix color and border
<template>
  <!-- <div>{{ artProp.slug }}</div> -->
  <div class="art-border" :style="{ borderColor: artProp.color }">
    <img :src="artProp.image" :alt="artProp.slug" class="img-fluid">
  </div>
</template>


<style lang="scss" scoped>
.art-border {
  // border-width: 10px;
  border-radius: 1rem;
  // border-color: rgb(66, 224, 224);
  // border: 50px solid gray;
  border-style: solid;
  border-width: 2rem;
}
</style>