const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    it("should return an object", () => {
        const obj = new Engineer();
        expect(typeof obj).toBe("object")
    })
    it ("should get Github username via getGithub()", () => {
        const github = "GitHubUser"
        const obj = new Engineer("TestName", 22, "email@mail.com", github);
        expect(obj.getGithub()).toBe(github)
    })
    it ("should return \"Engineer\" via getRole()", () => {
        const obj = new Engineer()
        expect(obj.getRole()).toBe("Engineer")
    })
})