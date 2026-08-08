<template>
  <a :href="props.link" class="game-btn d-block">
    <img
      :src="`/poster/${props.img}`"
      :alt="props.title"
    >
  </a>
</template>

<script setup>
    const props = defineProps({
        link : String,
        img : Image,
        alt : String
    });
</script>