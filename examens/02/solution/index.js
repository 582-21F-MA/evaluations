/**
 * Adds items to the cart.
 * @param {Map<string, number>} cart
 * @param {Array<string>} items
 * @returns {Map<string, number>}
 */
function addItems(cart, items) {
    cart = new Map(cart);
    for (const item of items) {
        const count = cart.get(item) ?? 0;
        cart.set(item, count + 1);
    }
    return cart;
}

expect(addItems(new Map(), ["apple"]))
    .toEqual(new Map([["apple", 1]]));
expect(addItems(new Map([["apple", 1]]), ["apple"]))
    .toEqual(new Map([["apple", 2]]));
expect(addItems(new Map(), ["apple", "banana"]))
    .toEqual(new Map([["apple", 1], ["banana", 1]]));

/**
 * Deletes items from the cart.
 * @param {Map<string, number>} cart
 * @param {Array<string>} items
 * @returns {Map<string, number>}
 */
function deleteItems(cart, items) {
    cart = new Map(cart);
    for (const item of items) {
        const count = cart.get(item);
        if (count === undefined) continue;
        if (count === 1) cart.delete(item);
        else cart.set(item, count - 1);
    }
    return cart;
}

expect(deleteItems(new Map([["apple", 2]]), ["apple"]))
    .toEqual(new Map([["apple", 1]]));
expect(deleteItems(new Map([["apple", 1]]), ["apple"]))
    .toEqual(new Map());
expect(deleteItems(new Map(), ["apple"]))
    .toEqual(new Map());
expect(deleteItems(new Map([["apple", 1]]), ["kiwi"]))
    .toEqual(new Map([["apple", 1]]));

/**
 * Returns a string representation of the cart.
 * @param {Map<string, number>} cart
 * @returns {string}
 */
function cartToString(cart) {
    let result = "";
    for (const pair of cart) {
        result += `${pair[1]} ${pair[0]}\n`;
    }
    return result;
}

expect(cartToString(new Map([["apple", 2], ["banana", 1]])))
    .toBe("2 apple\n1 banana\n");
expect(cartToString(new Map()))
    .toBe("");

function main() {
    let cart = new Map();
    const HELP = "add or delete item1 item2 ...";
    while (true) {
        const msg = `${cartToString(cart) || "Empty cart\n"}\n${HELP}`;
        const input = prompt(msg) ?? "";
        const words = input.split(" ");

        if (words.length < 2) {
            alert(`Error: write "add" or "delete" plus at least one item`);
            continue;
        }

        const cmd = words[0];
        const items = words.slice(1);

        if (cmd === "add") cart = addItems(cart, items);
        else if (cmd === "delete") cart = deleteItems(cart, items);
        else {
            alert(
                `Error: command "${cmd}" not found: write "add" or "delete"`,
            );
        }
    }
}
