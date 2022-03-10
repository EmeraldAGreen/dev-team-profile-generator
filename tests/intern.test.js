const Intern = require('./lib/engineer')

describe("Intern", () => {
    it("should return an object", () => {
        const obj = new Intern();
        expect(typeof(obj)).toBe("object")
    })
    it("should set school via getSchool()", () => {
        const school = "schoolName"
        const obj = new Intern();
        expect(obj.school).toBe(school)
    })
    it ("should return \"Intern\" via getRole()", () => {
        const name = "Test"
        const obj = new Intern(name)
        expect(obj.name).toBe(name)
    })
})