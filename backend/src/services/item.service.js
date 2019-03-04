import Item from '../models/Item';

export const calcItemPrice = async (itemId, pricelistId) => {
    const item = await Item.findById(itemId).populate('priceLists').exec();
    try {
        const priceListIndex = item.priceLists.findIndex(searchedList => searchedList._id === pricelistId);
        const searchedItemIdx = item.priceLists[priceListIndex].findIndex(searchObject => searchObject.item === this);
        const searchedPrice = item.priceLists[searchedItemIdx].price;
        return searchedPrice;
    } catch (error) {
        throw new Error(error.message);
    }
};
