<template>
    <div class="row">
        <div class="col-md-6">
            <p class="m-0 p-space p-explanation" 
                v-for="line in props.content"
                v-html="line[locale]">
            </p>
        </div>
        <div class="col-md-6 video-container">
            <iframe width="90%" height="90%" :src="`${props.src}`">
            </iframe>
        </div>
    </div>
</template>
<script setup>
    /* Import localization */
    import { useI18n } from "vue-i18n";

    /* Import style */
    import "../../../style/components/game-extentions.css";

    const {locale} = useI18n();

    const props = defineProps({
        content : Array,
        src : String
    });
</script>