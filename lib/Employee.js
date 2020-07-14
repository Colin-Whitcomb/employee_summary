// TODO: Write code to define and export the Employee class

var Employee = function(name, ID, email){
    this.name = name;
    this.ID = ID;
    this.email = email;
    this.getName = function() {
        return name; 
    }
    this.getId = function(){
        return ID;
    }
    this.getEmail = function() {
        return email;
    }
    this.getRole = function() {
        return "Employee";
    }
    
}

var test = new Employee("colin", 1, "csw@gmail.com");

console.log(test);
console.log(test.getName());
console.log(test.getId());
console.log(test.getEmail());
console.log(test.getRole());
module.exports = Employee;