<template>
  <div class="language-toggle">
    <button
      class="language-option"
      :class="{ active: locale === 'fr' }"
      @click="changeLocale('fr')"
    >
      <img src="/flag/fr-flag.png" class="language-option-image">
    </button>
    <button
      class="language-option"
      :class="{ active: locale === 'en' }"
      @click="changeLocale('en')"
    >
      <img src="/flag/en-flag.png" class="language-option-image">
    </button>
  </div>
</template>
<script setup>
    /* Import Localization */
    import { useI18n } from 'vue-i18n';

    /* Import Style */
    import "../style/components/translate.css";

    const { locale } = useI18n();

    function changeLocale(language) {
        locale.value = language;
    }
</script>