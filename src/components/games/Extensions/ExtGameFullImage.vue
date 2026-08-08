<template>
    <br>
    <div class="row">
        <h6 class="text-center">{{ props.alt }}</h6>
    </div>
    <div class="row justify-content-center">
        <a 
            :href="`${props.hiddenLink}`"
            target="_blank" 
            v-if="props.hiddenLink.length !== 0" 
            class="d-flex justify-content-center"
        >
            <img :src="`${props.src}`" class="project-image">
        </a>
        <img :src="`${props.src}`" class="project-image" v-else>
    </div>
</template>
<script setup>
    const props = defineProps({
        src : String,
        alt : String,
        hiddenLink : String
    })
</script>
<style scoped>
    .project-image {
        width: 50%;
        max-width: 700px;
        min-width: 350px;
        height: auto;
    }
</style>