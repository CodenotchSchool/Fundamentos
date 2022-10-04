import {Mobile} from "./mobile"
export class MobileCollection
{
    private totalPrice: number;

    constructor(private mobiles: Mobile[])
    {}

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
}