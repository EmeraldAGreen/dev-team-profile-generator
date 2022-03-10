const Manager = require('./lib/engineer')

describe("Manager", () => {
    it("should return an object", () => {
        const obj = new Manager();
        expect(typeof(obj)).toBe("object")
    })
    it("should set Github username via getGithub()", () => {
        const officeNumber = 1
        const obj = new Manager();
        expect(obj.officeNumber).toBe(officeNumber)
    })
    it ("should return \"Manager\" via getRole()", () => {
        const name = "Test"
        const obj = new Manager(name)
        expect(obj.name).toBe(name)
    })
})