// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./lib/Employee.js");

class Manager extends Employee {
    addOfficeNumber (officeNumber) {
    this.officeNumber = officeNumber;
    this.getOfficeNumber = function () {
        return officeNumber;
    }
    this.getRole = function() {
        return "Manager";
        }
    }
}

// module.exports = Manager;