/*
=======================================
                Template
=======================================
{
    id : "",
    poster : "assets/images/poster/poster_.png",
    video : "",
    title : "",
    company : "ISART Digital",
    duration : "",
    technology : [],
    devlog : [],
}
*/

export const prototypes = [
    {
        id : "network_asymetric",
        poster : "poster_network.png",
        video : "https://www.youtube.com/embed/EaCudGmniyM?autoplay=1?mute=1",
        title : "Prototype : Multiplayer Game",
        position : "Gameplay programmer",
        company : "ISART Digital",
        duration : {
            fr : "4 semaines",
            en : "4 weeks"
        },
        technology : ["Unreal", "C++", "Blueprint", "Git"],
        devlog : [
            {
                fr : `Première expérience de la programmation en réseau avec ce nouveau prototype. J'ai eu l'occasion d'apprendre énormément sur le système de replication d'Unreal Engine 5 
                en mettant en place une démo d'une expérience en coop asymétrique en ligne, chaque joueur contrôlant une entité avec des capacités différentes !`,
                en : `Created my first prototype to learn the fundamentals of network programming in Unreal Engine 5. 
                Developed a small sandbox for an asymmetrical co-op game in which each player controls a different character with unique abilities.`
            },
            {
                fr : `Pour ce faire j'ai aussi eu l'occasion d'utiliser le GAS (<b>G</b>ameplay <b>A</b>bility <b>S</b>ystem) d'Unreal afin de programmer les différentes aptitudes des personnages.
                Le code reposant sur une architecture bas niveau en  C++ pour la programmation des capacités, de la physique des personnages et de la base réseau et
                haut niveau en Blueprint pour l'implémentation de la juiciness, le paramétrage du gamefeel et la programmation système annexe (interactions avec l'environnement...)`,
                en : `Used the <b>G</b>ameplay <b>A</b>bility <b>S</b>ystem (GAS) to develop the game's different abilities. Implemented the core systems in C++, including abilities, physics, and networking. 
                Used Blueprints for fine-tuning gameplay and designing levels, as well as creating small environmental props that react to player actions and abilities.`
            },
            {
                fr : `Un challenge très fun d'apprentissage du réseau par le gameplay asymétrique !`,
                en : `A small challenge to explore asymmetrical gameplay design and network programming !`
            }
        ],
    },
    {
        id : "vr",
        poster : "poster_vr.png",
        video : "https://www.youtube.com/embed/mm_oAapZHq4?autoplay=1?mute=1",
        title : "Prototype : VR Game",
        position : "Gameplay programmer",
        company : "ISART Digital",
        duration : {
            fr : "1 semaine",
            en : "1 week"
        },
        technology : ["Unreal", "Blueprint", "Perforce"],
        devlog : [
            {
                fr : `Découverte de la conception de jeu en VR avec Unreal Engine 5, avec une expérimentation sur la manipulation de canne à pêche en utilisant des schemes (c-à-d
                l'utilisation de la canne à pêche basée sur le mimétisme de la vie réelle.) 
                J'ai donc programmé le mouvement du moulinet qui suit le tracking de la main de l'utilisateur (position / rotation du moulinet) ainsi que le lancer de la ligne.
                Le tout dans l'objectif d'offrir une manipulation de la canne à pêche qui colle le plus au réel.`,
                en : `Developed a VR prototype in Unreal Engine 5, experimenting with motion-based interactions to simulate realistic fishing rod handling. 
                Programmed hand-tracking mechanics for the fishing reel, tracking its position and rotation, as well as the fishing line rendering when swinging the rod.`
            }
        ],
    },
    {
        id : "stealth",
        poster : "poster_infiltration.png",
        video : "https://www.youtube.com/embed/iajqfj5Xid0?autoplay=1?mute=1",
        title : "Prototype : Stealth Game",
        position : "Gameplay programmer & Level designer",
        company : "ISART Digital",
        duration : {
            fr : "4 semaines",
            en : "4 weeks"
        },
        technology : ["Unreal", "Blueprint", "Perforce"],
        devlog : [
            {
                fr : `Apprentissage de la conception et programmation de comportements d'IA (inspection, poursuite, recherche active...) en utilisant le <b>behaviour tree</b> d'Unreal Engine 5
                et découverte du <b>système de perception</b> (AIPerception) pour l'exploitation de la vision, du son et de la détection de proximité`,
                en : `Learned the fundamentals of AI programming in Unreal Engine 5 using <b>Behavior Trees</b>. Implemented inspection, chase, and search behaviors. 
                For example, if a player escapes an AI's line of sight by hiding inside a chest, the AI will investigate it. 
                I also learned how to use the <b>AI Perception System</b> (AIPerception) to implement sight-based, sound-based, and proximity-based detection.`
            }
        ],
    },
    {
        id : "rush",
        poster : "poster_rush.png",
        video : "https://www.youtube.com/embed/AcFByqQZRoQ?autoplay=1?mute=1",
        title : "Prototype : RUSH Game",
        position : "Gameplay programmer & Level designer",
        company : "ISART Digital",
        duration : {
            fr : "4 semaines",
            en : "4 weeks"
        },
        technology : ["Unity", "C#", "Git"],
        devlog : [
            {
                fr : `Reproduction du jeu RUSH dans le cadre d'un TP, mise en application des principes mathématiques (quaternion, prod. scalaire) pour le déplacement et les animations des cubes.
                Ainsi que l'apprentissage de Unity 3D avec prototypage de la création de niveaux et implémentation de la juiciness (système de particules).`,
                en : `As a practical exercise, I recreated the game RUSH to practice fundamental mathematical concepts such as quaternions and dot products. The cube's movement and animations are entirely math-driven. 
                I also designed several levels with varying difficulty and polished the game feel to make the prototype more visually appealing and satisfying.`
            }
        ],
    },
    {
        id : "sokoban",
        poster : "poster_sokoban.png",
        video : "https://www.youtube.com/embed/4sRhuwF6fTk?autoplay=1?mute=1",
        title : "Prototype : Sokoban",
        position : "Gameplay programmer & Level designer",
        company : "ISART Digital",
        duration : {
            fr : "8 semaines",
            en : "8 weeks"
        },
        technology : ["Godot", "C#", "Git"],
        devlog : [
            {
                fr : `Création d'un prototype de sokoban et du tooling sur Godot, en mettant en place un générateur de niveau basé sur un fichier json traduit en bloc de level design
                par un algorithme de génération de niveau.`,
                en : `Developed a Sokoban prototype and supporting tools in Godot. Created an algorithm to read JSON files containing level layouts and generate the corresponding levels.`
            }
        ],
    },
    {
        id : "shmup",
        poster : "poster_shmup.png",
        video : "https://www.youtube.com/embed/sBp6DcGS9hQ?autoplay=1?mute=1",
        title : "Prototype : Shmup",
        position : "Gameplay programmer & Level designer",
        company : "ISART Digital",
        duration : {
            fr : "4 semaines",
            en : "4 weeks"
        },
        technology : ["Godot", "C#", "Git"],
        devlog : [
            {
                fr : `Premier prototype de découverte de Godot, avec la mise en place de collisions custom et la création de mécanique de jeu simple pour un shoot'em up en 2D.
                Programmation de patterns pour les obstacles et découverte du système de parallaxe.`,
                en : `My first prototype, developed to explore Godot, was a 2D shoot ’em up set in Paris. I implemented custom collision detection and designed the game's mechanics. 
                I also programmed the obstacle patterns and parallax scrolling.`
            }
        ],
    }
]