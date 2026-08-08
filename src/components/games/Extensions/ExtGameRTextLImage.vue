<template>
    <div class="row">
        <div class="col-md-6">
            <img :src="`${props.src}`" width="90%" height="90%">
        </div>
        <div class="col-md-6">
            <p class="m-0 p-space p-explanation" 
                v-for="line in props.content"
                v-html="line">
            </p>
        </div>
    </div>
</template>
<script setup>
    /* Import style */
    import "../../../style/components/game-extentions.css" 

    const props = defineProps({
        content : Array,
        src : String
    });
</script>