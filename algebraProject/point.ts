export class Point
{
    constructor(private x:number, private y:number){};

    public setX(x:number)
    {
        this.x = x;
    }

    public setY(y:number)
    {
        this.y = y;
    }

    public getX():number
    {
        return this.x;
    }

    
    public getY():number
    {
        return this.y;
    }

    public toString():string
    {
        return "(" + this.x + ", " + this.y + ")";
    }

    public distanceToOrigin():number
    {
        let result = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return result;
    }

    public calculateDistance(point:Point):number
    {
        let result = Math.sqrt(Math.pow( point.x - this.x, 2) + 
                               Math.pow( point.y - this.y, 2) );
        return result;
    }


}