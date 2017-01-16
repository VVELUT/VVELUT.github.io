angular.module('app').constant('dice', [
    {
        id:1,
        name: "Envoutement",
        icons: "%PE% %CE%",
        effect: "%S% 1%PE% : Placez le dé utilisé pour activer ce pouvoir sur une unité ciblée que vous contrôlez. Tant que ce dé est sur cette unité, ajoutez 1 à sa valeur d'attaque et ses PV. Vos dés placés ainsi vont dans votre réserve inactive à la fin de la manche."
    },
    {
        id:2,
        name: "Illusion",
        icons: "%PI% %CI%",
        effect: "%S% 1%PI% : Choisissez 1 dé de la réserve active d'un adversaire et déplacez-le dans sa réserve inactive."
    },
    {
        id:3,
        name: "Nature",
        icons: "%PN% %CN%",
        effect: "%S% 1%PN% : Infligez 1 dégât à une unité ciblée."
    },
    {
        id:4,
        name: "Rituel",
        icons: "%PR% %CR%",
        effect: "%S% 1%PR% : Consultez votre défausse pour y prendre un allié et ajoutez-le à votre main. Infligez à votre Héritier autant de dégâts que la valeur de cet allié."
    }
]);