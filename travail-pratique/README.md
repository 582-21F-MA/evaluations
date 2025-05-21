# Travail pratique

> Pondération : 20%\
> Remise : 7 juillet

Le **Yahtzee** est un jeu de société dont le but d'enchaîner des figures
à l'aide de cinq dés pour remporter un maximum de points. À son tour
chaque joueur ou joueuse lance les dés dans le but d'obtenir un des
arrangement suivants :

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

Votre tâche consiste à implémenter une fonction nommée `score` qui
comptabilise le score d'un jet de dés (`dice`) selon une figure
(`category`) donnée. Si le jet ne satisfait pas la condition de la
figure, son score est 0. Ainsi, étant donné le jet `[1, 1, 3, 5, 6]` et
la figure `"Brelan"`, le score est 0 puisque la condition du brelan
(soit contenir trois dés de même valeur) n'est pas satisfaite.
Pareillement, si le nom de la figure donnée ne correspond pas à une des
figures ci-dessus, le score est 0.

## Création du dépôt et remise

1. [Cliquez ici][Classroom] pour accepter l'évaluation et créer un
   nouveau dépôt Classroom.
2. Dans votre terminal, exécutez la commande `git clone <url>`, où
   `<url>` est la URL du dépôt créé à l'étape 1. Cette commande créera
   un répertoire local contenant tous les fichiers nécessaires pour
   faire le travail.
3. Ouvrez le répertoire créé à l'étape 2 dans votre éditeur de texte
   (VSCode, Sublime, etc.).
4. Une fois le travail terminé, révisez votre code avec la commande
   `bun review`. Portez attention aux avertissements, et corrigez les
   erreurs.
5. Pour soumettre le travail, exécutez la commande `bun submit`.

[Classroom]: https://classroom.github.com/a/a-oP1d9m

## Critères d'évaluation

- Conception (5 points)
  - Les consignes sont respectées.
  - Chaque tâche du programme est réalisée par une fonction auxiliaire.
  - Les types de donnée représentent correctement les informations.
  - Le code ne contient pas de répétitions inutiles.
  - Le programme s'exécute sans erreur.

- Lisibilité (3 points)
  - Le code est bien formaté (voir la commande `bun fmt`).
  - Les valeurs importantes et celles qui se répètent sont nommées.
  - Le nom des affectations évoque ce que représente leur valeur.
  - Le nom des fonctions évoque la valeur qu'elles produisent ou
    l'opération qu'elles effectuent.

- Documentation (2 points)
  - Le type des paramètres et de la valeur de retour est correctement
    annoté.
  - Chaque fonction auxiliaire inclut au moins deux exemples pertinents.
