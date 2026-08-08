<template>
    <RouterView>
        <!-- HEADER SECTION -->
        <div class="header">
            LEFEVRE Florence
            <nav class="main-nav">
                <a href="#about">A propos</a>
                <a href="#works">Expériences</a>
                <a href="#projects">Projets</a>
            </nav>
        </div> 
        <!-- WELCOME SECTION -->
        <section class="section section-welcome" id="about">
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-7">
                        <div class="welcome-title">
                            <div class="welcome-line"></div>
                            <h2>BIENVENUE</h2>
                        </div>
                        <div>
                            <p>
                                Bonjour et bienvenue, je suis <b><em>Lefevre Florence</em></b>, programmeuse gameplay. J'ai eu l'occasion de travailler sur les différents aspects du développement et de l'intégration. J'ai une appétance
                                particulière pour la programmation 3C. Mais je suis aussi intéressée par la programmation d'outils ou l'optimisation de code.
                            </p>
                            <p>
                                Je suis formée en
                                <span class="skill-tag">C++</span>,
                                <span class="skill-tag">Blueprint</span>,
                                <span class="skill-tag">C#</span>
                                sur
                                <span class="skill-tag">Godot</span>,
                                <span class="skill-tag">Unity</span>,
                                <span class="skill-tag">Unreal</span>.
                            </p>
                            <p>
                                J'ai eu aussi la possibilité d'apprendre la conception de jeu, à travers divers sujets comme le
                                <span class="skill-tag">Level design</span>,
                                ou l'<span class="skill-tag">UX design</span>.
                                <br>
                            </p>
                        </div>
                        <div>
                            <p><b>Si vous souhaitez me contacter :</b></p>
                            <div>
                                <a href="mailto:lefevreflorian18@gmail.com?subject=feedback">
                                    <span class="icon-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#000000" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                        </svg>
                                    </span>
                                </a>
                                <a href="https://www.linkedin.com/in/florence-lefevre-9830831a3/" target="_blank">
                                    <span class="icon-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#000000" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 d-flex justify-content-center align-items-center">
                        <img src="/logo/website_logo.png"
                        alt=""
                        class="img-fluid" id="profile-img">
                    </div>
                </div>
            </div>
        </section>
        <!-- WORK SECTION -->
        <WorkGrid></WorkGrid>
        <!-- GAME SECTION -->
        <section class="section section-projects" id="projects">
            <div class="container">
                <div class="row mt-4">
                    <h2 class="section-title">Projets</h2>
                </div>
                <div class="row mt-4">
                    <GameButton 
                        v-for="game in games"
                        :key="game.id"
                        :game="game"
                    >
                    </GameButton>
                </div>
            </div>
        </section>
        <section class="section section-prototypes">
            <!-- PROTOYPE SECTION -->
            <div class="container">
                <PreviewLine 
                    :urlBase="`/prototypes/`"
                    :elements="prototypes"
                    :title="`Prototypes`">
                </PreviewLine>
            </div>
        </section>
    </RouterView>
</template>
<script setup>
    /* Import styles */
    import "../style/titlecard.css";

    /* Import components */
    import PreviewButton from '../components/previews/PreviewButton.vue';
    import WorkGrid from '../components/works/WorkGrid.vue';
    import GameButton from '../components/games/GameButton.vue';
    import PreviewLine from "../components/previews/PreviewLine.vue";

    /* Import data */
    import {prototypes} from '../data/prototypes.js';
    import {games} from '../data/games.js';
</script>