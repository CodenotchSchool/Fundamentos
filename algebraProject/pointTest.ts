import { Point } from "./point";

let myPoint = new Point(10,20);

console.log(myPoint + "");
myPoint.setX(0);
myPoint.setY(0);
console.log(myPoint.getX())
console.log(myPoint.getY())
console.log(myPoint.distanceToOrigin())
console.log(myPoint.calculateDistance(new Point(50,50)));
console.log(myPoint.calculateQuadrant());

