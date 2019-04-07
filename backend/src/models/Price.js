import mongoose from 'mongoose';

const priceSchema = new mongoose.Schema({
  item: {
    propertyType: 'linkedDoc',
    value: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item'
    },
    priceList: {
      propertyType: 'linkedDOc',
      value: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PriceList'
      }
    }
  }
});

export default mongoose.model('Price', priceSchema);
