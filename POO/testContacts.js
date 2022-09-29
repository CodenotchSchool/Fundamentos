const { Person } = require("./person");
const {Contacts} = require ("./contacts");

let person1 = new Person("Jose", "Herrera");
let person2 = new Person("Ana", "Garcia");
let person3 = new Person("Javier", "Gomez");

let myContacts = new Contacts();

myContacts.people.push(person1, person2, person3);
myContacts.printPersons();
