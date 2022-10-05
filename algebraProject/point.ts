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


}