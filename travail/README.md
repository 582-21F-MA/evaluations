# Travail pratique

> Pondération : 20%\
> Remise : 28 mai

Le **Yahtzee** est un jeu de société dont le but est d'enchaîner des
figures à l'aide de cinq dés pour remporter un maximum de points. À son
tour, chaque joueur ou joueuse lance les dés dans le but d'obtenir un
des arrangements suivants :

| Figure       | Condition                         | Score              |
| ------------ | --------------------------------- | ------------------ |
| Un           | Aucune                            | Somme des 1        |
| Deux         | Aucune                            | Somme des 2        |
| Trois        | Aucune                            | Somme des 3        |
| Quatre       | Aucune                            | Somme des 4        |
| Cinq         | Aucune                            | Somme des 5        |
| Six          | Aucune                            | Somme des 6        |
| Brelan       | Trois dés de même valeur          | Somme des cinq dés |
| Carré        | Quatre dés de même valeur         | Somme des cinq dés |
| Full         | Brelan et deux dés de même valeur | 25 points          |
| Petite suite | Suite de 4 chiffres               | 30 points          |
| Grande suite | Suite de 5 chiffres               | 40 points          |
| Yahtzee      | Cinq dés de même valeur           | 50 points          |
| Chance       | Aucune                            | Somme des cinq dés |

Votre dépôt contient l'échafaudage d'un programme qui comptabilise le
score d'un jet de dés selon une figure donnée. Votre tâche consiste à
compléter le programme en suivant les règles ci-dessus. Si le jet ne
satisfait pas la condition de la figure, son score est 0. Pareillement,
si le nom de la figure donnée ne correspond pas à une des figures
ci-dessus, le score est 0.

## Instructions

1. Commencez par [créer un dépôt Classroom][Classroom] pour le travail.
2. Ensuite, téléchargez le dépôt sur votre ordinateur (bouton _Code_
   vert → _Download ZIP_).
3. Avant de soumettre votre travail, [révisez votre code][ta] à l'aide
   du programme `ta`.
4. Pour soumettre votre travail, téléversez le fichier « index.js » (et
   seulement ce fichier) dans votre dépôt Classroom. Ne renommez pas le
   fichier, ne le placez pas dans un dossier, et ne le compressez pas.

[Classroom]: https://classroom.github.com/a/VFLUWYNe
[ta]: https://github.com/582-21F-MA/evaluations#auxiliaire-denseignement

## Critères d'évaluation

Votre travail sera évalué selon les [critères habituels]. Pour obtenir
la note de passage, votre programme doit absolument être subdivisé en
plusieurs fonctions auxiliaires, et chacune de ces fonctions doit être
validée par un minimum de deux tests automatisés. Veuillez utiliser
seulement les constructions de code vues en classe et privilégier des
algorithmes simples. Vous devez être capable d'expliquer par vous-même,
sans notes ni aide-mémoire, le code que vous soumettez.

[critères habituels]: https://github.com/582-21F-MA/evaluations#crit%C3%A8res-d%C3%A9valuation
