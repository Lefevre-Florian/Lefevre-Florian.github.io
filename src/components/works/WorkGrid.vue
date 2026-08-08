<template>
  <section class="section section-work" id="works">
    <div class="container">
      <div class="row mt-4">
        <h2 class="section-title">
          Expériences professionnelles
        </h2>
      </div>
      <div class="work-cards">
        <WorkCard
          v-for="(work, index) in works"
          :work="work"
          :key="work.id"
          :class="{expanded: selectedWork === index}"
          @click="toggleWork(index)">
        </WorkCard>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'
import WorkCard from './WorkCard.vue'
import { works } from '../../data/works'

const selectedWork = ref(null)

function toggleWork(index) {
  if (selectedWork.value === index)
    selectedWork.value = null
  else
    selectedWork.value = index
}
</script>