import { Point } from "./point";

let myPoint = new Point(10,20);

console.log(myPoint + "");
myPoint.setX(30);
myPoint.setY(40);
console.log(myPoint.getX())
console.log(myPoint.getY())
console.log(myPoint.distanceToOrigin())
console.log(myPoint.calculateDistance(new Point(50,50)));
