// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor (name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.getGithub = function () {
        return github;
    }
    this.getRole = function() {
        return "Engineer";
        }
    }
}

// var test = new Engineer;
// console.log(test);
module.exports = Engineer;
