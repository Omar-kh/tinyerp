/* eslint-disable func-names */
import { expect } from 'chai';
import Item from '../models/Item';
import Pricelist from '../models/Pricelist';

describe('Item CRUD testing', function () {
    this.timeout(5000);
    it('Test item creation and saving', async () => {
        const myItem = new Item({
            name: 'myItem',
            description: 'description of my item'
        });
        await myItem.save();
        expect(myItem.isNew).to.be.false;
    });
    it('Test item fetching and retrieval', async () => {
        const myItem = await Item.findOne({ name: 'myItem' });
        expect(myItem).to.be.an('object').that.includes({ description: 'description of my item' });
    });
    it('Test item price addition', async () => {
        const myPricelist = await Pricelist.findOne({ name: 'pricelist1' });
        const myItemPrice = {
            pricelist: myPricelist,
            price: 58
        };
        const myItem = await Item.findOne({ name: 'myItem' });
        myItem.prices.push(myItemPrice);
        await myItem.save();
        expect(myItem.prices[0].price).to.equal(58);
    });
});
