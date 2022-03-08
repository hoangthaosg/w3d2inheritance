'use strict'

/**
 * Question 1
 */
let person = {
    name: '',
    dateOfBirth: '',
    getName: function() {
        return this.name;
    },
    setName: function(val) {
        this.name = val
    }
}

let john = Object.create(person);
john.setName('John');
john.dateOfBirth = '1998-12-10';

console.log('The person\'s name is', john.getName());
console.log(john.getName(), 'was born on', john.dateOfBirth);

/**
 * Question 2
 */
let employee = Object.setPrototypeOf(person, {
    salary: 0,
    hireDate: new Date(),
    doJob: function(jobTitle) {
        console.log(this.getName(), 'is a', jobTitle, 'who earns $', this.salary)
    }
}); 

let anna = Object.create(employee);
anna.setName('Anna');
anna.salary = 249995.50;
anna.doJob('Programmer');


/**
 * Question 3
 */
function Person(_name, _dob) {
    this.name = _name;
    this.dateOfBirth = _dob;
}

Person.prototype.setName = function(val) {
    this.name = val;
}

Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.toString = function() {
    return '{Name: '+this.getName()+', DateOfBirth: '+this.dateOfBirth+'}';
}

let peter = new Person('Peter', '1985-11-10');
console.log(peter.toString())