<template>
    <div class="row mt-4">
        <h2 class="section-title">{{ props.title }}</h2>
    </div>
    <div class="scroll">
        <div
            v-for="prototype in props.elements"
            :key="prototype.id"
            class="scroll-item"
        >
            <PreviewButton
                :link="props.urlBase + prototype.id"
                :img="prototype.poster"
            />
        </div>
    </div>
</template>
<script setup>
    import PreviewButton from './PreviewButton.vue';

    const props = defineProps({
        title : String,
        urlBase : String,
        elements : Array
    })
</script>
<style scoped>
    .scroll {
        display: flex;
        gap: 0.75rem;

        overflow-x: auto;
        overflow-y: hidden;

        padding: 1rem;

        scrollbar-width: thin;
        scrollbar-color: #444 #141418;
    }

    .scroll-item {
        flex: 0 0 auto;
        width: 200px;
    }

    .scroll::-webkit-scrollbar {
        width: 6px;
    }

    .scroll::-webkit-scrollbar-track {
        background: #141418;
    }

    .scroll::-webkit-scrollbar-thumb {
        background: #444;
        border-radius: 10px;
    }
</style>