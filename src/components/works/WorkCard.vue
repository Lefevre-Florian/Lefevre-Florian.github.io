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
            <h6>{{ work.date[locale] }}</h6>
          </div>

          <!-- DETAILS PART (Hidden by default) -->
          <div class="work-card-details">
            <p>
              <span class="skill-tag" v-for="tag in work.tags">{{ tag }}</span>
            </p>
            <p>{{ $t('works.task') }}</p>
            <ul>
              <li v-for="description in work.description">
                {{ description[locale] }}
              </li>
            </ul>
          </div>
        </div>
</template>

<script setup>
    /*Import localization */
    import { useI18n } from 'vue-i18n'

    /* Import components */
    import "../../style/components/work-card.css";

    const props = defineProps({
        work : Object
    });

    const {locale} = useI18n();
</script>