import { Mobile } from "./mobile";
import {MobileCollection} from "./mobileCollection"

let myMobile1 = new Mobile("My iPhone", "Apple", "iPhone 16", "Rojo", 1200);
let myMobile2 = new Mobile("My Samsung", "Samsung", "Samsung Galaxy S 23", "Verde", 2200);
let myMobile3 = new Mobile("My Nokia", "Microsoft", "Nokia 55", "Verde", 1000);
let myMobile4 = new Mobile("My Ericson", "Sony", "Ericson 4200", "Amarillo", 900);

let myArray = [myMobile1, myMobile2, myMobile3, myMobile4];

let myCollection = new MobileCollection(myArray);

myCollection.setTotalPrice(3800);
console.log(myCollection.getMobiles());
console.log(myCollection.getTotalPrice());

let mobile1 = new Mobile("iPhone", "Apple1", "iPhone 161", "Rojo1", 460);
let mobile2 = new Mobile("Samsung", "Samsung1", "Samsung Galaxy S 231", "Verde1", 320);
let mobile3 = new Mobile("Nokia", "Microsoft1", "Nokia 551", "Verde1", 100);
let mobile4 = new Mobile("Ericson", "Sony1", "Ericson 42001", "Amarillo1", 600);

let myArray2 = [mobile1, mobile2, mobile3, mobile4];
myCollection.setMobiles(myArray2);
console.log(myCollection.getMobiles());
console.log(myCollection.getTotalPrice());





