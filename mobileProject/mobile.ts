export class Mobile
{
    constructor(private name: string, 
                private tradeMark:string,
                private model: string,
                private color: string,
                private price: number)
    {}

    public setName(name: string)
    {
        this.name = name;
    }

    public setTradeMark(tradeMark: string)
    {
        this.tradeMark = tradeMark;
    }

    public setModel(model: string)
    {
        this.model = model;
    }

    public setColor(color: string)
    {
        this.color = color;
    }

    public setPrice(price: number)
    {
        this.price = price;
    }


    public getName():string
    {
        return this.name;
    }

    public getTradeMark():string
    {
        return this.tradeMark;
    }

    public getModel():string
    {
        return this.model;
    }

    public getColor():string
    {
        return this.color;
    }

    public getPrice():number
    {
        return this.price;
    }

    public print()
    {
        console.log("The characteristics of the mobile " + this.name + " are: ")
        
        for (let atributo in this)
        {
            if (typeof(this[atributo])!="function")
            {
                console.log(atributo + ": " + this[atributo])
            }
        }
    }

}