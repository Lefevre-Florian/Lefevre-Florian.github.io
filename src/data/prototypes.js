/*
=======================================
                Template
=======================================
{
    id : "",
    link : "",
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
        link : "",
        poster : "poster_network.png",
        video : "https://www.youtube.com/embed/EaCudGmniyM?autoplay=1?mute=1",
        title : "Gameplay programmer - Prototype : Multiplayer Game",
        company : "ISART Digital",
        duration : "4 semaines",
        technology : ["Unreal", "C++", "Blueprint", "Git"],
        devlog : [
            `Première expérience de la programmation en réseau avec ce nouveau prototype. J'ai eu l'occasion d'apprendre énormément sur le système de replication d'Unreal Engine 5 
            en mettant en place une démo d'une expérience en coop asymétrique en ligne, chaque joueur contrôlant une entité avec des capacités différentes !`,
            `Pour ce faire j'ai aussi eu l'occasion d'utiliser le GAS (<b>G</b>ameplay <b>A</b>bility <b>S</b>ystem) d'Unreal afin de programmer les différentes aptitudes des personnages.
            Le code reposant sur une architecture bas niveau en  C++ pour la programmation des capacités, de la physique des personnages et de la base réseau et
            haut niveau en Blueprint pour l'implémentation de la juiciness, le paramétrage du gamefeel et la programmation système annexe (interactions avec l'environnement...)`,
            `Un challenge très fun d'apprentissage du réseau par le gameplay asymétrique !`
        ],
    },
    {
        id : "vr",
        link : "",
        poster : "poster_vr.png",
        video : "https://www.youtube.com/embed/mm_oAapZHq4?autoplay=1?mute=1",
        title : "Gameplay programmer - Prototype : VR Game",
        company : "ISART Digital",
        duration : "1 semaine",
        technology : ["Unreal", "Blueprint", "Perforce"],
        devlog : [
            `Découverte de la conception de jeu en VR avec Unreal Engine 5, avec une expérimentation sur la manipulation de canne à pêche en utilisant des schemes (c-à-d
            l'utilisation de la canne à pêche basée sur le mimétisme de la vie réelle.)
            J'ai donc programmé le mouvement du moulinet qui suit le tracking de la main de l'utilisateur (position / rotation du moulinet) ainsi que le lancer de la ligne.
            Le tout dans l'objectif d'offrir une manipulation de la canne à pêche qui colle le plus au réel.`
        ],
    },
    {
        id : "stealth",
        link : "",
        poster : "poster_infiltration.png",
        video : "https://www.youtube.com/embed/iajqfj5Xid0?autoplay=1?mute=1",
        title : "Gameplay programmer & Level designer - Prototype : Stealth Game",
        company : "ISART Digital",
        duration : "4 semaines",
        technology : ["Unreal", "Blueprint", "Perforce"],
        devlog : [
            `Apprentissage de la conception et programmation de comportements d'IA (inspection, poursuite, recherche active...) en utilisant le <b>behaviour tree</b> d'Unreal Engine 5
            et découverte du <b>système de perception</b> (AIPerception) pour l'exploitation de la vision, du son et de la détection de proximité`
        ],
    },
    {
        id : "rush",
        link : "",
        poster : "poster_rush.png",
        video : "https://www.youtube.com/embed/AcFByqQZRoQ?autoplay=1?mute=1",
        title : "Gameplay programmer & Level designer - Prototype : RUSH Game",
        company : "ISART Digital",
        duration : "4 semaines",
        technology : ["Unity", "C#", "Git"],
        devlog : [
            `Reproduction du jeu RUSH dans le cadre d'un TP, mise en application des principes mathématiques (quaternion, prod. scalaire) pour le déplacement et les animations des cubes.
            Ainsi que l'apprentissage de Unity 3D avec prototypage de la création de niveaux et implémentation de la juiciness (système de particules).`
        ],
    },
    {
        id : "sokoban",
        link : "",
        poster : "poster_sokoban.png",
        video : "https://www.youtube.com/embed/4sRhuwF6fTk?autoplay=1?mute=1",
        title : "Gameplay programmer & Level designer - Prototype : Sokoban",
        company : "ISART Digital",
        duration : "8 semaines",
        technology : ["Godot", "C#", "Git"],
        devlog : [
            `Création d'un prototype de sokoban et du tooling sur Godot, en mettant en place un générateur de niveau basé sur un fichier json traduit en bloc de level design
            par un algorithme de génération de niveau.`
        ],
    },
    {
        id : "shmup",
        link : "",
        poster : "poster_shmup.png",
        video : "https://www.youtube.com/embed/sBp6DcGS9hQ?autoplay=1?mute=1",
        title : "Gameplay programmer & Level designer - Prototype : Shmup",
        company : "ISART Digital",
        duration : "4 semaines",
        technology : ["Godot", "C#", "Git"],
        devlog : [
            `Premier prototype de découverte de Godot, avec la mise en place de collisions custom et la création de mécanique de jeu simple pour un shoot'em up en 2D.
            Programmation de patterns pour les obstacles et découverte du système de parallaxe.`
        ],
    }
]