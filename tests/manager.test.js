const Manager = require('../lib/manager')

describe("Manager", () => {
    it("should return an object", () => {
        const obj = new Manager();
        expect(typeof obj).toBe("object")
    })
    it("should get office number via getOfficeNumber()", () => {
        const officeNumber = 1
        const obj = new Manager("TestName", 22, "email@mail.com", officeNumber);
        expect(obj.getOfficeNumber()).toBe(officeNumber)
    })
    it ("should return \"Manager\" via getRole()", () => {
        const obj = new Manager()
        expect(obj.getRole()).toBe("Manager")
    })
})