// JS
<script setup>
import { AppState } from '@/AppState.js';
import ArtCard from '@/components/ArtCard.vue';
import PageButtons from '@/components/PageButtons.vue';
import { artService } from '@/services/ArtService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

/////////////////////////

const arts = computed(() => AppState.arts)

/////////////////////////

onMounted(() => {
  getArt()
})

/////////////////////////


async function getArt() {
  try {
    await artService.getArt()
  } catch (error) {
    Pop.error(error)
  }
}

/////////////////////////
</script>

// HTML
<template>
  <div class="container">
    <div class="row">
      <PageButtons />
    </div>
    <div class="row">
      <div v-for="art in arts" class="col-4 align-items-center d-flex" :key="art.id">
        <ArtCard :artProp="art" />
      </div>
    </div>
  </div>
</template>

// CSS
<style scoped lang="scss"></style>
