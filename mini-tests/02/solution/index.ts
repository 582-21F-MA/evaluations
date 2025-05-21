import { expect } from "bun:test";

function zip(arrays: Array<Array<unknown>>): Array<Array<unknown>> {
    const arrLeft = arrays[0];
    const arrRight = arrays[1];

    if (!arrLeft || !arrRight) return [];

    const minLength = Math.min(arrLeft.length, arrRight.length);
    const pairs = [];

    for (let i = 0; i < minLength; i++) {
        const elLeft = arrLeft[i];
        const elRight = arrRight[i];
        const pair = [elLeft, elRight];
        pairs.push(pair);
    }

    return pairs;
}

expect(
    zip([[1, 2, 3], ["a", "b", "c"]]),
).toEqual(
    [[1, "a"], [2, "b"], [3, "c"]],
);

expect(
    zip([[1, 2, 3], [1, 2, 3]]),
).toEqual(
    [[1, 1], [2, 2], [3, 3]],
);

expect(
    zip([[1, 2], [true, false]]),
).toEqual(
    [[1, true], [2, false]],
);

expect(
    zip([[1], [1]]),
).toEqual(
    [[1, 1]],
);

expect(
    zip([["a", "b", "c"], ["b", "c"]]),
).toEqual(
    [["a", "b"], ["b", "c"]],
);

expect(
    zip([]),
).toEqual(
    [],
);
