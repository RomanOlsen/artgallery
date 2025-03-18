<script setup>
import { Art } from '@/models/Art.js';


defineProps({
  artProp: { type: Art, required: true }
})



</script>
// TODO challenge add a horizontal line after every 3
// TODO fix color and border
<template>
  <div class="card mb-4 shadow">
    <!-- <div>{{ artProp.slug }}</div> -->
    <div class="art-border" :style="{ borderColor: artProp.color }">
      <img :src="artProp.image" :alt="artProp.slug" class="img-fluid">
    </div>
    <div class="text-center my-1">
      <button class="btn btn-indigo">❤️ Admire</button>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.art-border {
  // border-width: 10px;
  // border-radius: 1rem;
  // border-color: rgb(66, 224, 224);
  // border: 50px solid gray;
  border-style: solid;
  border-width: 0.75rem;
}
</style>