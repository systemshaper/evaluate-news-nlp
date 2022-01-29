import { getKey } from "../client"

describe("Testing form submission", () => {
    test("test the getKey function", async () => {
        expect(getKey).toEqual(expect.anything())
    })
})