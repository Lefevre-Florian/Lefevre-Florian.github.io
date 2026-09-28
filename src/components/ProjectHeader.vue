<template>
    <div class="header">
        <RouterLink :to="`/${locale}/`" class="title">
            LEFEVRE Florence
        </RouterLink>
    </div>
</template>
<script setup>
    /* Import localization */
    import { useI18n } from "vue-i18n";

    const {locale} = useI18n();
</script>