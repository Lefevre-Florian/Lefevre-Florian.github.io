<template>
    <div class="col-md-4 mb-5">
        <a :href="game.url" class="game-btn d-block position-relative">
            <img :src="`/poster/${game.poster}`" alt="Game Logo">
            <!-- Badge icon -->
            <div class="badge-icon">
                <img src="/logo/unreal_logo.png" alt="Badge Icon" v-if="game.engine == Engine.Unreal">
                <img src="/logo/unity_logo.png" alt="Badge Icon" v-else>
            </div>
        </a>
        <h6 class="project-title">{{ game.position }}</h6>
    </div>
</template>

<script setup>
    import { Engine } from '../../utils/engine';

    const props = defineProps({
        game: {
            type: Object,
            required: true
        }
    });
</script>