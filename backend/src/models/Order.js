import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderLines: [
        {
            priceList: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Pricelist'
            },
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item'
            },
            price: Number,
            quantity: Number,
            currency: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Currency'
            },
            total: Number
        }
    ],
    total: Number
});

export default mongoose.model('Order', orderSchema);
