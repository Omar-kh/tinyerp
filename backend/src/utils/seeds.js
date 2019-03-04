import Item from '../models/Item';
import Pricelist from '../models/Pricelist';
import Currency from '../models/Currency';

const seeds = async (items, pricelists, currency) => {
    items.forEach((element) => {
        Item.create(element);
    });
    pricelists.forEach((element) => {
        Pricelist.create(element);
    });
    Currency.create(currency);
};

export default seeds;
