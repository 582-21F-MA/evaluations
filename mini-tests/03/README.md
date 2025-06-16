# Mini-test 3

> Pondération : 10%\
> Remise : avant le prochain cours

Votre dépôt contient un fichier `index.ts` dans lequel se trouve une
liste des couleurs CSS: _aliceblue_, _antiquewhite_, _aqua_,
_aquamarine_, etc. Pour ce mini-test, on vous demande d'afficher
dynamiquement ces couleurs dans une liste à puces `<ul>`. De plus,
chaque item doit être affiché dans la couleur qu'il représente. Ainsi,
le contenu texte de `<li>aqua</li>` doit être de couleur aqua, celui de
`<li>red</li>` doit être de couleur rouge, et ainsi de suite.

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

[Classroom]: https://classroom.github.com/a/FHf9yzaZ

## Critères d'évaluation

- Conception (6 points)
  - Les consignes sont respectées.
  - Chaque tâche du programme est réalisée par une fonction auxiliaire.
  - Les types de donnée représentent correctement les informations.
  - Le code ne contient pas de répétitions inutiles.
  - Le programme s'exécute sans erreur.
  - Seul le contenu dynamique est généré avec JavaScript.

- Lisibilité (3 points)
  - Le code est bien formaté (voir la commande `bun fmt`).
  - Les valeurs importantes et celles qui se répètent sont nommées.
  - Le nom des affectations évoque ce que représente leur valeur.
  - Le nom des fonctions évoque la valeur qu'elles produisent ou
    l'opération qu'elles effectuent.

- Documentation (1 points)
  - Le type des paramètres et de la valeur de retour est correctement
    annoté (voir la commande `bun review`).
