import * as utils from "./utils.ts";

describe("math module", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(utils.sum(1, 2)).toBe(3);
    });

    test("adds 1 * 2 to equal 2", () => {
        expect(utils.mul(1, 2)).toBe(2);
    });
});
