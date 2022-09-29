const {Person} = require ("./person");

let myPerson = new Person("Jose", "Herrera");
myPerson.height = 1.75;
myPerson.weight = 75;
myPerson.yearOfBirth = 1978;
console.log(myPerson);
console.log(myPerson.imc());
console.log(myPerson.age(2022));
myPerson.printAll();