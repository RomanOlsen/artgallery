<script setup>
import { AppState } from '@/AppState.js';
import { artService } from '@/services/ArtService.js';
import { Pop } from '@/utils/Pop.js';

async function changePage(direction) {

  if (AppState.page < 2 && direction == -1) {
    Pop.toast('You cant go backwards')
    return
  }

  if (AppState.page >= AppState.maxPages && direction == 1) {
    Pop.toast(`You cant go past the max limit of ${AppState.maxPages} pages.`)
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
  <div class="d-flex justify-content-between align-items-center my-3">
    <button @click="changePage(-1)" class="btn btn-warning" :disabled="AppState.page < 2">Previous</button>
    <span>Page: {{ AppState.page }}</span>
    <button @click="changePage(1)" class="btn btn-success" :disabled="AppState.page >= AppState.maxPages">Next</button>
  </div>
</template>


<style lang="scss" scoped></style>