class Contacts
{
    constructor()
    {
        this.people = [];
    }

    printPersons()
    {
        this.people.forEach(person => person.printAll());
    }
}

module.exports = {Contacts};


