# Mini-test 1

> Pondération : 5% \
> Remise : avant la fin du cours

Concevez les trois fonctions ci-dessous, ainsi que les alias de type
nécessaires. Placez le code dans le fichier `main.ts` inclus dans votre
dépôt. Les tests vous sont déjà donnés (vous ne pouvez pas les
modifier). Pour tester votre code, exécutez la commande `Deno test
main.ts`. La même commande sera utilisée pour la correction.

1.  Une fonction nommée `newTransaction` qui, étant donnée un montant en
    euros et un objet du type natif `Date`, retourne un objet de type
    `transaction` ayant comme propriété `amount` et `date`.

2.  Une fonction nommée `newAccount` qui, étant donnée un nom et une
    balance optionnelle en euros, retourne un objet de type `account`
    ayant comme propriétés `name`, `balance` et `transactions`. Si la
    balance n'est pas donnée au moment de créer le compte, alors
    celle-ci est de `0`. La propriété `transactions` aura comme valeur
    un tableau de `transaction`.

2.  Une fonction nommée `deposit` qui, étant donnée un objet de type
    `account` et un montant en euros, retourne un nouvel `account`. Le
    nouvel `account` doit avoir la nouvelle balance du compte une fois
    le montant déposé. Une nouvelle `transaction` doit également être
    ajoutée automatiquement dans le nouvel `account`. Bien sûr, le
    montant de la transaction doit correspondre au montant déposé.
    L'objet `account` sur lequel la fonction est appliquée ne doit pas
    être modifié.

## Remise

L'évaluation doit être remise dans un dépôt GitHub Classroom. [Cliquez
ici pour créer le dépôt][Classroom].

[Classroom]: https://classroom.github.com/a/j9pEX5_F
