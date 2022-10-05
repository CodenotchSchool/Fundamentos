import { Triangle } from "./triangle";
import { Point } from "./point";

let myTriangle = new Triangle (new Point(0,0), new Point(0,10), new Point(10,0));

console.log(myTriangle.calculateLengthSides());