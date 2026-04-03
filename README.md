# Évaluations

Vous trouverez dans ce dépôt les énoncés des évaluations.

## Critères d'évaluation

Les critères ci-dessous s'appliquent à toutes les évaluations. De plus,
certaines évaluations ont leurs propres critères.

> [!IMPORTANT]
> Le but des évaluations est de juger si vous comprenez la matière vue
> en classe jusqu'à présent. Chaque travail peut et doit être complété
> avec les constructions abordées avant la publication de l'énoncé.

- Conception
  - les consignes sont respectées
  - le programme est subdivisé en plusieurs fonctions
  - les types de donnée choisis représentent bien les informations
  - le code ne contient pas de répétitions inutiles
  - les interfaces natives sont utilisées correctement
  - il n'y a pas de variables globales
  - les fonctions sont validées à l'aide de tests automatisés

- Lisibilité
  - le code est formaté de manière cohérente
  - les valeurs importantes et celles qui se répètent sont nommées
  - le nom des affectations évoque ce que représente leur valeur
  - le nom des fonctions évoque la valeur qu'elles produisent ou la
    tâche qu'elles effectuent
  - les affectations sont déclarées près de l'endroit où elles sont
    utilisées

- Documentation
  - l'interface des fonctions est documentée avec JSDoc
  - la documentation décrit brièvement ce que font les fonctions
  - le type des paramètres et de la valeur de retour est correctement
    annoté
  - les commentaires sont utilisés avec parcimonie, et ils expliquent
    pourquoi un bout de code est nécessaire, non pas ce qu'il fait

## Auxiliaire d'enseignement

Lorsque vous soumettez une évaluation, un programme nommé `ta`
(_teaching assistant_) analyse automatiquement votre code à la recherche
de fautes communes, comme les variables globales, les fonctions trop
longues, etc. Afin de ne pas être pénalisé·e pour ces fautes, on suggère
d'exécuter `ta` sur votre ordinateur avant de soumettre votre travail.

Lorsque vous téléchargez un dépôt Classroom, celui-ci inclut déjà le
programme `ta`. Pour analyser votre code, lancez la commande suivante
dans votre terminal :

```sh
./ta
```

À moins que votre code soit sans fautes, le programme devrait afficher
une liste de commentaires. Par exemple :

```
error: Missing JSDoc comment.
   ┌─ /Users/maximepigeon/Developer/ta-test/index.js:7:1
   │
20 │  function renderCalendar(date) {
   │  ^

warning: Avoid explanatory comments. Comments should explain why the code is written this way, not what it does.
   ┌─ /Users/maximepigeon/Developer/ta-test/index.js:62:5
   │
62 │    // Append last row
   │    ^
```

Un commentaire de type `error` indique une erreur pour laquelle vous
serez pénalisé·e. Un commentaire de type `warning` vous invite à réviser
le bout de code en question ; ce n'est pas nécessairement une erreur,
mais ça pourrait l'être.
