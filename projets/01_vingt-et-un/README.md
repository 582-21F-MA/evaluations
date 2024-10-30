# Projet 1 : Vingt-et-un

> Pondération : 20% \
> Remise : 6 octobre

Le vingt-et-un est un jeu de cartes populaire qui oppose un joueur ou une
joueuse à la banque, et dont le but est d'obtenir le score le plus élevé
sans dépasser 21.

Voici comment se déroule une partie :

-   D'abord, la banque distribue au joueur ou à la joueuse les 2
    premières cartes d'un paquet de 52 cartes mélangées. Si le total des
    2 cartes est 21, le ou la joueuse gagne immédiatement et la partie
    se termine.

-   Ayant reçu les 2 cartes, le joueur ou la joueuse doit décider soit
    de s'en tenir à celles-ci, soit de demander une carte
    supplémentaire. Cette étape se répète jusqu'à ce que le ou la
    joueuse dise à la banque la phrase « je m'y tiens », à moins que son
    score dépasse 21, dans quel cas le ou la joueuse perd immédiatement,
    et la partie se termine.

-   Une fois que le ou la joueuse s'en tient à ses cartes, la banque se
    distribue des cartes jusqu'à ce que son score soit égal ou supérieur
    à 17. Si le score de la banque est supérieur à 21, le ou la joueuse
    gagne immédiatement, et la partie se termine.

-   Enfin, la banque compare son score à celui du joueur ou de la
    joueuse. Celui ou celle dont le score est le plus élevé remporte la
    partie.

Les cartes de 2 à 10 valent leur nombre. Les figures (rois, dames,
valets) valent 10 points. Les as valent normalement 1 ou 11 points à la
discretion du joueur ou de la joueuse, mais dans notre cas ils vaudront
toujours 11 points.

## Exigences

Créez un programme TypeScript qui permet de jouer une partie de
vingt-et-un à partir de la ligne de commande. 

Avant le début de la partie, le paquet de carte doit être mélangé. Pour
ce faire, en commençant par la dernière carte du paquet, on échange
chaque carte avec une autre carte aléatoire.

Lorsque le ou la joueuse et la banque reçoit une carte, le programme
doit afficher la valeur ainsi que l'enseigne de la carte, puis le total
de ses points.

## Conseils

-   Abordez la conception du programme étape par étape. Le déroulement
    d'une partie telle que décrite ci-haut devrait vous guider quant à
    l'ordre d'exécution du code.

-   L'interface devrait être la dernière chose à implémenter. Commencez
    par concevoir et tester les fonctions de la logique métier : créer
    un paquet de cartes, mélanger celui-ci, tirer une carte, calculer la
    valeur d'une main, etc.

-   Outre la fonction principale, très peu de fonctions devrait appeler
    `console.log` (vous pouvez toutefois utiliser `console.log` pour
    déboguer votre programme). Rappelez-vous qu'une fonction à effets de
    bord (`console.log` est un effet de bord) ne peut pas être testée.

-   Une partie de jeu a un *état* courant : combien de cartes reste-t-il
    dans le paquet, quelles sont les cartes de la banque, quelles sont
    les cartes du joueur ou de la joueuse, etc. Ces informations peuvent
    être facilement stockées dans un seul objet. 

-   Chaque fonction de la logique métier manipulera l'état de la partie.
    D'une certaine façon, on pourrait voir le programme comme une suite
    ou une chaine de fonction qui se passent l'état de une à l'autre
    jusqu'à ce que la partie se termine.

-   Les boucles ainsi que les fonctions récursives permettent de répéter
    une action tant et aussi longtemps qu'une condition est vraie.
    Certaines répétitions sont plus faciles à représenter à l'aide des
    fonctions récursives.

## Remise

Le programme doit être remis dans un fichier nommé `main.ts`, dans un
dépôt GitHub Classroom crée à cet effet. Pour créer le dépôt, cliquez
[ici][GitHub Classroom].

[GitHub Classroom]: https://classroom.github.com/a/YV17rlbL
