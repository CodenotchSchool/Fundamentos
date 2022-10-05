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

    public calculateQuadrant():number
    {
        let result;

        if (this.x == 0 || this.y ==  0)
        {
            result = 0;
        }
        else if (this.x > 0 && this.y > 0)
        {
            result = 1;
        }
        else if (this.x < 0 && this.y > 0)
        {
            result = 2;
        }
        else if (this.x < 0 && this.y < 0)
        {
            result = 3;
        }
        else
        {
            result = 4;
        }

        return result;
    }

    public calculateNearest(points : Point[]):Point
    {
        let nearest:Point = this;
        let minDistance:number = Number.MAX_VALUE;

        for (let point of points)
        {
            let distance = this.calculateDistance(point);
            if (distance < minDistance)
            {
                minDistance = distance;
                nearest = point;
            }
        }

        return nearest;
    }
}