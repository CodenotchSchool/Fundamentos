//// Definicion de Funciones

const evenNumbers = (num) =>
{
    for (let i=0; i <= num; i++)
    {
        if (i % 2 != 0)
        {
            console.log(i)
        }
    }
}

const myRevert = (myArray) =>
{
    let result = [];

    // for (let i = myArray.length - 1 ; i > -1; i--)
    // {
    //     result.push(myArray[i]);
    // }

    for (let dato of myArray)
    {
        result.unshift(dato);
    }

    return result;
}

const isRainbow = (colors) =>
{
    for (let i = 0; i < colors.length; i++)
    {
        if (colors[i].toLowerCase() == "rojo" || 
            colors[i].toLowerCase() == "naranja" || 
            colors[i].toLowerCase() == "amarillo" ||
            colors[i].toLowerCase() == "verde" ||
            colors[i].toLowerCase() == "azul" ||
            colors[i].toLowerCase() == "índigo" ||
            colors[i].toLowerCase() == "violeta" 
        ) 
        {
            console.log("El color: " + colors[i] + " esta en el arcoiris")
        }
        else
        {
            console.log("El color: " + colors[i] + " NO esta en el arcoiris")
        }
    }
}

const add = (myWords) => {
    let result = 0;

    for (let word of myWords)
    {
        result = result + word.length;
    }

    return result;
}

// Main
// evenNumbers(23);
// let revertido = myRevert(["p", "h", "t", 1]);
// console.log(revertido);
// isRainbow(["rojo", "Violeta", "Verde", "GRIS", "morado"]);

console.log(add(["casa", "mesa", "paco"]));