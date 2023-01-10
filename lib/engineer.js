const Employee = require("./Employee.js");
const htmlBlocks = require("./htmlBlocks.js");
class engineer extends Employee {
    constructor(name, id, email, github,) {
        super(name, id, email)
        this.github = github;
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github;
    }
    getHTML() {
        return htmlBlocks.engineer(this);
    }       
   
} 

module.exports = engineer;
