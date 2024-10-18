// @ts-ignore
import { expect } from "jsr:@std/expect";

////////////////////////////////////////////////////////////////////////////////
// 1.

type euros = number;
type transaction = { amount: euros; date: Date };

function newTransaction(amount: euros, date: Date): transaction {
    return { amount, date };
}

// @ts-ignore: ne pas modifier
Deno.test("doit créer un objet transaction", () => {
    const date = new Date();
    const actual = newTransaction(10, date);
    const expected = { amount: 10, date };
    expect(actual).toEqual(expected);
});

////////////////////////////////////////////////////////////////////////////////
// 2.

type account = { name: string; balance: euros; transactions: transaction[] };

function newAccount(name: string, balance = 0): account {
    return { name, balance, transactions: [] };
}

// @ts-ignore: ne pas modifier
Deno.test("doit créer un objet account (balance non donnée)", () => {
    const actual = newAccount("Okarun");
    const expected = { name: "Okarun", balance: 0, transactions: [] };
    expect(actual).toEqual(expected);
});

// @ts-ignore: ne pas modifier
Deno.test("doit créer un objet account (balance donnée)", () => {
    const actual = newAccount("Momo", 10);
    const expected = { name: "Momo", balance: 10, transactions: [] };
    expect(actual).toEqual(expected);
});

////////////////////////////////////////////////////////////////////////////////
// 3.

function deposit(acc: account, amount: euros): account {
    const t = newTransaction(amount, new Date());
    return {
        name: acc.name,
        balance: acc.balance + amount,
        transactions: acc.transactions.concat([t]),
    };
}

// @ts-ignore: ne pas modifier
Deno.test("doit déposer le montant dans le compte", () => {
    const a = deposit(newAccount("Okarun"), 10);
    const actual = a.balance;
    const expected = 10;
    expect(actual).toEqual(expected);
});

// @ts-ignore: ne pas modifier
Deno.test("ne doit pas modifier le compte original", () => {
    const a = newAccount("Momo");
    deposit(a, 20);
    const actual = a.balance;
    const expected = 0;
    expect(actual).toEqual(expected);
});

// @ts-ignore: ne pas modifier
Deno.test("doit ajouter une transaction", () => {
    const a = deposit(newAccount("Okarun"), 10);
    const actual = a.transactions[0].amount;
    const expected = 10;
    expect(actual).toEqual(expected);
});
