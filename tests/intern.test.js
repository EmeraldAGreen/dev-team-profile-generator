const Employee = require('./lib/employee')

describe("Employee", () => {
    it("should return an object", () => {
        const obj = new Employee();
        expect(typeof(obj)).toBe("object")
    })
    it ("should set 'name' when created", () => {
        const name = "Test"
        const obj = new Employee(name)
        expect(obj.name).toBe(name)
    })
    it ("should set 'id' when created", () => {
        const id = 1
        const obj = new Employee(id)
        // example had ("foo", id)
        expect(obj.id).toEqual(id)
    })
    it ("should set 'email' when created", () => {
        const email = "user@email.com"
        const obj = new Employee(email)
        // what should we put? example had ("foo", 1, email) but what is foo
        expect(obj.email).toBe(email)
    })
    describe("getName", () => {
        it ("should set name via getName()", () => {
            const name = "Test"
            const obj = new Employee(name)
            expect(obj.getName()).toBe(name)
        })
    })
    describe ("getId", () => {
        it ("should set id via getId()", () => {
            const id = 1
            const obj = new Employee(id)
            // example has ("foo", id)
            expect(obj.getId()).toBe(id)
        })
    describe("getEmail", () => {
        it("should set email via getEmail()", () => {
            const email = "test@test.com";
            const obj = new Employee(email);
            // again example has ("foo", 1, email)
            expect(obj.getEmail()).toBe(email);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const role= "Employee";
            const obj = new Employee("Test", 1, "user@email.com");
            expect(obj.getRole()).toBe(role);
        });
    });
    })
})