const Intern = require('../lib/intern')

describe("Intern", () => {
    it("should return an object", () => {
        const obj = new Intern();
        expect(typeof obj).toBe("object")
    })
    it("should get school via getSchool()", () => {
        const school = "schoolName"
        const obj = new Intern("TestName", 22, "email@mail.com", school);
        expect(obj.getSchool()).toBe(school)
    })
    it ("should return \"Intern\" via getRole()", () => {
        const obj = new Intern()
        expect(obj.getRole()).toBe("Intern")
    })
})