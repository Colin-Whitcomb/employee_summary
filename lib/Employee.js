// TODO: Write code to define and export the Employee class

class Employee {
    constructor (name, ID, email){
    this.name = name;
    this.ID = ID;
    this.email = email;
    }
    getName() {
        return this.name; 
    }
    getId () {
        return this.ID;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
    
}

// var test = new Employee("colin", 1, "csw@gmail.com");

// console.log(test);
// console.log(test.getName());
// console.log(test.getId());
// console.log(test.getEmail());
// console.log(test.getRole());
module.exports = Employee;