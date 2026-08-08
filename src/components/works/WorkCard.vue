<template>
    <div class="work-card">
        <div class="work-card-main">
            <img
              :src="`/company/${work.logo}`"
              :alt="work.company"
              class="work-card-company-logo"
            >
            <h4>{{ work.position }}</h4>
            <h5>[{{ work.company }}]</h5>
            <h6>{{ work.date }}</h6>
          </div>

          <!-- DETAILS PART (Hidden by default) -->
          <div class="work-card-details">
            <p>
              <span class="skill-tag" v-for="tag in work.tags">{{ tag }}</span>
            </p>
            <p>Tâches réalisées : </p>
            <ul>
              <li v-for="description in work.description">
                {{ description }}
              </li>
            </ul>
          </div>
        </div>
</template>

<script setup>
    const props = defineProps({
        work : Object
    });
</script>