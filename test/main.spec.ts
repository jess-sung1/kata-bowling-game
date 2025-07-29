import { main } from "../src/main";

describe("Main", () => {
    it("should fail the test", () => {
        expect(main()).toBe(false);
    });
});
