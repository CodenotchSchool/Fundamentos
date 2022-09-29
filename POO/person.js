class Person
{
    constructor(name, surname)
    {
        this.name = name;
        this.surname = surname;
        this.height;
        this.weight;
        this.isVegetarian;
        this.yearOfBirth;
    }

    imc()
    {
       let result = this.weight / Math.pow(this.height, 2);
       return result;
    }

    age(year)
    {
        let result = year - this.yearOfBirth;
        return result;
    }

    printAll()
    {
        for (let atributo in this)
        {
            console.log( atributo + "-" + this[atributo])
        }
    }

}

module.exports = {Person};
