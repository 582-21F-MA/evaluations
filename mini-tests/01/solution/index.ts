import { expect } from "bun:test";

function isCry(phrase: string): boolean {
    return phrase === phrase.toUpperCase();
}

expect(isCry("ab c?")).toBe(false);
expect(isCry("AB C?")).toBe(true);

function isSilence(phrase: string): boolean {
    return phrase.trim() === "";
}

expect(isSilence("ab c?")).toBe(false);
expect(isSilence(" ")).toBe(true);

function isQuestion(phrase: string): boolean {
    return phrase.trim()[phrase.length - 1] === "?";
}

expect(isQuestion("abc")).toBe(false);
expect(isQuestion("abc?")).toBe(true);

function bob(phrase: string): string {
    if (isSilence(phrase)) {
        return "Très bien, comme tu veux";
    }
    if (isQuestion(phrase) && isCry(phrase)) {
        return "Calme-toi, je sais ce que je fais";
    }
    if (isQuestion(phrase)) {
        return "Bien sûr";
    }
    if (isCry(phrase)) {
        return "Whoa, détends-toi";
    }
    return "Peu importe";
}

expect(bob("Ça va ?")).toBe("Bien sûr");
expect(bob("HEY")).toBe("Whoa, détends-toi");
expect(bob("ALLO ?")).toBe("Calme-toi, je sais ce que je fais");
expect(bob("")).toBe("Très bien, comme tu veux");
expect(bob(" ")).toBe("Très bien, comme tu veux");
expect(bob("Coucou")).toBe("Peu importe");
