// Definición de las funciones

const hasEven = (myNumbers) => 
{
    let result;
    let index = 0;
    while (index < myNumbers.length && myNumbers[index] % 2 != 0)
    {
        index++;
    }

    result = (index < myNumbers.length);

    return result;
}

const startWithM = (myNames) => 
{
    let result;
    let index = 0;
    while (index < myNames.length && myNames[index][0] == "M")
    {
        index++;
    }

    result = (index >= myNames.length);

    return result;
}

// Main
// console.log(hasEven([3,  23, 4, 7]));
console.log(startWithM(["Medro",  "Mavier", "Muis"]));