<script setup>
import { Art } from '@/models/Art.js';
import { artService } from '@/services/ArtService.js';
import { Pop } from '@/utils/Pop.js';
// import Admirers from './Admirers.vue';


defineProps({
  artProp: { type: Art, required: true }
})


async function admire(id) {
  try {

    await artService.admire(id)
    Pop.success('Admired!')
  }
  catch (error) {
    Pop.error(error, 'couldnt admire that!');
  }
}

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
      <button @click="admire(artProp.id)" class="btn btn-indigo">❤️ Admire</button>
      <div>Admirations: {{ artProp.admirers.length }}</div>
      <div v-for="admirer in artProp.admirers" class="profile">

        <img :src="admirer.picture" alt="">
        {{ admirer.name }}
        <!-- <Admirers /> -->
      </div>


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

.profile img {
  height: 25px;
  width: 25px;
  object-fit: cover;
}
</style>