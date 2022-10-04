import {Mobile} from "./mobile"
export class MobileCollection
{
    private totalPrice: number;

    constructor(private mobiles: Mobile[])
    {
        this.totalPrice = this.totalPriceCalculation();
    }

    public setTotalPrice(totalPrice: number)
    {
        this.totalPrice = totalPrice;
    }

    public setMobiles(mobiles: Mobile[])
    {
        this.mobiles = mobiles;
    }

    public getTotalPrice():number
    {
        return this.totalPrice;
    }

    public getMobiles():Mobile[]
    {
        return this.mobiles;
    }

    private totalPriceCalculation():number
    {
        let result = 0;

        for (let mobile of this.mobiles)
        {
            result += mobile.getPrice();
        }
        return result;
    } 

    public printCollection()
    {
        console.log("This is all my mobiles: ");

        for (let mobile of this.mobiles)
        {
            mobile.print();
        }

        console.log("Price overall: " + this.totalPrice);
    }
}