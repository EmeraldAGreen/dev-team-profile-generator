const Engineer = require('./lib/engineer')

describe("Engineer", () => {
    it("should return an object", () => {
        const obj = new Engineer();
        expect(typeof(obj)).toBe("object")
    })
    it("should set Github username via getGithub()", () => {
        const github = "GitHubUser"
        const obj = new Engineer();
        expect(obj.github).toBe(github)
    })
    it ("should return \"Engineer\" via getRole()", () => {
        const name = "Test"
        const obj = new Engineer(name)
        expect(obj.name).toBe(name)
    })
})