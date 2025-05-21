# Mini-test 2

> Pondération : 10%\
> Remise : 23 juin (avant le cours)

En programmation, le terme __zipping_ désigne une opération qui consiste
à combiner une _paire de tableaux_ en un _tableau de paires_ où le
premier élément du premier tableau est associé au premier élément du
deuxième tableau, le deuxième élément du premier tableau est associé au
deuxième élément du deuxième tableau, et ainsi de suite.

Par exemple:

```ts
expect(
    zip([[1, 2, 3], ["a", "b", "c"]]),
).toEqual(
    [[1, "a"], [2, "b"], [3, "c"]],
);
```

Malheureusement, JavaScript n'inclut pas de fonction `zip` telle que
celle utilisée ci-dessus. Votre tâche pour cet examen est donc de
l'implémenter.

## Consignes

Votre dépôt inclut un fichier nommé `index.ts` contenant une fonction
nommée `zip`. Implémentez la fonction de sorte à passer tous les tests
inclus dans le fichier. Attention, si les deux tableaux n'ont pas la
même longueur, l'opération doit s'arrêter à la fin du tableau le plus
court, et ignorer les éléments restants.

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

[Classroom]: https://classroom.github.com/a/OQjr9ChB

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
