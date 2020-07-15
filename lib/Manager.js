// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
        }
    }

// var test = new Manager("Colin", 20, "csam@gmail", 101);
// console.log(test);
// console.log(test.name);
// console.log(id);
module.exports = Manager;
