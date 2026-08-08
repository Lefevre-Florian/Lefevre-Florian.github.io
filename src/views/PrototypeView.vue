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
                        <iframe width="100%" height="100%" :src="`${prototype.video}`" :poster="`/poster/${prototype.poster}`">
                        </iframe>
                    </div>
                    <div class="col-md-7">
                        <ProjectInformation
                        :title="prototype.title"
                        :position="prototype.position"
                        :date="prototype.duration"
                        :technology="prototype.technology">
                        </ProjectInformation>
                        <div>
                            <p><b>Description : </b></p>
                            <p v-for="log in prototype.devlog" v-html="log"></p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- OTHER PROJECT SECTION -->
            <PreviewLine
                :title="`Projects`"
                :urlBase="`/prototypes/`"
                :elements="prototypes">
            </PreviewLine>
        </div>
    </RouterView>
</template>
<script setup>
    import { computed } from 'vue'
    import { useRoute } from 'vue-router'

    /* Import style */
    import "../style/projectview.css";

    /* Import components */
    import Header from "../components/ProjectHeader.vue";

    import ProjectInformation from '../components/ProjectInformation.vue';
    import PreviewLine from '../components/previews/PreviewLine.vue';

    /* Import data */
    import { prototypes } from '../data/prototypes.js'

    const route = useRoute()

    const prototype = computed(() => {
        return prototypes.find(prototype => prototype.id === route.params.id)
    })
</script>