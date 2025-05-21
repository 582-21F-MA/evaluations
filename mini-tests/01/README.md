# Mini-test 1

> Remise : 2 juin (avant le cours)\
> Pondération : 10%

Bob est un adolescent très cool. Il n'est jamais très enthousiaste — ce
ne serait pas cool. Voici les réponses de Bob lorsqu'on lui parle ou
pose une question.

- Bob répond « Bien sûr » lorsqu'on lui pose une question. Une question
  est une phrase qui se termine par un point d'interrogation.

- Il dit « Whoa, détends-toi » si on lui parle EN CRIANT. Une chaîne
  dont tous les caractères sont en majuscule est considérée comme un
  cri.

- Il dit « Calme-toi, je sais ce que je fais » si on lui pose une
  question EN CRIANT.

- Il répond au silence par : « Très bien, comme tu veux ». Un chaîne
  vide ou qui contient seulement des espaces est considérée comme un
  silence.

- À tout le reste, Bob répond : « Peu importe ».

## Consignes

Votre dépôt inclut un fichier nommé `index.ts` contenant le squelette
d'un programme qui permet de déterminer la réponse de Bob lorsqu'on lui
parle ou pose une question. Complétez le programme de sorte à ce que la
fonction nommée `bob` passe tous les tests inclus.

Si vous ajoutez des fonctions auxiliaires au programme, assurez-vous
d'inclure des exemples pour celles-ci.

Pour obtenir la note de passage, vous devez utiliser seulement les
constructions et les fonctions natives vues en classe, soit dans les
notes de cours ou les devoirs et exercices.

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
   `bun lint`. Portez attention aux avertissements, et corrigez les
   erreurs.
5. Pour soumettre le travail, exécutez la commande `bun submit`.

[Classroom]: https://classroom.github.com/a/xlJIaCEf

## Critères d'évaluation

- Conception (5 points)
  - Les consignes sont respectées.
  - Chaque tâche du programme est réalisée par une fonction auxiliaire.
  - Le code ne contient pas de répétitions inutiles.

- Lisibilité (3 points)
  - Les longues lignes (plus de 80 caractères) sont formatées de sorte à
    aligner verticalement les arguments.
  - Les valeurs importantes et celles qui se répètent sont affectées à
    un nom explicite.
  - Le nom des affectations évoque ce que représente leur valeur.
  - Le nom des fonctions évoque la valeur qu'elles produisent ou
    l'opération qu'elles effectuent.

- Documentation (2 points)
  - Le type des paramètres et de la valeur de retour est correctement
    annoté.
  - Chaque fonction auxiliaire inclut au moins deux exemples pertinents.
