function main() {
    const dice = prompt("Dés")?.split(" ").map(Number);
    if (
        !dice
        || dice.length !== 5
        || !dice.every(d => Number.isInteger(d) && d >= 1 && d <= 6)
    ) return alert("Erreur: vous devez saisir 5 chiffres entre 1 et 6");
    const category = prompt("Catégorie") || "";
    alert(`Score: ${score(dice, category)}`);
}

// main();

/**
 * Scores the given dice roll with the given Yahtzee category.
 * @param {Array<number>} dice
 * @param {string} category
 * @returns {number}
 */
function score(dice, category) {
    switch (category) {
        case "Un":
            return scoreNumber(dice, 1);
        case "Deux":
            return scoreNumber(dice, 2);
        case "Trois":
            return scoreNumber(dice, 3);
        case "Quatre":
            return scoreNumber(dice, 4);
        case "Cinq":
            return scoreNumber(dice, 5);
        case "Six":
            return scoreNumber(dice, 6);
        case "Brelan":
            return scoreMinOfAKind(dice, 3);
        case "Carré":
            return scoreMinOfAKind(dice, 4);
        case "Full":
            return scoreFullHouse(dice);
        case "Petite suite":
            return scoreSmallStraight(dice);
        case "Grande suite":
            return scoreBigStraight(dice);
        case "Yahtzee":
            return scoreYahtzee(dice);
        case "Chance":
            return scoreChance(dice);
        default:
            return 0;
    }
}

expect(score([1, 1, 1, 5, 6], "Brelan")).toBe(14);
expect(score([2, 2, 2, 2, 3], "Carré")).toBe(11);
expect(score([3, 3, 3, 5, 5], "Full")).toBe(25);
expect(score([1, 2, 3, 4, 6], "Petite suite")).toBe(30);
expect(score([2, 3, 4, 5, 6], "Grande suite")).toBe(40);
expect(score([4, 4, 4, 4, 4], "Yahtzee")).toBe(50);
expect(score([1, 2, 3, 4, 5], "Chance")).toBe(15);
expect(score([3, 3, 3, 3, 2], "Trois")).toBe(12);
expect(score([1, 1, 3, 5, 6], "Brelan")).toBe(0);
expect(score([1, 2, 3, 4, 5], "Carré")).toBe(0);
expect(score([1, 1, 2, 3, 4], "Full")).toBe(0);
expect(score([1, 1, 3, 5, 6], "Petite suite")).toBe(0);
expect(score([1, 2, 3, 5, 6], "Grande suite")).toBe(0);
expect(score([1, 1, 1, 1, 2], "Yahtzee")).toBe(0);
expect(score([2, 3, 4, 5, 6], "Un")).toBe(0);
expect(score([1, 1, 3, 4, 5], "Deux")).toBe(0);
expect(score([1, 2, 3, 4, 5], "Unknown")).toBe(0);
expect(score([1, 1, 1, 3, 5], "Un")).toBe(3);
expect(score([2, 2, 4, 5, 6], "Deux")).toBe(4);
expect(score([1, 2, 4, 4, 4], "Quatre")).toBe(12);
expect(score([5, 5, 5, 5, 5], "Cinq")).toBe(25);
expect(score([6, 6, 1, 2, 3], "Six")).toBe(12);

/**
 * Score dice matching the given number.
 * @param {Array<number>} dice
 * @param {number} n
 * @returns {number}
 */
function scoreNumber(dice, n) {
    return n * dice.filter(die => die === n).length;
}

expect(scoreNumber([1, 1, 1, 5, 6], 1)).toBe(3);
expect(scoreNumber([3, 6], 1)).toBe(0);

/**
 * Score min of a kind where min is the minimum number of matching dice.
 * @param {Array<number>} dice
 * @param {number} min
 * @returns {number}
 */
function scoreMinOfAKind(dice, min) {
    for (const die of dice) {
        const matchingDice = dice.filter(d => d === die);
        if (matchingDice.length >= min) {
            return sum(dice);
        }
    }
    return 0;
}

expect(scoreMinOfAKind([1, 1, 1, 5, 6], 3)).toEqual(14);
expect(scoreMinOfAKind([2, 2, 2, 2, 3], 4)).toEqual(11);
expect(scoreMinOfAKind([1, 1, 3, 5, 6], 3)).toEqual(0);
expect(scoreMinOfAKind([1, 2, 3, 4, 5], 4)).toEqual(0);

/**
 * Return the sum of the dice.
 * @param {Array<number>} dice
 * @returns {number}
 */
function sum(dice) {
    return dice.reduce((acc, die) => acc + die, 0);
}

expect(sum([1, 1])).toBe(2);
expect(sum([1, 2, 3])).toBe(6);

/**
 * Score full house (2 and 3 matching dice).
 * @param {Array<number>} dice
 * @returns {number}
 */
function scoreFullHouse(dice) {
    const sorted = dice.toSorted();
    return (areSame(sorted.slice(0, 2)) && areSame(sorted.slice(2)))
            || (areSame(sorted.slice(0, 3)) && areSame(sorted.slice(3)))
        ? 25
        : 0;
}

expect(scoreFullHouse([3, 3, 3, 5, 5])).toEqual(25);
expect(scoreFullHouse([1, 2, 1, 2, 1])).toEqual(25);
expect(scoreFullHouse([1, 1, 1, 2, 2])).toEqual(25);
expect(scoreFullHouse([3, 3, 3, 3, 5])).toEqual(0);
expect(scoreFullHouse([1, 1, 2, 3, 4])).toEqual(0);

/**
 * Determine if the given dice all match.
 * @param {Array<number>} dice
 * @returns {boolean}
 */
function areSame(dice) {
    const first = dice[0];
    return dice.every(die => die === first);
}

expect(areSame([1, 1])).toBe(true);
expect(areSame([1, 2])).toBe(false);

/**
 * Score small straight (strict sequence of 4 dice).
 * @param {Array<number>} dice
 * @returns {number}
 */
function scoreSmallStraight(dice) {
    const sorted = uniques(dice.toSorted());
    return isSequence(sorted.slice(1)) || isSequence(sorted.slice(0, -1))
        ? 30
        : 0;
}

expect(scoreSmallStraight([1, 2, 3, 4, 6])).toEqual(30);
expect(scoreSmallStraight([1, 3, 4, 5, 6])).toEqual(30);
expect(scoreSmallStraight([1, 2, 2, 3, 4])).toEqual(30);
expect(scoreSmallStraight([1, 1, 3, 5, 6])).toEqual(0);

/**
 * Returns the array with duplicates removed.
 * @param {Array<number>} numbers
 * @returns {Array<number>}
 */
function uniques(numbers) {
    return numbers.filter((n, i) => numbers.indexOf(n) === i);
}

expect(uniques([])).toEqual([]);
expect(uniques([1, 2, 3])).toEqual([1, 2, 3]);
expect(uniques([1, 1, 2])).toEqual([1, 2]);
expect(uniques([1, 1, 1])).toEqual([1]);

/**
 * Determine if the given dice form a strict sequence (e.g., 2, 3, 4).
 * @param {Array<number>} dice
 * @returns {boolean}
 */
function isSequence(dice) {
    let prev = dice[0];
    for (let i = 1; i < dice.length; i++) {
        const die = dice[i];
        if (die !== prev + 1) return false;
        prev = die;
    }
    return true;
}

expect(isSequence([1, 2, 3])).toBe(true);
expect(isSequence([1, 2, 4])).toBe(false);

/**
 * Score big straight (strict sequence of 5 dice).
 * @param {Array<number>} dice
 * @returns {number}
 */
function scoreBigStraight(dice) {
    const sorted = dice.toSorted();
    return isSequence(sorted) ? 40 : 0;
}

expect(scoreBigStraight([2, 3, 4, 5, 6])).toEqual(40);
expect(scoreBigStraight([1, 2, 3, 5, 6])).toEqual(0);
expect(scoreBigStraight([2, 1, 5, 4, 3])).toEqual(40);

/**
 * Score yahtzee (5 matching dice).
 * @param {Array<number>} dice
 * @returns {number}
 */
function scoreYahtzee(dice) {
    return areSame(dice) ? 50 : 0;
}

expect(scoreYahtzee([4, 4, 4, 4, 4])).toEqual(50);
expect(scoreYahtzee([1, 1, 1, 1, 2])).toEqual(0);

/**
 * Score chance (sum of all dice).
 * @param {Array<number>} dice
 * @returns {number}
 */
function scoreChance(dice) {
    return sum(dice);
}

expect(scoreChance([1, 2, 3, 4, 5])).toEqual(15);
expect(scoreChance([1, 1, 1, 1, 1])).toEqual(5);
