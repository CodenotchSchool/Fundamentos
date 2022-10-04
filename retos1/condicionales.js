/////////////////////////////
/// Definición de Funciones
/////////////////////////////

// const zodiac = (day, month) => {
//     let resultado;
    
//     if  ( (month.toLowerCase() == "marzo" && day > 20) ||
//           (month.toLowerCase() == "abril" && day < 20) )
//     {
//         resultado = "Aries"
//     } 
//     else if ( (month.toLowerCase() == "abril" && day > 19) ||
//               (month.toLowerCase() == "mayo" && day < 22) )
//     {
//         resultado = "Tauro"
//     } 
//     else if ( (month.toLowerCase() == "mayo" && day > 20) ||
//               (month.toLowerCase() == "junio" && day < 21) )
//     {
//         resultado = "Géminis"
//     } 
//     else if ( (month.toLowerCase() == "junio" && day > 20) ||
//               (month.toLowerCase() == "julio" && day < 23) )
//     {
//         resultado = "Cáncer"
//     } 
//     else if ( (month.toLowerCase() == "julio" && day > 22) ||
//               (month.toLowerCase() == "agosto" && day < 23) )
//     {
//         resultado = "Leo"
//     } 
//     else if ( (month.toLowerCase() == "agosto" && day > 22) ||
//               (month.toLowerCase() == "septiembre" && day < 23) )
//     {
//         resultado = "Virgo"
//     } 
//     else if ( (month.toLowerCase() == "septiembre" && day > 22) ||
//               (month.toLowerCase() == "octubre" && day < 23) )
//     {
//         resultado = "Libra"
//     } 
//     else if ( (month.toLowerCase() == "octubre" && day > 22) ||
//               (month.toLowerCase() == "noviembre" && day < 22) )
//     {
//         resultado = "Escorpio"
//     }
//     else if ( (month.toLowerCase() == "noviembre" && day > 21) ||
//               (month.toLowerCase() == "diciembre" && day < 22) )
//     {
//         resultado = "Sagitario"
//     }    
//     else if ( (month.toLowerCase() == "diciembre" && day > 21) ||
//               (month.toLowerCase() == "enero" && day < 20) )
//     {
//         resultado = "Capricornio"
//     }     
//     else if ( (month.toLowerCase() == "enero" && day > 19) ||
//               (month.toLowerCase() == "febrero" && day < 19) )
//     {
//         resultado = "Acuario"
//     }  
//     else
//     {
//         resultado = "Piscis"
//     } 

//     return resultado;
// }

const continent = (country) => {

    if (country.toLowerCase() == "españa" || 
        country.toLowerCase() == "francia" ||
        country.toLowerCase() == "portugal" ||
        country.toLowerCase() == "alemania" ||
        country.toLowerCase() == "italia")
    {
        console.log("El pais " + country + " pertecene al continente Europeo")
    }
    else if (country.toLowerCase() == "estados unidos" || 
             country.toLowerCase() == "mejico" ||
             country.toLowerCase() == "canada" ||
             country.toLowerCase() == "brasil" ||
             country.toLowerCase() == "puerto rico")
    {
        console.log("El pais " + country + " pertecene al continente Americano")
    }
    else if (country.toLowerCase() == "australia" || 
             country.toLowerCase() == "nueva zelanda" ||
             country.toLowerCase() == "fiyi" ||
             country.toLowerCase() == "tuvalu" ||
             country.toLowerCase() == "micronesia")
    {
        console.log("El pais " + country + " pertecene al continente de Oceania")
    }
    else if (country.toLowerCase() == "china" || 
             country.toLowerCase() == "japón" ||
             country.toLowerCase() == "india" ||
             country.toLowerCase() == "camboya" ||
             country.toLowerCase() == "corea del sur")
    {
        console.log("El pais " + country + " pertecene al continente Asiatico")
    }
    else if (country.toLowerCase() == "argelia" || 
             country.toLowerCase() == "camerún" ||
             country.toLowerCase() == "angola" ||
             country.toLowerCase() == "egipto" ||
             country.toLowerCase() == "sudafrica")
    {
        console.log("El pais " + country + " pertecene al continente Africano")
    }
    else
    {
        console.log("El pais " + country + " no está regitrado")
    }
}

const isEven = (number) => 
{
    if (number % 2 == 0)
    {
        console.log("El numero es par")
    }
    else
    {
        console.log("El numero es impar")
    }
}

/////////////////////////////
/// Main
/////////////////////////////

// console.log(zodiac(20, "Febrero"));
console.log(continent("españa"));
continent("España");
isEven(22);
isEven(13);
