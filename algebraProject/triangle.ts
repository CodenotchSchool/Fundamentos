import {Point} from "./point";

export class Triangle
{
    constructor(private vertex1: Point,
                private vertex2: Point,
                private vertex3: Point){}

    public calculateLengthSides(): number[]
    {
        let distance1 = this.vertex1.calculateDistance(this.vertex2);
        let distance2 = this.vertex2.calculateDistance(this.vertex3);
        let distance3 = this.vertex3.calculateDistance(this.vertex1);
        let result = [distance1, distance2, distance3];

        return result;
    }
}