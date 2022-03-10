const Engineer = require('./lib/engineer')

describe("Engineer", () => {
        const Engineer = new Engineer();
    test("defines getGitHub()", () => {
        expect(typeof Engineer.getGithub).toBe("function");
    })
    it ("should set Github username via getGithub()", () => {
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