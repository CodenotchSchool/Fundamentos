import { Mobile } from "./mobile";

let myMobile = new Mobile("iPhone 6", "Apple", "iPhone 6", "Rojo", 1200);

console.log(myMobile.getColor(), 
            myMobile.getModel(), 
            myMobile.getName(), 
            myMobile.getPrice(), 
            myMobile.getTradeMark());

myMobile.setColor("Naranja"); 
myMobile.setModel("iphone 16");
myMobile.setName("Mi Nuevo iPhone");
myMobile.setPrice(2000);
myMobile.setTradeMark("new Apple");

console.log(myMobile.getColor(), 
            myMobile.getModel(), 
            myMobile.getName(), 
            myMobile.getPrice(), 
            myMobile.getTradeMark());