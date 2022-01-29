import { validateInput } from "../client";

describe("Testing validateInput function", () => {
    test("test that providing text returns true", () => {
        expect(validateInput("sample text")).toBe(true)
    })
    test("test that submitting empty field returns false", () => {
        expect(validateInput("")).toBe(false)
    })
})
