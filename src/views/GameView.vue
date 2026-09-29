<template>
    <RouterView>
        <!-- HEADER -->
        <Header></Header>
        <!-- CONTENT CONTAINER -->
        <div class="container mt-5">
            <!-- PROJECT CONTENT SECTION -->
            <div class="project-card">
                <div class="row">
                    <div class="col-md-5">
                        <iframe width="100%" height="100%" :src="`${game.video}`" :poster="`/poster/${game.poster}`">
                        </iframe>
                    </div>
                    <div class="col-md-7">
                        <ProjectInformation
                        :title="game.title"
                        :position="game.position"
                        :date="game.date[locale]"
                        :technology="game.technology">
                        </ProjectInformation>
                        <div v-if="game.description !== null">
                            <p><b>Description : </b>{{ game.description[locale] }}</p>
                        </div>
                        <div>
                            <p><b>Tags : </b>{{ game.tags[locale] }}</p>
                        </div>
                        <div class="d-flex align-items-center gap-2">
                            <p class="m-0"><b>{{ $t('projects.platform') }}</b></p>
                            <GamePlatformIcon v-for="platform in game.platform" :type="platform"></GamePlatformIcon>
                        </div>
                        <div class="row embedded-app">
                            <iframe
                                :src="`${game.link}`"
                                width="552"
                                height="167"
                                frameborder="0"
                                v-if="game.isItchio">
                            </iframe>
                            <iframe
                                :src="`${game.link}`"
                                style="min-height : 190px;"
                                v-else="game.isItchio">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div v-if="game.extensions !== null">
                    <component
                        v-for="(extension, index) in game.extensions"
                        :key="index"
                        :is="extension.components"
                        v-bind="extension.props"
                    />
                </div>
            </div>
            <!-- OTHER PROJECT SECTION -->
            <PreviewLine
                :title="`Projects`"
                :name="`games`"
                :elements="games">
            </PreviewLine>
        </div>
    </RouterView>
</template>
<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    /* Import style */
    import "../style/projectview.css";

    /* Import components */
    import Header from "../components/ProjectHeader.vue";

    import GamePlatformIcon from '../components/games/GamePlatformIcon.vue';
    import ProjectInformation from '../components/ProjectInformation.vue';
    import PreviewLine from '../components/previews/PreviewLine.vue';

    /* Import data */
    import { games } from '../data/games.js';

    /* Import localization */
    import { useI18n } from 'vue-i18n';

    const {locale} = useI18n();

    const route = useRoute();

    const game = computed(() => {
        return games.find(game => game.id === route.params.id)
    });
</script>