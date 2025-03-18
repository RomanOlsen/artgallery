<script setup>
import { AppState } from '@/AppState.js';
import { artService } from '@/services/ArtService.js';
import { Pop } from '@/utils/Pop.js';

async function changePage(direction) {

  if (AppState.page < 2 && direction == -1) {
    Pop.toast('You cant go backwards')
    return
  }

  try {
    await artService.changePage(direction)
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <button @click="changePage(-1)" class="btn btn-primary">Previous</button>
  <span>{{ AppState.page }}</span>
  <button @click="changePage(1)" class="btn btn-primary">Next</button>
</template>


<style lang="scss" scoped></style>