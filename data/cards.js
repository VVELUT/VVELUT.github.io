angular.module('app').constant('cards', [{
    "id": -3,
    "name": "Chevalier de Quarayon",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 3%B%",
    "effects": [{
        "type": "InEp",
        "effect": "Endurance : Retirez tous les jetons Épuisement de cette unité à la fin de chaque manche."
    }],
    "attack": 3,
    "life": 3,
    "recover": 3,
    "linkedPbId": -3,
    "linkedPbName": "Dimona Odinstar",
    "tags": [8, 15, 37, 43],
    "costs": {
        "playCost": {
            "P": 1,
            "B": 3
        }
    }
}, {
    "id": -2,
    "name": "Gobi sunshield",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 4%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Alert: Do not place an exhaustion token on this unit as a result of its countering."
    }],
    "attack": 2,
    "life": 5,
    "recover": 3,
    "linkedPbId": -2,
    "linkedPbName": "Gobi sunshield",
    "tags": [8, 15, 37, 43],
    "costs": {
        "playCost": {
            "P": 1,
            "B": 4
        }
    }
}, {
    "id": -1,
    "name": "Rafale du phénix",
    "type": "Sort d'action",
    "placement": "Arène",
    "cost": "%P% 3%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Infligez 4 dégâts à une unité ciblée.<br/>Infligez 2 dégâts à un Héritier ciblé."
    }],
    "linkedPbId": -1,
    "linkedPbName": "Lulu Primeroc",
    "tags": [4, 15, 19, 20, 21, 23, 43],
    "costs": {
        "playCost": {
            "P": 1,
            "B": 3
        }
    }
}, {
    "id": 1,
    "name": "Invoquer Rhinofèros",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%CN%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 6%B% : Placez une invocation Rhinofèros dans votre arène.<br/>Concentration 1 : Réduisez le cout d'activation de ce sort de 1%B%.<br/>Concentration 2 : Réduisez le cout d'activation de ce sort de 1%B% de plus."
    }],
    "invocation": {
        "name": "Rhinofèros",
        "type": "Invocation",
        "placement": "Arène",
        "attack": 5,
        "life": 4,
        "recover": 0,
        "number": 5
    },
    "tags": [1, 2, 3, 11, 13, 16, 18],
    "costs": {
        "playCost": {
            "P": 1,
            "CN": 1
        },
        "effectCost": {
            "P": 1,
            "B": 6
        }
    }
}, {
    "id": 2,
    "name": "Chant vengeur",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%CR%",
    "effects": [{
        "type": "Ep",
        "effect": "Lorsqu'une unité que vous controlez est détruite, vous pouvez placer 1 jeton Épuisement sur ce sort pour infliger 1 dégât à une unité ou un Héritier ciblé."
    }],
    "tags": [3, 12, 16, 13, 19, 20, 21, 23, 24],
    "costs": {
        "playCost": {
            "P": 1,
            "CR": 1
        }
    }
}, {
    "id": 3,
    "name": "Armure hérissée",
    "type": "Sort d'altération",
    "placement": "Unité",
    "cost": "%P% 1%CN% 1%B%",
    "effects": [{
        "type": "InEp",
        "effect": "Désormais, cette unité a cette capacité : Peau hérissée 2 : Si cette unité subit des dégâts de l'attaque ou la contrattaque d'une ou plusieurs unités, infligez simultanément 2 dégâts à chacune de ces unités attaquant ou contrattaquant."
    }],
    "life": "+2",
    "tags": [5, 6, 11, 13, 16, 23, 25],
    "costs": {
        "playCost": {
            "P": 1,
            "CN": 1,
            "B": 1
        }
    }
}, {
    "id": 4,
    "name": "Gardien",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%CN% 1%CR%",
    "effects": [{
        "type": "InEp",
        "effect": "Lorsque ce sort entre en jeu placez 3 jetons État dessus. Défaussez ce sort lorsqu'il n'y a plus de jetons État dessus."
    }, {
        "type": "Ep",
        "effect": "Lorsqu'une unité que vous contrôlez subirait des dégâts, retirez de ce sort autant de jetons État que vous voulez. Empêchez 1 dégât à cette unité pour chaque jeton retiré."
    }],
    "tags": [3, 11, 12, 13, 17, 27],
    "costs": {
        "playCost": {
            "P": 1,
            "CN": 1,
            "CR": 1
        }
    }
}, {
    "id": 5,
    "name": "Cent lames",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 2%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Infligez 1 dégât à un Héritier ciblé. Infligez 1 dégât à toutes les unités adverses. Piochez 1 carte."
    }],
    "linkedPbId": 1,
    "linkedPbName": "Forge Roarkwin",
    "tags": [4, 13, 15, 19, 20, 21, 23, 29, 43],
    "costs": {
        "playCost": {
            "P": 1,
            "B": 2
        }
    }
}, {
    "id": 6,
    "name": "Renforcer",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%CN% 1%CR%",
    "effects": [{
        "type": "Ep",
        "effect": "%S% %E% : Ajoutez 2 à la valeur d'attaque de l'unité ciblée jusqu'à la fin du tour.<br/>Concentration 2 : Ajoutez 1 de plus à la valeur d'attaque de l'unité ciblée jusqu'à la fin du tour."
    }],
    "tags": [3, 11, 12, 13, 14, 17, 18, 26],
    "costs": {
        "playCost": {
            "P": 1,
            "CN": 1,
            "CR": 1
        },
        "effectCost": {
            "S": 1
        }
    }
}, {
    "id": 7,
    "name": "Expansion d'énergie",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%PR%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% : Relancez 1 dé au choix de votre réserve inactive puis placez-le dans votre réserve active."
    }],
    "tags": [3, 12, 13, 16, 31, 32, 33],
    "costs": {
        "playCost": {
            "P": 1,
            "PR": 1
        },
        "effectCost": {
            "P": 1
        }
    }
}, {
    "id": 8,
    "name": "Marteleuse",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%PR% 1%CN% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Contrecoup 1 : Lorsque cette unité inflige des dégâts en attaquant ou en contrattaquant, vous pouvez placer 1 blessure sur une unité ciblée."
    }],
    "attack": 4,
    "life": 3,
    "recover": 1,
    "tags": [8, 11, 12, 13, 17, 19, 21, 22],
    "costs": {
        "playCost": {
            "P": 1,
            "PR": 1,
            "CN": 1,
            "B": 1
        }
    }
}, {
    "id": 9,
    "name": "Forgeron",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 2%B%",
    "effects": [{
        "type": "InEp",
        "effect": "Ingénieux 1: Lorsque cette unité entre en jeu, placez 1 jeton État dessus. Au début de chaque phase Tours des joueurs, placez 1 jeton État sur cette unité.<br/>Heures supplémentaires: Durant votre tour, vous pouvez retirer autant de jetons État de cette unité que vous voulez. Pour chaque jeton État retiré, vous pouvez faire 1 action secondaire (%S%) ce tour-ci."
    }],
    "attack": 2,
    "life": 2,
    "recover": 1,
    "tags": [8, 13, 14, 15, 35, 36],
    "costs": {
        "playCost": {
            "P": 1,
            "B": 2
        }
    }
}, {
    "id": 10,
    "name": "Ancrenaute",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Lancer 1 : Durant votre tour, vous pouvez placer 1 jeton Épuisement sur cette unité pour infliger 1 dégât à une unité ciblée."
    }],
    "attack": 0,
    "life": 1,
    "recover": 1,
    "tags": [8, 13, 15, 19, 21, 23],
    "costs": {
        "playCost": {
            "P": 1,
            "B": 1
        }
    }
}, {
    "id": 11,
    "name": "Mémoire parfaite",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 1%CE% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Vous pouvez chercher dans votre pioche pour trouver 1 carte que vous ajoutez à votre main. Dans ce cas, mélangez votre pioche."
    }],
    "tags": [4, 9, 13, 16, 29, 30],
    "costs": {
        "playCost": {
            "P": 1,
            "CE": 1,
            "B": 1
        }
    }
}, {
    "id": 12,
    "name": "Rafraichir",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 1%CE% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Retirez tous les jetons Épuisement d'une unité ciblée."
    }],
    "tags": [4, 9, 13, 16, 37],
    "costs": {
        "playCost": {
            "P": 1,
            "CE": 1,
            "B": 1
        }
    }
}, {
    "id": 13,
    "name": "Transfert",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 1%CE% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Déplacez 1 jeton (Blessure, État, Épuisement) d'une carte non-Héritier d'un joueur ciblé sur une autre carte non-Héritier que ce joueur contrôle."
    }],
    "tags": [4, 9, 13, 16, 22, 35, 37, 38, 39],
    "costs": {
        "playCost": {
            "P": 1,
            "CE": 1,
            "B": 1
        }
    }
}, {
    "id": 14,
    "name": "Voile doré",
    "type": "Sort réactif",
    "placement": "Défausse",
    "cost": "1%CN% 1%CE%",
    "effects": [{
        "type": "Ep",
        "effect": "Vous pouvez jouer ce sort lorsqu'un joueur utilise un sort, une capacité ou un pouvoir de dé qui cible une unité que vous contrôlez. Annulez l'effet du sort, de la capacité ou du pouvoir de dé."
    }],
    "tags": [7, 9, 11, 17, 40],
    "costs": {
        "playCost": {
            "CN": 1,
            "CE": 1
        }
    }
}, {
    "id": 15,
    "name": "Invoquer Serpent argenté",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 1%PE% 1%PN% : Placez une invocation Serpent argenté dans votre arène.<br/>Concentration 1 : Placez 1 jeton État sur ce Serpent argenté.<br/>Concentration 2 : Placez 1 jeton État de plus sur ce Serpent argenté."
    }, {
        "type": "InEp",
        "effect": "Sort protégé : Ce sort ne peut être affecté par le sort d'un adversaire."
    }],
    "invocation": {
        "name": "Serpent argenté",
        "type": "Invocation",
        "placement": "Arène",
        "attack": "X",
        "life": 4,
        "recover": 3,
        "number": 3,
        "effects": [{
            "type": "InEp",
            "effect": "Consommer : Lorsqu'une unité qu'un adversaire contrôle est détruite par un sort, une attaque ou une contrattaque, une capacité ou un pouvoir de dé que vous contrôlez, placez 1 jeton État sur cette unité. Si l'unité détruite est un allié, retirez la du jeu.<br/>X = le nombre de jetons État sur cette unité."
        }]
    },
    "linkedPbId": 2,
    "linkedPbName": "Méoni Vipère",
    "tags": [1, 2, 3, 9, 11, 13, 17, 18, 24, 35, 41, 43, 46],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "PE": 1,
            "PN": 1
        }
    }
}, {
    "id": 16,
    "name": "Or fondu",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 2%PN%",
    "effects": [{
        "type": "Ep",
        "effect": "Placez 3 blessures sur une unité ou un Héritier ciblé."
    }],
    "tags": [4, 11, 13, 16, 19, 20, 21, 22],
    "costs": {
        "playCost": {
            "P": 1,
            "PN": 2
        }
    }
}, {
    "id": 17,
    "name": "Appel aux royaumes",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "Tournez jusqu'à 3 dés de votre réserve active, chacun sur la face de votre choix."
    }],
    "tags": [4, 15, 31, 34],
    "costs": {
        "playCost": {
            "P": 1
        }
    }
}, {
    "id": 18,
    "name": "Invoquer Doreur",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%CE%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 1%CN% Placez une invocation Doreur dans votre arène. Vous pouvez infliger 1 dégât à une unité ciblée."
    }],
    "invocation": {
        "name": "Doreur",
        "type": "Invocation",
        "placement": "Arène",
        "attack": 1,
        "life": 2,
        "recover": 0,
        "number": 5,
        "effects": [{
            "type": "Ep",
            "effect": "Protecteur d'unité : Cette unité peut protéger une unité qui se fait attaquer."
        }, {
            "type": "InEp",
            "effect": "Héritage 1 : Lorsque cette unité est détruite, vous pouvez placer 1 jeton État sur une unité ciblée."
        }]
    },
    "tags": [1, 2, 3, 9, 11, 13, 17, 19, 21, 23, 24, 27, 28, 35, 51],
    "costs": {
        "playCost": {
            "P": 1,
            "CE": 1
        },
        "effectCost": {
            "P": 1,
            "CN": 1
        }
    }
}, {
    "id": 19,
    "name": "Don de pouvoir",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 2%CN%",
    "effects": [{
        "type": "Ep",
        "effect": "Après qu'un joueur ait déclaré ses attaquants, vous pouvez payer 1%B% et placer 1 jeton Épuisement sur ce sort. Dans ce cas, ajoutez 1 à la valeur d'attaque d'une unité ciblé pour le reste du tour.<br/>Vous pouvez piocher 1 carte. Dans ce cas, défaussez 1 carte de votre main.<br/>Concentration 1 : Vous pouvez choisir un dé de votre réserve inactive, le relancer puis le placer dans votre réserve active."
    }],
    "tags": [3, 11, 13, 16, 18, 26, 29, 31, 32, 33],
    "costs": {
        "playCost": {
            "P": 1,
            "CN": 2
        },
        "effectCost": {
            "B": 1
        }
    }
}, {
    "id": 20,
    "name": "Hypnotiser",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%S% %E% 2%CE% : Choisissez une unité ciblée que vous contrôlez. Elle acquiert la capacité suivante jusqu'à la fin du tour.<br/>Contournement : Lorsque cette unité attaque, son attaque ne peut être bloquée ou protégée."
    }],
    "tags": [3, 9, 13, 14, 16, 42],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "S": 1,
            "CE": 2
        }
    }
}, {
    "id": 21,
    "name": "Brume changeante",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%CI%",
    "effects": [{
        "type": "Ep",
        "effect": "%S% %E% : Tournez jusqu'à 2 dés de votre réserve active, chacun sur la face de votre choix."
    }],
    "tags": [3, 10, 13, 14, 16, 31, 34],
    "costs": {
        "playCost": {
            "P": 1,
            "CI": 1
        },
        "effectCost": {
            "S": 1
        }
    }
}, {
    "id": 22,
    "name": "Invoquer Esprit de la brume",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 1%CI% : Placez une invocation Esprit de la brume dans votre arène. Vous pouvez payer en plus 1%B% lorsque vous activez ce sort pour placer une invocation Esprit de la brume de plus dans votre arène."
    }],
    "invocation": {
        "name": "Esprit de la brume",
        "type": "Invocation",
        "placement": "Arène",
        "attack": 1,
        "life": 1,
        "recover": 0,
        "number": 10
    },
    "tags": [1, 2, 3, 10, 13, 16],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CI": 1,
            "B": 1
        }
    }
}, {
    "id": 23,
    "name": "Invoquer Jaguar bleu",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 2%B% : Placez une invocation Jaguar bleu dans votre arène."
    }],
    "invocation": {
        "name": "Jaguar bleu",
        "type": "Invocation",
        "placement": "Arène",
        "attack": 2,
        "life": 2,
        "recover": 0,
        "number": 5,
        "effects": [{
            "type": "Ep",
            "effect": "Regard perçant 1 : Après l'entrée en jeu d'une unité dans l'arène d'un adversaire, vous pouvez payer 1%B% pour placer 1 jeton Épuisement sur cette unité."
        }]
    },
    "linkedPbId": 3,
    "linkedPbName": "Aradèle Gaardété",
    "tags": [1, 2, 3, 13, 15, 38, 43],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "B": 2
        }
    }
}, {
    "id": 24,
    "name": "Réflexions dans l'eau",
    "type": "Sort d'altération",
    "placement": "Unité",
    "cost": "%P% 1%CI%",
    "effects": [{
        "type": "Ep",
        "effect": "Tant que ce sort est lié à cette unité, ignorez toutes les capacités de cette unité, à l'exception de ses capacités inépuisables."
    }, {
        "type": "InEp",
        "effect": "Raviver : 1%B%"
    }],
    "tags": [5, 6, 10, 13, 16, 38, 44],
    "costs": {
        "playCost": {
            "P": 1,
            "CI": 1
        }
    }
}, {
    "id": 25,
    "name": "Typhon de brume",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 1%CI% 1%CN%",
    "effects": [{
        "type": "Ep",
        "effect": "Infligez 1 dégât à toutes les unités adverses. Vous pouvez piocher 1 carte."
    }],
    "tags": [4, 10, 11, 13, 17, 19, 21, 23, 29],
    "costs": {
        "playCost": {
            "P": 1,
            "CI": 1,
            "CN": 1
        }
    }
}, {
    "id": 26,
    "name": "Sortis de la brume",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%S% 1%PI% 1%PN%",
    "effects": [{
        "type": "Ep",
        "effect": "Infligez X dégât(s) à une unité ciblée. Vous pouvez piocher 1 carte. X = le nombre d'unités que vous avez en jeu."
    }],
    "tags": [4, 10, 11, 14, 17, 19, 21, 23, 29],
    "costs": {
        "playCost": {
            "S": 1,
            "PI": 1,
            "PN": 1
        }
    }
}, {
    "id": 27,
    "name": "Armure de racines",
    "type": "Sort d'altération",
    "placement": "Unité",
    "cost": "%S% 1%CN%",
    "effects": [{
        "type": "InEp",
        "effect": "Raviver 1%B%"
    }],
    "life": "+2",
    "tags": [5, 6, 11, 14, 16, 25, 44],
    "costs": {
        "playCost": {
            "S": 1,
            "CN": 1
        }
    }
}, {
    "id": 28,
    "name": "Regard fixe",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 2%CI%",
    "effects": [{
        "type": "Ep",
        "effect": "Placez 2 jetons Épuisement sur une unité ciblée."
    }],
    "tags": [4, 10, 13, 16, 38],
    "costs": {
        "playCost": {
            "P": 1,
            "CI": 2
        }
    }
}, {
    "id": 29,
    "name": "Croissance massive",
    "type": "Sort d'altération",
    "placement": "Unité",
    "cost": "%P% 1%CN% 1%B%",
    "effects": [{
        "type": "InEp",
        "effect": "Ce sort ne peut être lié qu'à une unité dont la valeur d'attaque est de 2 ou moins.<br/>Sort protégé : Ce sort ne peut être affecté par un sort qu'un adversaire contrôle.<br/>Éphémère : Défaussez ce sort à la fin de cette manche."
    }],
    "attack": "+4",
    "life": "+4",
    "tags": [5, 6, 11, 13, 16, 25, 26, 45, 46],
    "costs": {
        "playCost": {
            "P": 1,
            "CN": 1,
            "B": 1
        }
    }
}, {
    "id": 30,
    "name": "Invoquer Papillon moine",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 1%PN% : Placez une invocation Papillon moine dans votre arène."
    }],
    "invocation": {
        "name": "Papillon moine",
        "type": "Invocation",
        "placement": "Arène",
        "attack": 1,
        "life": "X",
        "recover": 1,
        "number": 5,
        "effects": [{
            "type": "Ep",
            "effect": "Protecteur d'unité : Cette unité peut protéger une unité qui se fait attaquer."
        }, {
            "type": "InEp",
            "effect": "Ultime bénédiction 1 : Lorsque cette unité est détruite, retirez 1 blessure d'une unité ou Héritier ciblé.<br/>X = nombre de sorts Invoquer Papillon moine dans votre grimoire."
        }]
    },
    "tags": [1, 2, 3, 11, 13, 16, 18, 24, 27, 28, 39, 51],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "PN": 1
        }
    }
}, {
    "id": 31,
    "name": "Purger",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 1%CE% : Choisissez un joueur ciblé qui doit défausser 1 carte du dessus de sa pioche.<br/>Concentration 1 :Vous pouvez payer 1%B% pour que le joueur ciblé défausse 1 carte de plus."
    }],
    "tags": [3, 9, 13, 16, 18, 47],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CE": 1
        }
    }
}, {
    "id": 32,
    "name": "Abondance",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%CI%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% : Tous les joueurs peuvent piocher jusqu'à 2 cartes. Pour chaque carte qu'un joueur ne veut ou ne peut piocher, infligez 1 dégât à son Héritier.<br/>Concentration 1 : Réduisez de 1 les dégâts que votre Héritier subit à cause de ce sort.<br/>Concentration 2 : Réduisez de 1 de plus les dégâts que votre Héritier subit à cause de ce sort."
    }],
    "tags": [3, 10, 13, 16, 18, 19, 20, 23, 29, 47],
    "costs": {
        "playCost": {
            "P": 1,
            "CI": 1
        },
        "effectCost": {
            "P": 1
        }
    }
}, {
    "id": 33,
    "name": "Invoquer Chouette à trois yeux",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 1%CE% : Placez une invocation Chouette à trois yeux dans votre arène."
    }],
    "invocation": {
        "name": "Chouette à trois yeux",
        "type": "Invocation",
        "placement": "Arène",
        "attack": 1,
        "life": 2,
        "recover": 0,
        "number": 5,
        "effects": [{
            "type": "Ep",
            "effect": "Drain de mémoire 1 : %P% %E% : Choissiez un joueur ciblé qui doit défausser 1 carte de son choix de sa main."
        }]
    },
    "tags": [1, 2, 3, 9, 13, 16, 47, 48],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CE": 1
        }
    }
}, {
    "id": 34,
    "name": "Invoquer Corbeau marin",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 3%B% : Placez une invocation Corbeau marin dans votre arène."
    }],
    "invocation": {
        "name": "Corbeau marin",
        "type": "Invocation",
        "placement": "Arène",
        "attack": 3,
        "life": 2,
        "recover": 0,
        "number": 2,
        "effects": [{
            "type": "Ep",
            "effect": "Avantage au combat : Lorsque cette unité combat, elle inflige ses dégâts avant que les autres unités sans Avantage au combat n'infligent les leurs."
        }, {
            "type": "InEp",
            "effect": "Protection magique : Cette unité ne peut être affectée par un sort qu'un adversaire contrôle."
        }]
    },
    "linkedPbId": 4,
    "linkedPbName": "Saria Guidemane",
    "tags": [1, 2, 3, 13, 15, 27, 43, 49, 50],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "B": 3
        }
    }
}, {
    "id": 35,
    "name": "Pouvoir dissimulé",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 1%CI%",
    "effects": [{
        "type": "Ep",
        "effect": "Choisissez jusqu'à 2 dés de votre réserve inactive et placez-les dans votre réserve active, chacun sur la face de votre choix."
    }],
    "tags": [4, 10, 13, 16, 31, 32, 34],
    "costs": {
        "playCost": {
            "P": 1,
            "CI": 1
        }
    }
}, {
    "id": 36,
    "name": "Sceau",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 1%CE% 1%CI%",
    "effects": [{
        "type": "Ep",
        "effect": "Choisissez un sort préparatoire dans le grimoire d'un joueur ciblé. Placez 1 jeton Épuisement sur le sort choisit ainsi que chaque autre exemplaire de ce sort dans le grimoire de ce joueur."
    }],
    "tags": [4, 9, 10, 13, 17, 38],
    "costs": {
        "playCost": {
            "P": 1,
            "CE": 1,
            "CI": 1
        }
    }
}, {
    "id": 37,
    "name": "Clone étrange",
    "type": "Sort d'action",
    "placement": "Arène",
    "cost": "%P% 2%CI%",
    "effects": [{
        "type": "InEp",
        "effect": "Lorsque vous placez ce sort dans votre arène choisissez une unité qu'un adversaire contrôle. Placez sur ce sort autant de jetons État que la valeur d'attaque de l'unité choisie. Ce sort est aussi considéré comme un allié dont les valeurs d'attaque et de PV égalent au nombre de jetons État présents dessus, et dont la valeur de regain est de 0. Aucun sort d'altération ne peut être lié à ce sort.<br/>Éphémère : Défaussez ce sort à la fin de cette manche."
    }],
    "tags": [4, 8, 10, 13, 16, 35, 45],
    "costs": {
        "playCost": {
            "P": 1,
            "CI": 2
        }
    }
}, {
    "id": 38,
    "name": "Douleur partagée",
    "type": "Sort réactif",
    "placement": "Défausse",
    "cost": "2%CE%",
    "effects": [{
        "type": "Ep",
        "effect": "Vous pouvez jouer ce sort après que votre Héritier ait subi des dégâts. Infligez 3 dégâts à une unité ou un Héritier ciblé."
    }],
    "tags": [7, 9, 16, 19, 20, 21, 23],
    "costs": {
        "playCost": {
            "CE": 2
        }
    }
}, {
    "id": 39,
    "name": "Danseuse de flammes roses",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%CI% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Distraction : %S%%E% : Placez 1 jeton Épuisement sur une unité ciblée."
    }],
    "attack": 3,
    "life": 1,
    "recover": 0,
    "tags": [8, 10, 13, 14, 16, 38],
    "costs": {
        "playCost": {
            "P": 1,
            "CI": 1,
            "B": 1
        },
        "effectCost": {
            "S": 1
        }
    }
}, {
    "id": 40,
    "name": "Violoniste enchantée",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Chanson du chagrin : Après qu'un adversaire ait défaussé 1 carte ou plus de sa pioche, vous pouvez payer 1%B% pour placer 1 blessure sur une unité ciblée."
    }],
    "attack": 1,
    "life": 2,
    "recover": 0,
    "tags": [8, 13, 15, 19, 21, 22, 47],
    "costs": {
        "playCost": {
            "P": 1,
            "B": 1
        }
    }
}, {
    "id": 41,
    "name": "Peur",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "Choisissez une cible qu'un adversaire contrôle. Si c'est une invocation, remettez la dans la pile d'invocation, remettez-la dans la pile d'invocations de son propriétaire. Autrement, son propriétaire la reprend en main."
    }],
    "linkedPbId": 5,
    "linkedPbName": "Jessa Na Ni",
    "tags": [4, 13, 15, 43],
    "costs": {
        "playCost": {
            "P": 1
        }
    }
}, {
    "id": 42,
    "name": "Transfert de sang",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%S% %E% 1%CE% 1%CR% : Infligez 2 dégâts à une unité ciblée que vous contrôlez. Dans ce cas, vous pouvez retirer 2 blessures d'une autre unité que vous contrôlez ou 1 blessure de votre Héritier."
    }],
    "tags": [3, 9, 12, 13, 14, 17, 39, 52],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "S": 1,
            "CE": 1,
            "CR": 1
        }
    }
}, {
    "id": 43,
    "name": "Invoquer Poupée de sang",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 1%CR% :Placez une invocation Poupée de sang dans l'arène d'un joueur ciblé."
    }],
    "invocation": {
        "name": "Poupée de sang",
        "type": "Invocation",
        "placement": "Arène",
        "attack": 0,
        "life": 2,
        "recover": 0,
        "number": 5,
        "effects": [{
            "type": "Ep",
            "effect": "Maudit 1 : à la fin de chaque manche, placez 1 blessure sur votre Héritier.<br/>Automutilation 1 : %S% 1%B% : Infligez 1 dégât à cette unité."
        }]
    },
    "tags": [1, 2, 3, 12, 13, 16, 19, 20, 22],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CR": 1
        }
    }
}, {
    "id": 44,
    "name": "Couper les ficelles",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 1%CR% 1%B% : Infligez 2 dégâts à une unité que vous contrôlez. Dans ce cas, vous pouvez défausser un sort d'altération ciblé."
    }],
    "tags": [3, 12, 13, 16, 27, 52],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CR": 1,
            "B": 1
        }
    }
}, {
    "id": 45,
    "name": "Cœur éternel",
    "type": "Sort d'altération",
    "placement": "Unité",
    "cost": "%P% 1%CE% 1%B%",
    "effects": [{
        "type": "InEp",
        "effect": "Raviver : 2%B%"
    }],
    "life": "+2",
    "recover": "+2",
    "tags": [5, 6, 9, 13, 16, 25, 44, 53],
    "costs": {
        "playCost": {
            "P": 1,
            "CE": 1,
            "B": 1
        }
    }
}, {
    "id": 46,
    "name": "Redirection",
    "type": "Sort réactif",
    "placement": "Défausse",
    "cost": "1%CE%",
    "effects": [{
        "type": "Ep",
        "effect": "Vous pouvez jouer ce sort lorsque votre Héritier recevrait 1 dégât ou plus et que vous contrôlez au moins 1 unité. N'infligez pas ces dégâts à votre Héritier. Infligez-les plutôt à une unité ciblée que vous contrôlez."
    }],
    "tags": [7, 9, 16, 27, 52],
    "costs": {
        "playCost": {
            "CE": 1
        }
    }
}, {
    "id": 47,
    "name": "Dernier souffle",
    "type": "Sort réactif",
    "placement": "Défausse",
    "cost": "1%PR%",
    "effects": [{
        "type": "Ep",
        "effect": "Vous pouvez jouer ce sort lorsqu'une unité que vous contrôlez est détruite. Infligez 2 dégâts à une unité ou un Héritier ciblé."
    }],
    "tags": [7, 12, 16, 19, 20, 23, 24],
    "costs": {
        "playCost": {
            "PR": 1
        }
    }
}, {
    "id": 48,
    "name": "Archer de sang",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%CE% 1%CR% 2%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Serment de sang 2 : Lorsque vous annoncez vos attaquants, vous pouvez ajouter 2 à la valeur d'attaque de cette unité jusqu'à la fin du tour. Dans ce cas, placez 2 blessures sur cette unité.<br/>Avantage au combat : Lorsque cette unité combat, elle inflige ses dégâts avant que les autres unités sans Avantage au combat n'infligent les leurs."
    }],
    "attack": 3,
    "life": 3,
    "recover": 2,
    "tags": [8, 12, 13, 17, 26, 49, 52],
    "costs": {
        "playCost": {
            "P": 1,
            "CE": 1,
            "CR": 1,
            "B": 1
        }
    }
}, {
    "id": 49,
    "name": "Poupée vivante",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%CE% 1%CR% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Souffrance partagée : Lorsque cette unité subit des dégâts, vous pouvez payer 1%B% pour infliger X dégâts à une unité ou Héritier ciblé.<br/>X = le ou les dégâts subis ou les PV de cette unité, en choisissant la valeur la moins élevée."
    }],
    "attack": 0,
    "life": 3,
    "recover": 1,
    "tags": [8, 9, 12, 13, 17, 19, 20, 21, 23, 52],
    "costs": {
        "playCost": {
            "P": 1,
            "CE": 1,
            "CR": 1,
            "B": 1
        }
    }
}, {
    "id": 50,
    "name": "Guerrier sangsue",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 2%CR% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Drain de l'ombre 1 : Lorsque cette unité subit au moins 1 de dégât, vous pouvez choisir 1 dé dans la réserve active d'un joueur ciblé et le placer dans sa réserve inactive."
    }],
    "attack": 2,
    "life": 3,
    "recover": 3,
    "tags": [8, 12, 13, 16, 31, 52, 54],
    "costs": {
        "playCost": {
            "P": 1,
            "CR": 1,
            "B": 1
        }
    }
}, {
    "id": 51,
    "name": "Dissipation",
    "type": "Sort d'altération",
    "placement": "Unité",
    "cost": "%P% 1%CI%",
    "effects": [{
        "type": "Ep",
        "effect": "Détruisez cette unité à la fin de la manche. Si l'unité détruite est un allié, retirez-la du jeu."
    }],
    "tags": [5, 6, 10, 13, 16, 41, 55],
    "costs": {
        "playCost": {
            "P": 1,
            "CI": 1
        }
    }
}, {
    "id": 52,
    "name": "Riposte de l'ombre",
    "type": "Sort réactif",
    "placement": "Défausse",
    "cost": "1%CI% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Vous pouvez jouer ce sort après que votre Héritier ait subi des dégâts d'une attaque. Inflgez 6 dégâts à une unité ciblée que votre adversaire contrôle."
    }],
    "tags": [7, 10, 16, 19, 21, 23],
    "costs": {
        "playCost": {
            "CI": 1,
            "B": 1
        }
    }
}, {
    "id": 53,
    "name": "Au-delà de la mort",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 1%CR%",
    "effects": [{
        "type": "Ep",
        "effect": "Consultez votre défausse pour y prendre un allié et ajoutez-le à votre main."
    }],
    "tags": [4, 12, 13, 16, 56],
    "costs": {
        "playCost": {
            "P": 1,
            "CR": 1
        }
    }
}, {
    "id": 54,
    "name": "Matérialisation",
    "type": "Sort d'altération",
    "placement": "Unité",
    "cost": "%P% 2%CR%",
    "effects": [{
        "type": "InEp",
        "effect": "Ce sort ne peut être lié qu'à des unités ayant la capacité Illusion. Cette unité n'est plus considérée comme ayant la capacité Illusion.<br/>Raviver : 2%B%"
    }],
    "attack": "+2",
    "life": "+1",
    "tags": [5, 6, 12, 13, 16, 25, 26, 44, 57],
    "costs": {
        "playCost": {
            "P": 1,
            "CR": 2
        }
    }
}, {
    "id": 55,
    "name": "Tour de passepasse",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 1%PI% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Piochez 3 cartes."
    }],
    "tags": [4, 10, 13, 16, 29],
    "costs": {
        "playCost": {
            "P": 1,
            "PI": 1,
            "B": 1
        }
    }
}, {
    "id": 56,
    "name": "Invoquer Veuves dormeuses",
    "type": "Sort réactif",
    "placement": "Défausse",
    "cost": "2%CR%",
    "effects": [{
        "type": "Ep",
        "effect": "Vous pouvez jouer ce sort lorsqu'une unité que vous contrôlez est détruite.Placez jusqu'à 2 invocations Veuve dormeuse dans votre arène."
    }],
    "invocation": {
        "name": "Veuve dormeuse",
        "type": "Invocation",
        "placement": "Arène",
        "attack": 2,
        "life": 1,
        "recover": 0,
        "number": 5
    },
    "tags": [1, 2, 7, 12, 16, 24],
    "costs": {
        "playCost": {
            "CR": 2
        }
    }
}, {
    "id": 57,
    "name": "Sacrifice mineur",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 1%CR% : infligez 1 dégât à une unité ciblée que vous contrôlez. Dans ce cas, vous pouvez infliger 1 dégât à une unité ciblée qu'un adversaire contrôle.<br/>Concentration 1 : Si les deux unités ciblées non épuisées, vous pouvez placer 1 jeton Épuisement au lieu d'infliger 1 dégât sur chacune de ces deux unités."
    }],
    "tags": [3, 12, 13, 16, 18, 19, 21, 23, 38, 52],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CR": 1
        }
    }
}, {
    "id": 58,
    "name": "Invoquer Loup masqué",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%S% %E% 1%CI% 1%B% : Placez une invocation Loup masqué dans votre arène.<br/>Concentration 1 : Le cout d'activation peut être remplacé par : %S% %E% 1%PI%"
    }],
    "invocation": {
        "name": "Loup masqué",
        "type": "Invocation",
        "placement": "Arène",
        "attack": 2,
        "life": 1,
        "recover": 0,
        "number": 5
    },
    "linkedPbId": 6,
    "linkedPbName": "Noah Lunerouge",
    "tags": [1, 2, 3, 10, 13, 14, 16, 18, 43],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "S": 1,
            "CI": 1,
            "B": 1
        }
    }
}, {
    "id": 59,
    "name": "Invoquer Faux démon",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 1%CI% 1%B% : Placez une invocation Faux démon dans votre arène."
    }],
    "invocation": {
        "name": "Faux démon",
        "type": "Invocation",
        "placement": "Arène",
        "attack": 1,
        "life": 4,
        "recover": 0,
        "number": 5,
        "effects": [{
            "type": "Ep",
            "effect": "Protecteur d'unité : Cette unité peut protéger une unité qui se fait attaquer."
        }, {
            "type": "InEp",
            "effect": "Illusion : Détruisez cette unité si elle subit des dégâts de l'attaque/contrattaque d'une autre unité."
        }]
    },
    "tags": [1, 2, 3, 10, 13, 16, 27, 28, 57],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CI": 1,
            "B": 1
        }
    }
}, {
    "id": 60,
    "name": "Tireur d'élite boréalis",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%CI% 1%CR% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Embuscade 2 : Lorsque cette unité entre en jeu, vous pouvez infliger 2 dégâts à une unité ou un Héritier ciblé."
    }],
    "attack": 2,
    "life": 1,
    "recover": 1,
    "tags": [4, 10, 12, 13, 17, 19, 20, 21, 23],
    "costs": {
        "playCost": {
            "P": 1,
            "CI": 1,
            "CR": 1,
            "B": 1
        }
    }
}, {
    "id": 61,
    "name": "Chant de protection",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%B% 1%D%",
    "effects": [{
        "type": "InEp",
        "effect": "Lorsque ce sort entre en jeu, placez 3 jetons État dessus. Défaussez ce sort lorsqu'il n'y a plus de jetons État dessus."
    }, {
        "type": "Ep",
        "effect": "Lorsque votre Héritier subirait 1 dégât ou plus, retirez de ce sort autant de jetons État que vous voulez. Empêchez 1 dégât à votre Héritier pour chaque jeton retiré."
    }],
    "tags": [3, 13, 15, 27, 35, 58],
    "costs": {
        "playCost": {
            "P": 1,
            "B": 1,
            "D": 1
        }
    }
}, {
    "id": 62,
    "name": "Chant des morts",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%CR%",
    "effects": [{
        "type": "InEp",
        "effect": "Lorsqu'un allié que vous contrôlez est détruit, vous pouvez placer un jeton État sur ce sort."
    }, {
        "type": "Ep",
        "effect": "Durant votre tour, s'il y a au moins 3 jetons État sur ce sort, vous pouvez défausser ce sort pour choisir jusqu'à 3 dés de votre réserve inactive et les placer dans votre réserve active, chacun sur la face de votre choix."
    }],
    "tags": [3, 12, 13, 16, 24, 31, 32, 34, 35],
    "costs": {
        "playCost": {
            "P": 1,
            "CR": 1
        }
    }
}, {
    "id": 63,
    "name": "Invoquer Terreur spectrale",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 3%CR% : Placez une invocation Terreur spectrale dans votre arène.<br/>Concentration 2 : Vous pouvez retirer 1 jeton Épuisement d'une Terreur spectrale que vous contrôlez."
    }],
    "invocation": {
        "name": "Terreur spectrale",
        "type": "Invocation",
        "placement": "Arène",
        "effects": [{
            "type": "InEp",
            "effect": "Rage 1 : Pour chaque blessure sur cette unité, ajoutez 1 à la valeur d'attaque de cette unité."
        }],
        "attack": 1,
        "life": 6,
        "recover": 0,
        "number": 2
    },
    "tags": [1, 2, 3, 12, 13, 16, 18, 26, 52],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CR": 3
        }
    }
}, {
    "id": 64,
    "name": "Poison",
    "type": "Sort d'altération",
    "placement": "Unité",
    "cost": "%P% 1%CR%",
    "effects": [{
        "type": "InEp",
        "effect": "Après avoir effectué une action pricipale autre que passer, infligez 1 dégât à cette unité."
    }],
    "tags": [5, 6, 12, 13, 16, 19, 21, 23, 52],
    "costs": {
        "playCost": {
            "P": 1,
            "CR": 1
        }
    }
}, {
    "id": 65,
    "name": "Strangulation",
    "type": "Sort réactif",
    "placement": "Défausse",
    "cost": "1%CR%",
    "effects": [{
        "type": "Ep",
        "effect": "Vous pouvez jouer ce sort lorsqu'un adversaire activerait la capacité non inépuisable d'une unité ou de son Héritier. Annulez les effets de cette capacité jusqu'à la fin du tour."
    }],
    "tags": [7, 12, 16, 40],
    "costs": {
        "playCost": {
            "CR": 1
        }
    }
}, {
    "id": 66,
    "name": "Chaînes de sang",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 1%CR%",
    "effects": [{
        "type": "Ep",
        "effect": "Choisissez une unité que vous contrôlez et détruisez-la. Placez X jetons Épuisement sur une unité ciblée.<br/>X = la valeur de PV de l'unité choisie moins le nombre de blessures sur l'unité choisie."
    }],
    "tags": [4, 12, 13, 16, 38, 51],
    "costs": {
        "playCost": {
            "P": 1,
            "CR": 1
        }
    }
}, {
    "id": 67,
    "name": "Régression",
    "type": "Sort d'altération",
    "placement": "Unité",
    "cost": "%P% 1%CR% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Lorsque vous liez ce sort, défaussez tous les autres sorts d'altération liés à cette unité."
    }],
    "attack": "-5",
    "tags": [5, 6, 12, 13, 16, 59],
    "costs": {
        "playCost": {
            "P": 1,
            "CR": 1,
            "B": 1
        }
    }
}, {
    "id": 68,
    "name": "Ninja de Sombreciel",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%CR% 2%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Frappe du sceau 1 : Lorsque cette unité entre en jeu, vous pouvez payer 1%B% pour placer 1 jeton Épuisement sur un sort préparatoire ciblé.<br/>Frappe de l'ombre 2 : %P% %E% : Infligez 2 dégâts à une unité ciblée."
    }],
    "attack": 3,
    "life": 2,
    "recover": 2,
    "linkedPbId": 7,
    "linkedPbName": "Brennen Sombreciel",
    "tags": [8, 12, 13, 16, 19, 21, 23, 38, 43],
    "costs": {
        "playCost": {
            "P": 1,
            "CR": 1,
            "B": 3
        }
    }
}, {
    "id": 69,
    "name": "Archer de feu",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%CR%",
    "effects": [{
        "type": "Ep",
        "effect": "Embuscade 1 : Lorsque cette unité entre en jeu, vous pouvez infliger 1 dégât à une unité ou un Héritier ciblé."
    }],
    "attack": 1,
    "life": 1,
    "recover": 0,
    "tags": [8, 12, 13, 16, 19, 20, 21, 23],
    "costs": {
        "playCost": {
            "P": 1,
            "CR": 1
        }
    }
}, {
    "id": 70,
    "name": "Artificier écarlate",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 2%CR%",
    "effects": [{
        "type": "Ep",
        "effect": "Détonation 3 : %S% : Détruisez cette unité pour placer 1 blessure sur 3 unités ciblées ou moins."
    }],
    "attack": 3,
    "life": 2,
    "recover": 0,
    "tags": [8, 12, 13, 14, 16, 19, 21, 22, 51],
    "costs": {
        "playCost": {
            "P": 1,
            "CR": 2
        }
    }
}, {
    "id": 71,
    "name": "Rayon de glace",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 2%CN%",
    "effects": [{
        "type": "Ep",
        "effect": "Infligez 2 dégâts à une unité ciblée.<br/>Retirez 2 jetons État de cette unité."
    }],
    "tags": [4, 11, 13, 16, 19, 21, 23, 35],
    "costs": {
        "playCost": {
            "P": 1,
            "CN": 2
        }
    }
}, {
    "id": 72,
    "name": "Morsure du froid",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 1%CN% : Infligez 1 dégât à une unité ou un Héritier ciblé.<br/>Concentration 1 : Vous pouvez changer le cout d'activation de cette capacité en %P% %E% 1%B%."
    }],
    "tags": [3, 11, 13, 15, 16, 18, 19, 20, 21, 23],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CN": 1
        }
    }
}, {
    "id": 73,
    "name": "Piège de glace",
    "type": "Sort réactif",
    "placement": "Défausse",
    "cost": "1%CN%",
    "effects": [{
        "type": "Ep",
        "effect": "Vous pouvez jouer ce sort après l'entrée en jeu d'une unité qui a 2PV ou moins.<br/>Détruisez cette unité ciblée."
    }],
    "tags": [7, 11, 16, 40, 55],
    "costs": {
        "playCost": {
            "CN": 1
        }
    }
}, {
    "id": 74,
    "name": "Invoquer Golem de glace",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 2%CN% 1%B% : Placez une invocation Golem de glace dans votre arène.<br/>Concentration 2 : Vous pouvez retirer 1 blessure de chacun des Golems de glace que vous contrôlez."
    }],
    "invocation": {
        "name": "Golem de glace",
        "type": "Invocation",
        "placement": "arène",
        "effects": [{
            "type": "InEp",
            "effect": "Évoluderme 2 : Si au moins 1 sort d'altération est lié à cette unité, ajoutez 2 à la valeur de ses PV."
        }],
        "attack": 3,
        "life": 2,
        "recover": 0,
        "number": 3
    },
    "tags": [1, 2, 3, 11, 13, 16, 18, 25, 39],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CN": 2,
            "B": 1
        }
    }
}, {
    "id": 75,
    "name": "Invoquer Ours pics de givre",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%PN%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 1%CN% 1%B% : Placez une invocation Ours pics de givre dans votre arène."
    }],
    "invocation": {
        "name": "Ours pics de givre",
        "type": "Invocation",
        "placement": "Arène",
        "effects": [{
            "type": "Ep",
            "effect": "Gel 1 : Lorsque cette unité inflige des dégâts à une autre unité, vous pouvez payer 1%B% pour placer 1 jeton Épuisement sur cette dernière.<br/>Rancune 1 : Lorsque cette unité inflige des dégâts à un Héritier en attaquant, vous pouvez infliger 1 dégât de plus à cet Héritier."
        }],
        "attack": 2,
        "life": 3,
        "recover": 0,
        "number": 4
    },
    "tags": [1, 2, 3, 11, 13, 16, 19, 20, 23, 38],
    "costs": {
        "playCost": {
            "P": 1,
            "PN": 1
        },
        "effectCost": {
            "P": 1,
            "CN": 1,
            "B": 1
        }
    }
}, {
    "id": 76,
    "name": "Bouclier de cristal",
    "type": "Sort d'altération",
    "placement": "Unité",
    "cost": "%P% 1%CN% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": " Désormais, cette unité a cette capacité :<br/>Protecteur d'unité : Cette unité peut protéger une unité qui se fait attaquer."
    }],
    "life": "+2",
    "tags": [5, 6, 11, 13, 16, 25, 27, 28],
    "costs": {
        "playCost": {
            "P": 1,
            "CN": 1,
            "B": 1
        }
    }
}, {
    "id": 77,
    "name": "Couronne de glace",
    "type": "Sort d'altération",
    "placement": "Unité",
    "cost": "%P% 1%CN% 2%B%",
    "attack": "+3",
    "tags": [5, 6, 11, 13, 16, 26],
    "costs": {
        "playCost": {
            "P": 1,
            "CN": 1,
            "B": 2
        }
    }
}, {
    "id": 78,
    "name": "Glaciation",
    "type": "Sort d'altération",
    "placement": "Unité",
    "cost": "%P% 1%CN%",
    "effects": [{
        "type": "InEp",
        "effect": "Lorsque vous liez ce sort, placez 3 jetons État sur ce sort. Défaussez ce sort lorsqu'il n'y a plus de jetons État dessus. Tant que ce sort est lié à cette unité, cette unité est considérée comme étant épuisée.<br/>Désormais, cette unité a cette capacité :<br/>Dégel : %S% Retirez 1 jeton État d'un sort d'altération Glaciation lié à cette unité."
    }],
    "tags": [5, 6, 11, 13, 16, 35, 38],
    "costs": {
        "playCost": {
            "P": 1,
            "CN": 1
        }
    }
}, {
    "id": 79,
    "name": "Fureur de Rin",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 3%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Vous pouvez choisir jusqu'à 5 dés de votre réserve inactive, les relancer, puis les placer dans votre réserve active. Ensuite, vous pouvez payer autant de %PN% parmi ceux que vous venez de relancer pour infligez autant de dégâts à une unité ou Héritier ciblé."
    }],
    "linkedPbId": 8,
    "linkedPbName": "Rin Nordèle",
    "tags": [4, 11, 13, 15, 16, 19, 20, 21, 23, 31, 32, 33, 43],
    "costs": {
        "playCost": {
            "P": 1,
            "B": 3
        }
    }
}, {
    "id": 80,
    "name": "Croc de glace",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%PN%",
    "effects": [{
        "type": "InEp",
        "effect": "Guérison rapide 1 : Lorsque cette unité subirait des dégâts, vous pouvez payer autant de %B% que vous voulez. Pour chaque %B% payé, empêchez 1 dégât à cette unité."
    }, {
        "type": "Ep",
        "effect": "Avantage au combat : Lorsque cette unité combat, elle inflige ses dégâts avant que les autres unités sans Avantage au combat n'infligent les leurs."
    }],
    "attack": 1,
    "life": 1,
    "recover": 1,
    "tags": [8, 11, 13, 16, 27, 49],
    "costs": {
        "playCost": {
            "P": 1,
            "PN": 1
        }
    }
}, {
    "id": 81,
    "name": "Angoisse",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 2%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Choisissez un Héritier ciblé. Son contrôleur peut défausser 1 carte au hasard de sa main. S'il ne peut ou ne veut le faire, placez 2 blessures sur cet Héritier. Ensuite, choisissez un Héritier ciblé. Son contrôleur peut déplacer 2 dés de votre choix depuis sa réserve active vers sa réserve inactive. S'il ne peut ou ne veut le faire, placez 2 blessures sur cet Héritier."
    }],
    "linkedPbId": 9,
    "linkedPbName": "Léo Solombre",
    "tags": [4, 13, 15, 19, 20, 22, 31, 43, 48, 54],
    "costs": {
        "playCost": {
            "P": 1,
            "B": 1
        }
    }
}, {
    "id": 82,
    "name": "Dompteur de bêtes",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%PE% 1%CE% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Diminuer 1 : Après qu'un adversaire a déclaré ses attaquants, vous pouvez payer 1%B% pour réduire de 1 la valeur d'attaque de chaque attaquant pour le reste du tour."
    }],
    "attack": 3,
    "life": 3,
    "recover": 2,
    "tags": [8, 9, 13, 16, 60],
    "costs": {
        "playCost": {
            "P": 1,
            "PE": 1,
            "CE": 1,
            "B": 1
        },
        "effectCost": {
            "B": 1
        }
    }
}, {
    "id": 83,
    "name": "Amplifier",
    "type": "Sort d'altération",
    "placement": "Unité",
    "cost": "%P% 1%CE%",
    "effects": [{
        "type": "InEp",
        "effect": "X = le nombre de dés d'Envoutement sur cette unité.<br/>Raviver: 1%B%"
    }],
    "attack": "+X",
    "life": "+X",
    "recover": "+X",
    "tags": [5, 6, 9, 13, 16, 25, 26, 44, 53],
    "costs": {
        "playCost": {
            "P": 1,
            "CE": 1
        }
    }
}, {
    "id": 84,
    "name": "Changer la psyché",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 1%CE% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Retirez 1 jeton Épuisement d'une unité ciblée ou placez 1 jeton Épuisement sur une unité ciblée."
    }],
    "tags": [4, 9, 13, 16, 37, 38],
    "costs": {
        "playCost": {
            "P": 1,
            "CE": 1,
            "B": 1
        }
    }
}, {
    "id": 85,
    "name": "Dissolution",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Retirez 2 jeton État d'une carte ciblée ou choisissez un sort d'altération ciblé. Si ce sort d'altération est un sort d'altération invoqué, remettez-le dans la pile d'invocations de sont propriétaire. Sinon, mélangez-le dans la pioche de son propriétaire."
    }],
    "tags": [4, 13, 15, 27, 35],
    "costs": {
        "playCost": {
            "P": 1,
            "B": 1
        }
    }
}, {
    "id": 86,
    "name": "Vol mnésique",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 1%CE% : Consultez la main d'un joueur ciblé. Ce joueur peut défausser 1 carte de votre choix de sa main. S'il ne peut ou ne veut le faire, placez 1 blessure sur son Héritier."
    }],
    "tags": [3, 9, 13, 16, 19, 20, 22, 48],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CE": 1
        }
    }
}, {
    "id": 87,
    "name": "Sonde mentale",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 1%CE%",
    "effects": [{
        "type": "Ep",
        "effect": "Choisissez un adversaire ciblé qui doit révéler les 5 premières cartes de sa pioche. Choisissez l'1 des cartes dévoilées et retirez-la du jeu. Remettez les autres cartes dévoilées sur le dessus de la pioche de l'adversaire, dans l'ordre de votre choix."
    }],
    "tags": [4, 9, 13, 16, 41, 47],
    "costs": {
        "playCost": {
            "P": 1,
            "CE": 1
        }
    }
}, {
    "id": 88,
    "name": "Remords",
    "type": "Sort réactif",
    "placement": "Défausse",
    "cost": "1%CE% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Vous pouvez jouer ce sort après qu'un adversaire a effectué une action principale Attaquer un Héritier ou Attaquer une unité. Infligez 2 dégâts à un Héritier ciblé. Le joueur qui contrôle cet Héritier doit défasser les 2 premières cartes de sa pioche. S'il ne peut pas, infligez 1 dégât supplémentaire à son Héritier."
    }],
    "tags": [7, 9, 16, 16, 20, 23, 47],
    "costs": {
        "playCost": {
            "CE": 1,
            "B": 1
        }
    }
}, {
    "id": 89,
    "name": "Invoquer Mirondelle noire",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 2%CE%: Placez une invocation Mirondelle noire dans votre arène.<br/>Concentration 1: Vous pouvez choisir un joueur ciblé. Ce dernier doit défausser la première carte de sa pioche si vous avez moins de dés dans votre réserve active qu'un adversaire."
    }],
    "invocation": {
        "name": "Mirondelle noire",
        "type": "Invocation",
        "placement": "Arène",
        "effects": [{
            "type": "Ep",
            "effect": "Frappe mortelle : Lorsque cette unité inflige 1 dégât ou plus à une unité qu'elle attaque ou contrattaque, détruisez l'unité qui reçoit ce dégât."
        }],
        "attack": 1,
        "life": 2,
        "recover": 1,
        "number": 5
    },
    "tags": [1, 2, 3, 9, 13, 16, 18, 47, 55],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CE": 2
        }
    }
}, {
    "id": 90,
    "name": "Invoquer Orchilombe",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 1%CE%: Placez une invocation Orchilombe dans votre arène.<br/> Concentration 1: Le cout d'activation de ce sort peut être remplacé par : %P% %E% 1%B%<br/>Concentration 2: Vous pouvez infliger 1 dégât à l'Héritier d'un joueur ciblé s'il n'a plus de carte dans sa pioche."
    }],
    "invocation": {
        "name": "Orchilombe",
        "type": "Invocation",
        "placement": "Arène",
        "effects": [{
            "type": "InEp",
            "effect": "Mélodie paisible : Vos adversaires ne peuvent réaliser l'action Attaquer un Héritier ou Attaquer une unité. Durant son tour, un adversaire peut payer 1%B%. Dans ce cas, considérez que toutes les unités n'ont plus la capacité Mélodie paisible pour le reste du tour."
        }],
        "attack": 1,
        "life": 1,
        "recover": 0,
        "number": 5
    },
    "tags": [1, 2, 3, 9, 13, 16, 18, 19, 20, 23, 47],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CE": 1
        }
    }
}, {
    "id": 91,
    "name": "Cycle illusoire",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "Choisissez 1 dé d'Illusion dans votre réserve inactive et placez-le dans votre réserve active sur la face de votre choix. Mélangez cette carte dans votre pioche."
    }],
    "linkedPbId": 10,
    "linkedPbName": "Victoria Feu-de-verre",
    "tags": [4, 10, 13, 16, 31, 32, 34, 43, 61],
    "costs": {
        "playCost": {
            "P": 1
        }
    }
}, {
    "id": 92,
    "name": "Inversion corporelle",
    "type": "Sort d'altération",
    "placement": "Unité",
    "cost": "%P% 2%CI%",
    "effects": [{
        "type": "Ep",
        "effect": "Ce sort ne peut être lié à une unité à laquelle un sort dont le nom comprend \"Inversion\" a déjà été lié.<br/>Lorsque vous liez ce sort à une unité possédant la capacité Illusion, le joueur ayant joué ce sort peut choisir 2 dés d'Illusion de sa réserve inactive et les mettre dans sa réserve active, chacun sur la face de son choix."
    }, {
        "type": "InEp",
        "effect": "Intervertissez les valeurs imprimées d'attaque et de PV de cette unité."
    }],
    "tags": [5, 6, 10, 13, 16, 31, 32, 34, 57],
    "costs": {
        "playCost": {
            "P": 1,
            "CI": 2
        }
    }
}, {
    "id": 93,
    "name": "Silhouettes dans le brouillard",
    "type": "Sort réactif",
    "placement": "Défausse",
    "cost": "2%CI%, 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Vous pouvez jouer ce sort lorsqu'un adversaire décide de contrattaquer avec une unité qu'il contrôle. Empêchez tous les dégâts que votre ou vos unités attaquant devraient subir de l'unité contrattaquant dans ce combat."
    }],
    "tags": [7, 10, 16, 27],
    "costs": {
        "playCost": {
            "CI": 2,
            "B": 1
        }
    }
}, {
    "id": 94,
    "name": "Bouclier à particules",
    "type": "Sort réactif",
    "placement": "Défausse",
    "cost": "1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Vous pouvez jouer ce sort lorsqu'une unité que vous contrôlez subirait au moins 1 dégât. Ce sort peut être joué même si vous avez déjà joué des sorts réactifs ce tour-ci. Empêchez 1 dégât sur cette unité. Mélangez cette carte dans votre pioche."
    }],
    "tags": [7, 15, 27, 61],
    "costs": {
        "playCost": {
            "B": 1
        }
    }
}, {
    "id": 95,
    "name": "Porte secrète",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%CI% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Après qu'un sort réactif a été joué et que ses effets ont été résolus, vous pouvez placer 1 jeton Épuisement sur ce sort pour piocher 1 carte, ou défausser cette carte pour prendre le sort réactif joué de la défausse de son propriétaire et le mettre dans la main de ce dernier."
    }],
    "tags": [3, 10, 13, 16, 29, 56],
    "costs": {
        "playCost": {
            "P": 1,
            "CI": 1,
            "B": 1
        }
    }
}, {
    "id": 96,
    "name": "Invoquer Molosse de l'ombre",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 3%CI% Placez une invocation Molosse de l'ombre dans votre arène.<br/>Concentration 1: Vous pouvez infliger 1 dégât à une unité ciblée.<br/>Concentration 2: Ensuite vous pouvez infliger 1 dégât à une unité ciblée."
    }],
    "invocation": {
        "name": "Molosse de l'ombre",
        "type": "Invocation",
        "placement": "Arène",
        "effects": [{
            "type": "InEp",
            "effect": "Illusion : Détruisez cette unité si elle subit des dégâts de l'attaque/contrattaque d'une autre unité."
        }],
        "attack": 3,
        "life": 5,
        "recover": 0,
        "number": 3
    },
    "tags": [1, 2, 3, 10, 13, 16, 18, 19, 21, 23, 57],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CI": 3
        }
    }
}, {
    "id": 97,
    "name": "Invoquer Esprit de l'ombre",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%P% %E% 1%PI%: Placez une invocation Esprit de l'ombre dans votre arène."
    }],
    "invocation": {
        "name": "Esprit de l'ombre",
        "type": "Invocation",
        "placement": "Arène",
        "effects": [{
            "type": "InEp",
            "effect": "Illusion : Détruisez cette unité si elle subit des dégâts de l'attaque/contrattaque d'une autre unité.<br/>X = le nombre de sorts Invoquer Esprit de l'ombre dans votre Grimoire."
        }],
        "attack": 2,
        "life": "X",
        "recover": 0,
        "number": 4
    },
    "tags": [1, 2, 3, 10, 13, 16, 57],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "PI": 1
        }
    }
}, {
    "id": 98,
    "name": "En ombre",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "%S% %E% 1%CI% : Choisissez une unité ciblée. Elle acquiert la capacité suivante pour le reste du tour :"
    }, {
        "type": "InEp",
        "effect": "Illusion : Détruisez cette unité si elle subit des dégâts de l'attaque/contrattaque d'une autre unité."
    }],
    "tags": [3, 10, 13, 14, 16, 57],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "S": 1,
            "CI": 1
        }
    }
}, {
    "id": 99,
    "name": "Disparaitre",
    "type": "Sort réactif",
    "placement": "Défausse",
    "cost": "2%CI%",
    "effects": [{
        "type": "Ep",
        "effect": "Vous pouvez jouer ce sort lorsqu'un adversaire utiliserait un sort, une capacité ou un pouvoir de dé qui cible : vous-même, votre pioche, votre défausse ou votre Héritier. Annulez les effets de ce sort, cette capacité ou ce pouvoir de dé."
    }],
    "tags": [7, 10, 16, 40],
    "costs": {
        "playCost": {
            "CI": 2
        }
    }
}, {
    "id": 100,
    "name": "Archère éclair",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 2%CI% 2%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Tir double 1: %S% %E%: Infligez 1 dégât à une unité ciblée. Ensuite vous pouvez Infligez un dégât à une unité ciblé."
    }],
    "attack": 4,
    "life": 2,
    "recover": 2,
    "tags": [8, 10, 13, 15, 16, 19, 21, 13],
    "costs": {
        "playCost": {
            "P": 1,
            "CI": 2,
            "B": 2
        },
        "effectCost": {
            "S": 1
        }
    }
}, {
    "id": 101,
    "name": "Sword of virtue",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 2%B%",
    "effects": [{
        "type": "Ep",
        "effect": "Destroy a target unit or remove all wound tokens and exhaustion tokens from a target unit."
    }],
    "linkedPbId": 11,
    "linkedPbName": "Odette Diamondcrest",
    "tags": [4, 13, 15, 37, 39, 43, 55, 62],
    "costs": {
        "playCost": {
            "P": 1,
            "B": 2
        }
    }
}, {
    "id": 102,
    "name": "Meteor",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P% 2%PD%",
    "effects": [{
        "type": "Ep",
        "effect": "Deal 2 damage to all units. For each unit, place 1 exhaustion token on that unit unless it's controller spends 1%B%."
    }],
    "tags": [4, 13, 16, 19, 21, 23, 38, 62],
    "costs": {
        "playCost": {
            "P": 1,
            "PD": 2
        }
    }
}, {
    "id": 103,
    "name": "Shield mage",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%PD%",
    "effects": [{
        "type": "Ep",
        "effect": "Escort: %S%: Place 1 exhaustion token on this unit."
    }, {
        "type": "InEp",
        "effect": "Protective Aura 1: While this unit has 1 or more exhaustion tokens on it the life value of all other units you control is increased by 1."
    }],
    "attack": 0,
    "life": 2,
    "recover": 2,
    "tags": [8, 13, 14, 16, 25, 62],
    "costs": {
        "playCost": {
            "P": 1,
            "PD": 1
        },
        "effectCost": {
            "S": 1
        }
    }
}, {
    "id": 104,
    "name": "Power through",
    "type": "Sort d'altération",
    "placement": "Unité",
    "cost": "%S% 1%CD% 1%B%",
    "effects": [{
        "type": "Ep",
        "effect": "This unit has now the following ability: Overkill 2: When this unit detroys a unit an opponent controls by attcking, deal 2 damage to that opponent's Phoenixborn."
    }, {
        "type": "InEp",
        "effect": "Raviver: %D%"
    }],
    "attack": "+1",
    "tags": [5, 6, 14, 16, 19, 20, 23, 24, 26, 58, 62],
    "costs": {
        "playCost": {
            "S": 1,
            "CD": 1,
            "B": 1
        }
    }
}, {
    "id": 105,
    "name": "Heal",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%S% 1%CD%",
    "effects": [
        {
            "type": "Ep",
            "effect": "Remove all wound tokens from a target unit or 2 wound tokens from a target Phoenixborn."
        }
    ],
    "tags": [4, 14, 16, 39, 62],
    "costs": {
        "playCost": {
            "S": 1,
            "CD": 1
        }
    }
}, {
    "id": 106,
    "name": "Law of sight",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%S% 1%CD% 1%B%",
    "effects": [
        {
            "type": "Ep",
            "effect": "When this spell comes into play, you may draw up to 2 cards.<br/> No player may play reaction spells."
        },
        {
            "type": "InEp",
            "effect": "Bound: This card cannot be discarded from your spellboard when you Meditate.<br/>Fleeting: Discard this card at the end of this round."
        }
    ],
    "tags": [3, 14, 16, 29, 62, 64],
    "costs": {
        "playCost": {
            "S": 1,
            "CD": 1,
            "B": 1
        }
    }
}, {
    "id": 107,
    "name": "Summon Winged Lioness",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [
        {
            "type": "Ep",
            "effect": "%P% %E% 1%CD% 1%B% : Place a Winged Lioness conjuration onto your battlefield."
        }
    ],
    "invocation": {
        "name": "Winged Lioness",
        "type": "Invocation",
        "placement": "Arène",
        "effects": [
            {
                "type": "Ep",
                "effect": "Stalk: This unit cannot be guarded against."
            }
        ],
        "attack": 2,
        "life": 2,
        "recover": 1,
        "number": 4
    },
    "tags": [1, 2, 3, 13, 16, 42, 62],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CD": 1,
            "B": 1
        }
    }
}, {
    "id": 108,
    "name": "Law of assurance",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%CD% 1%B%",
    "effects": [
        {
            "type": "Ep",
            "effect": "When this spell comes into play, you may select 2 dice in your exhausted pool and place them into your active pool on a side of your choice.<br/>Players' active dice pools cannot be affected by spells, abilities, or dice powers used by their opponents."
        },
        {
            "type": "InEp",
            "effect": "Bound: This card cannot be discarded from your spellboard when you Meditate.<br/>Fleeting: Discard this card at the end of this round."
        }
    ],
    "tags": [3, 13, 16, 31, 32, 34, 62, 64],
    "costs": {
        "playCost": {
            "P": 1,
            "CD": 1,
            "B": 1
        }
    }
}, {
    "id": 109,
    "name": "Summon Emperor Lion",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [
        {
            "type": "Ep",
            "effect": "%P% %E% 2%CD% 1%B% : Place an Emperor Lion conjuration onto your battlefield."
        }
    ],
    "invocation": {
        "name": "Emperor Lion",
        "type": "Invocation",
        "placement": "Arène",
        "effects": [
            {
                "type": "Ep",
                "effect": "Spite 1: When this unit deals damage to a Phoenixborn by attacking, you may deal 1 additional damage to that Phoenixborn."
            },
            {
                "type": "InEp",
                "effect": "Healing Aura 1: The recover value of all other units you control is increased by 1."
            }
        ],
        "attack": 3,
        "life": 3,
        "recover": 0,
        "number": 3
    },
    "tags": [1, 2, 3, 13, 16, 19, 20, 23, 53, 62],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CD": 2,
            "B": 1
        }
    }
}, {
    "id": 110,
    "name": "Holy Knight",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%PD% 2%CD% 1%B%",
    "effects": [
        {
            "type": "Ep",
            "effect": "Impenetrable: This unit cannot be affected by spells, abilities, or dice powers used by an opponent."
        }
    ],
    "attack": 5,
    "life": 3,
    "recover": 2,
    "tags": [8, 13, 16, 50, 62],
    "costs": {
        "playCost": {
            "P": 1,
            "PD": 1,
            "CD": 2,
            "B": 1
        }
    }
}, {
    "id": 111,
    "name": "Encore",
    "type": "Sort d'action",
    "placement": "Défausse",
    "cost": "%P%",
    "effects": [{
        "type": "Ep",
        "effect": "Search your discard pile for a card other than Encore and place it on the top or bottom of your draw pile. Draw 1 card."
    }],
    "linkedPbId": 12,
    "linkedPbName": "Namine Hymntide",
    "tags": [4, 13, 15, 29, 43, 56, 61, 63],
    "costs": {
        "playCost": {
            "P": 1
        }
    }
}, {
    "id": 112,
    "name": "Magic syphon",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%CS%",
    "effects": [{
        "type": "Ep",
        "effect": "%S% %E% Change 1 die in your active pool to 1 side of you choice. Change 1 die in a target player's active pool to 1 side of your choice."
    }],
    "tags": [4, 13, 14, 31, 34, 63],
    "costs": {
        "playCost": {
            "P": 1,
            "CS": 1
        },
        "effectCost": {
            "S": 1
        }
    }
}, {
    "id": 113,
    "name": "Crescendo",
    "type": "Sort réactif",
    "placement": "Défausse",
    "cost": "1%CS% 1%D%",
    "effects": [{
        "type": "Ep",
        "effect": "Play this card after you have declared attackers. Deal 1 damage to target unit you control to deal 3 damage to target unit."
    }],
    "tags": [7, 16, 19, 21, 23, 52, 58, 63],
    "costs": {
        "playCost": {
            "CS": 1,
            "D": 1
        }
    }
}, {
    "id": 114,
    "name": "String mage",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%PS% 1%CS%",
    "effects": [{
        "type": "Ep",
        "effect": "Exchange link 1: %S% Move 1 wound token or 1 status token from target unit onto this unit or move 1 wound token or 1 status token from this unit onto a target unit."
    }],
    "attack": 1,
    "life": 3,
    "recover": 2,
    "tags": [8, 13, 14, 16, 19, 21, 22, 35, 39, 63],
    "costs": {
        "playCost": {
            "P": 1,
            "PS": 1,
            "CS": 1
        },
        "effectCost": {
            "S": 1
        }
    }
}, {
    "id": 115,
    "name": "Shatter pulse",
    "type": "Sort réactif",
    "placement": "Défausse",
    "cost": "2%CS% 1%B%",
    "effects": [
        {
            "type": "Ep",
            "effect": "You may play this spell after a unit you control is destroyed. Destroy a target unit. You may change 2 dice in a target player's active pool to a side of your choice."
        }
    ],
    "tags": [7, 16, 24, 31, 34, 55, 63],
    "costs": {
        "playCost": {
            "CS": 2,
            "B": 1
        }
    }
}, {
    "id": 116,
    "name": "Guilt link",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%CS%",
    "effects": [
        {
            "type": "Ep",
            "effect": "When your Phoenixborn receives 1 or more damage, you may place 1 exhaustion token on this spell to place 1 wound token on a target unit or Phoenixborn. The player that controls the targeted unit or Phoenixborn may discard 1 ready spell they control or 1 unit they control to prevent that wound token from being placed."
        }
    ],
    "tags": [3, 13, 16, 19, 20, 21, 22, 48, 55, 63],
    "costs": {
        "playCost": {
            "P": 1,
            "CS": 1
        }
    }
}, {
    "id": 117,
    "name": "Summon Salamander Monk",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P%",
    "effects": [
        {
            "type": "Ep",
            "effect": "%P% %E% 1%CS%: Place a Salamander Monk conjuration onto your battlefield."
        }
    ],
    "invocation": {
        "name": "Salamander Monk",
        "type": "Invocation",
        "placement": "Arène",
        "effects": [
            {
                "type": "InEp",
                "effect": "Spirit Form: When this unit is destroyed, place a Salamander Monk Spirit conjuration onto your battlefield."
            }
        ],
        "attack": 1,
        "life": 1,
        "recover": 0,
        "number": 2,
        "invocation": {
            "name": "Salamander Monk Spirit",
            "type": "Invocation",
            "placement": "Arène",
            "effects": [
                {
                    "type": "InEp",
                    "effect": "Transparent: This unit cannot block or be chosen as the target of an attack"
                }
            ],
            "attack": 1,
            "life": 1,
            "recover": 0,
            "number": 3
        },
    },
    "tags": [1, 2, 3, 13, 24, 63],
    "costs": {
        "playCost": {
            "P": 1
        },
        "effectCost": {
            "P": 1,
            "CS": 1
        }
    }
}, {
    "id": 118,
    "name": "Flute mage",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%CS% 1%B%",
    "effects": [
        {
            "type": "Ep",
            "effect": "Enliven: %S% %E%: Remove 1 exhaustion token from a target unit."
        }
    ],
    "attack": 1,
    "life": 2,
    "recover": 1,
    "tags": [8, 13, 14, 16, 37, 63],
    "costs": {
        "playCost": {
            "P": 1,
            "CS": 1,
            "B": 1
        },
        "effectCost": {
            "S": 1
        }
    }
}, {
    "id": 119,
    "name": "Summon Squall Stallion",
    "type": "Sort préparatoire",
    "placement": "Grimoire",
    "cost": "%P% 1%PS%",
    "effects": [
        {
            "type": "Ep",
            "effect": "%P% %E% 1%CS% 1%B%: Draw 1 card. Place a Squall Stallion conjuration onto your battlefield."
        }
    ],
    "invocation": {
        "name": "Squall Stallion",
        "type": "Invocation",
        "placement": "Arène",
        "effects": [
            {
                "type": "Ep",
                "effect": "Opportunist 2 : When you draw 1 or more cards durin a player's turn, add 2 to this unit's attack value for the remainder of that turn."
            }
        ],
        "attack": 1,
        "life": 3,
        "recover": 0,
        "number": 5
    },
    "tags": [1, 2, 3, 13, 16, 26, 29, 63],
    "costs": {
        "playCost": {
            "P": 1,
            "PS": 1
        },
        "effectCost": {
            "P": 1,
            "CS": 1,
            "B": 1
        }
    }
}, {
    "id": 120,
    "name": "River skald",
    "type": "Allié",
    "placement": "Arène",
    "cost": "%P% 1%PS% 1%CS% 1%B%",
    "effects": [
        {
            "type": "Ep",
            "effect": "Harsh Melody: When you draw 1 or more cards during your turn, you may place 1 exhaustion token on this unit to place a number of wound tokens equal to this unit's attack value on a target unit."
        }
    ],
    "attack": 3,
    "life": 3,
    "recover": 2,
    "tags": [8, 13, 16, 19, 21, 22, 29, 63],
    "costs": {
        "playCost": {
            "P": 1,
            "PS": 1,
            "CS": 1,
            "B": 1
        }
    }
}]);
/*
{
    "id": ,
    "name": "",
    "type": "",
    "placement": "",
    "cost": "",
    "effects": [
        {
            "type": "Ep",
            "effect": ""
        },
        {
            "type": "InEp",
            "effect": ""
        }
    ],
    "attack": ,
    "life": ,
    "recover": ,
    "invocation": {
        "name": "",
        "type": "",
        "placement": "",
        "effects": [
            {
                "type": "Ep",
                "effect": ""
            },
            {
                "type": "InEp",
                "effect": ""
            }
        ],
        "attack": ,
        "life": ,
        "recover": ,
        "number":
    },
    "linkedPbId": ,
    "linkedPbName": "",
    "tags": [],
    "costs": {
        "playCost": {
        },
        "effectCost": {
        }
    }
},
*/
