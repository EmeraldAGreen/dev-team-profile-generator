const Employee = require('./employee')
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super (name, id, email)
        this.github=github
    }
    getGithub() {
        return `Github: [${this.github}](https://github.com/${this.github})`
    }
    getRole() {
        return 'Engineer'
    }
}
