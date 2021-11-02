import { sum } from "../src/utils/sum";

describe("Hello Tests!", () => {
    it("Yo", () => {
        const result = sum(1,2,3,4,5)
        expect(result).toBe(15)
    })
})