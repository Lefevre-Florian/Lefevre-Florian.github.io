/*
=======================================
                Template
=======================================
{
    id : "",
    url : "",
    poster : "assets/images/poster/poster_.png",
    video : "",
    title : "",
    position : "",
    description : {},
    tags : {},
    platform : [],
    link : "",
    isItchio : false,
    company : "ISART Digital",
    date : {},
    technology : [],
    engine : null,
    extensions : null
}

Extensions format : 
{
    components : null,
    props : {}
}
*/

import { Engine } from "../utils/engine"
import { Platform } from "../utils/platform"

// Extensions
import ExtGameFullImage from "../components/games/Extensions/ExtGameFullImage.vue";
import ExtGameRTextLVideo from "../components/games/Extensions/ExtGameRTextLVideo.vue";
import ExtGameLTextRVideo from "../components/games/Extensions/ExtGameLTextRVideo.vue";

export const games = [
    {
        id : "wobblyHeist",
        url : "",
        poster : "poster_wobbly_heist.png",
        video :"https://www.youtube.com/embed/JCAlPseT7Rk?autoplay=1?mute=1",
        title : "Wobbly Heist",
        position : "Gameplay programmer 3C",
        description : null,
        tags : {
            fr : "Jeu d'infiltration / Jeu de puzzles",
            en : "Stealth Game / Puzzle Game"
        },
        platform : [Platform.PC, Platform.PS5],
        link : "https://store.steampowered.com/widget/4196110/",
        isItchio : false,
        company : "ISART Digital",
        date : {
            fr : "[Oct. 2025 - Mai. 2026]",
            en : "[Oct. 2025 - May. 2026]"
        },
        technology : ["Unreal", "C++", "Wwise", "Perforce"],
        engine : Engine.Unreal,
        extensions : [
            {
                components : ExtGameRTextLVideo,
                props : {
                    content : [
                        {
                            fr : `En tant que Gameplay Programmeuse spécialisée sur les 3Cs durant se projet, j'ai pu travailler sur les aspects physiques du contrôle des différents personnages.
                            En début de production une physique intégralement custom fut envisagée et protoypée, un character custom (Héritant de Pawn). J'ai donc programmé les collisions,
                            mouvement (escalier, acceleration, gravité...) custom pour les personnages. Même si par la suite et pour des raisons de production et de temps la solution d'utiliser
                            le ACharacter d'Unreal fut retenu.`,
                            en : `As a Gameplay Programmer specializing in 3C, I worked on various aspects of character control, including physics programming, camera movement and fine-tuning, and character behavior.
                            At the beginning of production, I prototyped a fully custom character physics system by inheriting from APawn. I implemented everything from collision detection to character movement, 
                            including stairs and acceleration. However, for production reasons, we eventually switched to ACharacter to save development time.`
                        },
                        {
                            fr : `Pour la partie empilement des personnages il s'agit d'une physique custom qui est à l'oeuvre sur laquelle j'ai travaillé, la physique permet de donner cet aspect
                            branlant permanent de la pile de capybara renforçant l'aspect humoristique du jeu. La physique en elle-même étant baséé grandement sur le principe des ressors harmoniques
                            afin de produire les différentes forces et donc retours de forces à l'oeuvre lors des déplacements.`,
                            en : `For creature stacking, I developed and fine-tuned a custom physics system to achieve the goofy, exaggerated movements that convey the game's humorous tone. 
                            The system is based on spring physics, which I studied and implemented to reproduce the forces and counterforces acting on individual creatures during movement, 
                            and how these forces affect the stack as a whole.`
                        }
                    ],
                    src : "https://www.youtube.com/embed/sBgbNlGPb4I?autoplay=1?mute=1"
                }
            },
            {
                components : ExtGameFullImage,
                props : {
                    src : "/teams/team_wobbly_heist.jpg",
                    alt : {
                        fr : "Photo d'équipe !",
                        en : "The Team !"
                    },
                    hiddenLink : "https://wobblyheist.carrd.co/",
                }
            }
        ]
    },
    {
        id : "lightmoor",
        url : "",
        poster : "poster_lightmoor.png",
        video : "https://www.youtube.com/embed/nsEjPgrXQN4?autoplay=1?mute=1",
        title : "Lightmoor",
        position : "Gameplay programmer 3C",
        description : {
            fr : `Jeu de puzzle aventure en 3D, vous plaçant au contrôle d'un riche héritier cherchant à élucider les mystères autour d'un héritage perdu dans les hébrides.`,
            en : `Lightmoor is a 3D adventure and puzzle game in which you play as a wealthy heir seeking to uncover what lies beneath the mysterious mist that has taken over the Hebrides.`
        },
        tags : {
            fr : "Jeu d'aventure / Jeu de puzzles",
            en : "Adventure Game / Puzzle Game"
        },
        platform : [Platform.PC],
        link : "https://itch.io/embed/3663973?bg_color=181a1c&fg_color=ffffff&border_color=3a3f42&link_color=4a4016",
        isItchio : true,
        company : "ISART Digital",
        date : {
            fr : "[Mai. 2025 - Juil. 2025]",
            en : "[May. 2025 - July. 2025]"
        },
        technology : ["Unreal", "Blueprint", "Perforce", "Wwise"],
        engine : Engine.Unreal,
        extensions : null
    }, 
    {
        id : "landsliders",
        url : "",
        poster : "poster_landsliders.png",
        video : "https://www.youtube.com/embed/m7G5DseOf1w?autoplay=1?mute=1",
        title : "Landsliders",
        position : "Gameplay programmer",
        description : {
            fr : `Vivez des aventures rocambolesques à travers des terres mystérieuses, guidez votre caravane à son objectif dans ce jeu de carte free-to-play disponible sur mobile`,
            en : `Embark on a thrilling adventure alongside your caravan! As their guide, help them cross these wonderful yet dangerous lands using your deck of magical biomes in this free-to-play game available on Android.`
        },
        tags : {
            fr : "Free-to-play / Jeu de cartes",
            en : "Free-to-play / Card Game"
        },
        platform : [Platform.Android],
        link : "https://itch.io/embed/2997808?bg_color=181a1c&fg_color=ffffff&border_color=3a3f42&link_color=53922a",
        isItchio : true,
        company : "ISART Digital",
        date : {
            fr : "[Avr. 2024 - Mai. 2024]",
            en : "[Apr. 2024 - May. 2024]"
        },
        technology : ["Unity", "C#", "FMOD", "Git"],
        engine : Engine.Unity,
        extensions : null
    },
    {
        id : "vampyValentine",
        url : "",
        poster : "poster_vampy_valentine.png",
        video : "https://www.youtube.com/embed/S2rDXEUH6w4?autoplay=1?mute=1",
        title : "Vampy Valentine",
        position : "Gameplay programmer & Level designer",
        description : {
            fr : `L'amour est parfois aussi dangereux qu'un pieu. Dans Vampy Valentine incarnez un vampire dandy, parcourez les différents niveaux de ce jeu de plateforme 2D mais attention pour vous le soleil n'est pas le seul danger.`,
            en : `Love, what a wonderful feeling! One that can sometimes be as dangerous as a stake... In Vampy Valentine, play as a dandy vampire exploring the many levels of his mansion. But beware: in this game, the sun isn't the only thing that can be dangerous!`
        },
        tags : {
            fr : "Platformer 2D",
            en : "2D Platformer"
        },
        platform : [Platform.PC],
        link : "https://itch.io/embed/2586073?bg_color=181a1c&fg_color=ffffff&border_color=3a3f42&link_color=852a40",
        isItchio : true,
        company : "ISART Digital",
        date : {
            fr : "[Janv. 2024 - Mars. 2024]",
            en : "[Jan. 2024 - Mar. 2024]"
        },
        technology : ["Unity", "C#", "Git", "FMOD"],
        engine : Engine.Unity,
        extensions : null
    }
]