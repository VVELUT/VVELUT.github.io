angular.module('app').constant('pbs', [{
    "id": -3,
    "name": "Dimona Odinstar",
    "battlefield": 5,
    "life": 17,
    "spellbook": 5,
    "effects": [{
        "type": "Ep",
        "effect": "Ordre : %S% %E% 2%B% : Retirez 1 jeton Épuisement d'une unité ciblée que vous contrôlez."
    }],
    "linkedCardId": -3,
    "linkedCardName": "Chevalier de Quarayon",
    "spheres": "",
    "costs": {
        "S": 1,
        "B": 2
    }
}, {
    "id": -2,
    "name": "Orrick Gilstream",
    "battlefield": 5,
    "life": 19,
    "spellbook": 4,
    "effects": [{
        "type": "Ep",
        "effect": "Bounty: %S% %E% 2%B%: Select up to 4 dice in your exhausted pool. They must all be different types. Re-roll them, and place them into your active pool."
    }],
    "linkedCardId": -2,
    "linkedCardName": "Gobi sunshield",
    "spheres": "",
    "costs": {
        "S": 1,
        "B": 2
    }
}, {
    "id": -1,
    "name": "Lulu Primeroc",
    "battlefield": 4,
    "life": 21,
    "spellbook": 4,
    "effects": [{
        "type": "Ep",
        "effect": "Support : %S% %E% 1%B% : Jusqu'à la fin du tour, ajoutez 1 à la valeur d'attaque de toutes les unités que vous contrôlez actuellement."
    }],
    "linkedCardId": -1,
    "linkedCardName": "Rafale du phénix",
    "spheres": "",
    "costs": {
        "S": 1,
        "B": 1
    }
}, {
    "id": 1,
    "name": "Forge Roarkwin",
    "battlefield": 6,
    "life": 15,
    "spellbook": 5,
    "effects": [{
        "type": "Ep",
        "effect": "Coup tranchant : %S% 1%D% : Infligez 1 dégât à une unité ciblée. Si un adversaire n'a pas d'unité en jeu, vous pouvez alors infliger 1 dégât à son Héritier."
    }],
    "linkedCardId": 5,
    "linkedCardName": "Cent lames",
    "spheres": "%B%",
    "costs": {
        "S": 1,
        "D": 1
    }
}, {
    "id": 2,
    "name": "Méoni Vipère",
    "battlefield": 3,
    "life": 22,
    "spellbook": 4,
    "effects": [{
        "type": "Ep",
        "effect": "Frappe : Après qu'un joueur ait déclaré ses attaquants, vous pouvez payer 1%B% et placer 1 jeton Épuisement sur cette Héritière. Dans ce cas, ajoutez 2 à la valeur d'attaque d'une unité ciblée jusqu'à la fin du tour."
    }],
    "linkedCardId": 15,
    "linkedCardName": "Invoquer Serpent argenté",
    "spheres": "%PE% %PN%",
    "costs": {
        "B": 1
    }
}, {
    "id": 3,
    "name": "Aradèle Gaardété",
    "battlefield": 8,
    "life": 16,
    "spellbook": 4,
    "effects": [{
        "type": "Ep",
        "effect": "Souffle d'eau : %S% %E% 1%CN% : Infligez 2 dégâts à une unité ciblée."
    }],
    "linkedCardId": 23,
    "linkedCardName": "Invoquer Jaguar bleu",
    "spheres": "%PN%",
    "costs": {
        "S": 1,
        "CN": 1
    }
}, {
    "id": 4,
    "name": "Saria Guidemane",
    "battlefield": 5,
    "life": 20,
    "spellbook": 4,
    "effects": [{
        "type": "Ep",
        "effect": "Attraction : %S% %E% 1%CE% : Vous pouvez piocher 1 carte. Dans ce cas, vous pouvez cibler un joueur. Ce dernier doit défausser 1 carte du dessus de sa pioche."
    }],
    "linkedCardId": 34,
    "linkedCardName": "Invoquer Corbeau marin",
    "spheres": "%PE%",
    "costs": {
        "S": 1,
        "CE": 1
    }
}, {
    "id": 5,
    "name": "Jessa Na Ni",
    "battlefield": 5,
    "life": 18,
    "spellbook": 4,
    "effects": [{
        "type": "Ep",
        "effect": "Cris des défunts : Chaque fois qu'une unité qu'un adversaire contrôle quitte le jeu, vous pouvez payer 1%B% pour infliger 1 dégât à son Héritier."
    }],
    "linkedCardId": 41,
    "linkedCardName": "Peur",
    "spheres": "%B%"
}, {
    "id": 6,
    "name": "Noah Lunerouge",
    "battlefield": 6,
    "life": 20,
    "spellbook": 3,
    "effects": [{
        "type": "Ep",
        "effect": "Cible fantomatique : %S% %E% 1%CR% : Placez 1 jeton Épuisement sur un sort préparatoire ciblé d'un grimoire adverse."
    }],
    "linkedCardId": 58,
    "linkedCardName": "Invoquer Loup masqué",
    "spheres": "%PI%",
    "costs": {
        "S": 1,
        "CR": 1
    }
}, {
    "id": 7,
    "name": "Brennen Sombreciel",
    "battlefield": 5,
    "life": 20,
    "spellbook": 3,
    "effects": [{
        "type": "Ep",
        "effect": "Brulure spirituelle : %S% %E% 1%B% : Détruisez une unité que vous contrôlez. Dans de cas, vous pouvez infliger 2 dégâts à une unité ou un Héritier ciblé."
    }],
    "linkedCardId": 68,
    "linkedCardName": "Ninja de Sombreciel",
    "spheres": "%PR%",
    "costs": {
        "S": 1,
        "B": 1
    }
}, {
    "id": 8,
    "name": "Rin Nordèle",
    "battlefield": 6,
    "life": 17,
    "spellbook": 4,
    "effects": [{
        "type": "Ep",
        "effect": "Renforcement de glace : %S% %E% : Liez un sort d'altération invoqué Renforcement de glace à une unité ciblée que vous contrôlez."
    }],
    "invocation": {
        "name": "Renforcement de glace",
        "type": "Sort d'altération invoqué",
        "placement": "Unité",
        "life": "+1",
        "number": 5
    },
    "linkedCardId": 79,
    "linkedCardName": "Fureur de Rin",
    "spheres": "%B%",
    "costs": {
        "S": 1
    }
}, {
    "id": 9,
    "name": "Léo Solombre",
    "battlefield": 6,
    "life": 19,
    "spellbook": 3,
    "effects": [{
        "type": "Ep",
        "effect": "Invoquer Brillouvreuil : %S% %E% 1%B% : Placez une invocation Brillouvreuil dans votre arène."
    }],
    "invocation": {
        "name": "Brillouvreuil",
        "type": "Invocation",
        "placement": "Arène",
        "attack": 0,
        "life": 2,
        "recover": 1,
        "number": 1,
        "effects": [{
            "type": "Ep",
            "effect": "Protecteur d'unité : Cette unité peut protéger une unité qui se fait attaquer.<br/>Leurre : Lorsqu'une unité que vous contrôlez serait la cible d'un sort, d'une capacité, ou d'un pouvoir de dé, et que cette unité-ci aurait pu être choisie comme cible, vous pouvez placer 1 jeton Épuisement sur cette unité-ci pour qu'elle devienne la cible choisie."
        }, {
            "type": "InEp",
            "effect": "Dernière volonté 1 : Lorsque cette unité est détruite, défaussez la première carte de la pioche d'un joueur ciblé.<br/>Rajeunissement magique : %S%: Retirez du jeu un sort d'altération lié à cette unité. Dans ce cas, retirez tous les jetons Épuisement de cette unité."
        }]
    },
    "linkedCardId": 81,
    "linkedCardName": "Angoisse",
    "spheres": "%B%",
    "costs": {
        "S": 1,
        "B": 1
    }
}, {
    "id": 10,
    "name": "Victoria Feu-de-verre",
    "battlefield": 5,
    "life": 18,
    "spellbook": 4,
    "effects": [{
        "type": "Ep",
        "effect": "Source de l'ombre : %S% %E% 1%PI%: Choisissez 2 dés de votre réserve inactive et placez-les dans votre réserve active, chacun sur la face de votre choix."
    }],
    "linkedCardId": 91,
    "linkedCardName": "Cycle illusoire",
    "spheres": "%PI%",
    "costs": {
        "S": 1,
        "PI": 1
    }
}, {
    "id": 11,
    "name": "Odette Diamondcrest",
    "battlefield": 5,
    "life": 17,
    "spellbook": 4,
    "effects": [{
        "type": "Ep",
        "effect": "Retribution: After this Phoenixborn receives damage while guarding, place 2 wound tokens on a target attacking unit."
    }],
    "linkedCardId": 101,
    "linkedCardName": "Sword of virtue",
    "spheres": "%PD%"
}, {
    "id": 12,
    "name": "Namine Hymntide",
    "battlefield": 6,
    "life": 17,
    "spellbook": 4,
    "effects": [{
        "type": "Ep",
        "effect": "Calming melody: %S% %E% 1%CS% Draw one card. You may place 1 exhaustion token on this card and 1 exhaustion token on a target Phoenixborn."
    }],
    "linkedCardId": 111,
    "linkedCardName": "Encore",
    "spheres": "%PS%",
    "costs": {
        "S": 1,
        "CS": 1
    }
}]);
/*
{
    "id": ,
    "name": "",
    "battlefield": ,
    "life": ,
    "spellbook": ,
    "effects": [
        {
            "type": "Ep",
            "effect":""
        }
    ],
    "invocation": {
        "name": "",
        "type": "",
        "placement": "",
        "attack" : ,
        "life": ,
        "recover": ,
        "number": ,
        "effects": [
            {
                "type": "Ep",
                "effect":""
            },
            {
                "type": "InEp",
                "effect":""
            }
        ],
    },
    "linkedCardId": ,
    "linkedCardName": "",
    "spheres": "",
    "costs": {}
},
//*/
