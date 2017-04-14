angular.module('app').constant('dice', [{
    "id": 1,
    "name": "Envoutement",
    "icons": "%PE% %CE%",
    "effect": "%S% 1%PE% : Placez le dé utilisé pour activer ce pouvoir sur une unité ciblée que vous contrôlez. Tant que ce dé est sur cette unité, ajoutez 1 à sa valeur d'attaque et ses PV. Vos dés placés ainsi vont dans votre réserve inactive à la fin de la manche."
}, {
    "id": 2,
    "name": "Illusion",
    "icons": "%PI% %CI%",
    "effect": "%S% 1%PI% : Choisissez 1 dé de la réserve active d'un adversaire et déplacez-le dans sa réserve inactive."
}, {
    "id": 3,
    "name": "Nature",
    "icons": "%PN% %CN%",
    "effect": "%S% 1%PN% : Infligez 1 dégât à une unité ciblée."
}, {
    "id": 4,
    "name": "Rituel",
    "icons": "%PR% %CR%",
    "effect": "%S% 1%PR% : Consultez votre défausse pour y prendre un allié et ajoutez-le à votre main. Infligez à votre Héritier autant de dégâts que la valeur de cet allié."
}, {
    "id": 5,
    "name": "Divine",
    "icons": "%PD% %CD%",
    "effect": "%S% 1%PD% : Place the die used to cast this ability on a target unit. When the unit this die has been placed on would receive damage, you may place this die in your exhausted pool to prevent up to 2 damage to that unit. If this die is still on a unit at the beginning of your next turn, place it in your exhausted pool."
}, {
    "id": 6,
    "name": "Sympathy",
    "icons": "%PS% %CS%",
    "effect": "%S% 1%PS% : Draw 1 card, then place 1 card from your hand on the top or bottom of your draw pile."
}]);
