# Projet 2 : Calendrier

Pour ce deuxième projet, votre tâche est de créer dynamiquement un
calendrier mensuel. Celui-ci doit afficher le nom du mois courant ainsi
que l'année. Le calendrier doit aussi inclure les jours de la semaine
(lundi, mardi, mercredi, etc.). Attention, le premier jour du mois ne
commence pas toujours le lundi. Votre calendrier doit prendre cela en
compte. Enfin, la semaine courante et le jour d'aujourd'hui doivent être
identifiés (par exemple, avec une couleur de fond différente).

## API Date

On vous rappelle que la fonction `Date` précédée du mot-clé `new`
retourne une objet qui représente la date d'aujourd'hui. Cette objet a
plusieurs méthode pour manipuler les dates. La méthode `getDate`, par
exemple, retourne le jour du mois.

```ts
const today = new Date();
const monthDay = today.getDate();
console.log(monthDay); // => 7
```

Les objets de type `Date` possède aussi une méthode nommée `getDay` qui
retourne un nombre représentant le jour de la semaine. Le nombre `0`
représente dimanche, le `1` lundi, et ainsi de suite.

```ts
const weekDay = today.getDay();
console.log(weekDay); // => 4 (jeudi)
```

La méthode `getMonth` retourne un nombre qui correspond au mois.
Attention, janvier est représenté par le nombre `0`, février `1`, et
ainsi de suite.

```ts
const month = today.getMonth();
console.log(month); // => 10 (novembre)
```

Enfin, la méthode `getFullYear` retourne l'année.

```ts
const year = today.getFullYear();
console.log(year) // => 2024
```

Si la fonction `Date` est appelée sans argument, alors l'objet retourné
représente la date d'aujourd'hui. On peut également créer un objet qui
représente un date en particulier. Pour ce faire, on applique la
fonction sur l'année, l'index du mois, et le jour du mois voulu.

```ts
const firstDayOfMonth = new Date(year, month, 1);
console.log(firstDayOfMonth); // => 5 (vendredi)
```

Le code ci-dessus, par exemple, crée un objet qui représente au premier
jour du mois courant.

## Conseils

Il n'est pas nécessaire d'utiliser la fonction `setInterval` pour mettre
à jour le calendrier. On prend en compte que la date courante est celle
au moment d'exécuter le script.

Quoiqu'on puisse muter un objet de type `Date`, on évitera de la faire
pour les raisons vues en classe. Cela dit, rien ne vous empêche de créer
une nouvelle date à partir d'une ancienne. 

```ts
const tomorrow = new Date(year, month, monthDay + 1);
```

Par exemple, le code ci-dessus crée un objet qui représente demain (peu
importe quel jour il est aujourd'hui). Si la valeur de `monthDay`
correspond au dernier jour du mois, l'objet crée correspondra au premier
jour du mois suivant.

## Remise

Le travail doit être remis dans un dépôt GitHub Classroom créé à cet
effet. Pour créer le dépôt, cliquez [ici][GitHub Classroom].

[GitHub Classroom]: https://classroom.github.com/a/s_V5SYNP
