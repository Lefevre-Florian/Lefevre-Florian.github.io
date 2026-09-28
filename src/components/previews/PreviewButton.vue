<template>
  <RouterLink :to="props.link" class="game-btn d-block">
    <img
      :src="`/poster/${props.img}`"
      :alt="props.title"
    >
  </RouterLink>
  <span class="game-title">{{ props.title }}</span>
</template>

<script setup>
  /* Import style */
  import "../../style/components/game.css";
  
  const props = defineProps({
      link : {type : [String, Object], required : true},
      img : String,
      alt : String,
      title : String
  });
</script>