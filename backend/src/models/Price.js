import mongoose from 'mongoose';

const priceSchema = new mongoose.Schema({
  name: String,
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article'
  },
  priceList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pricelist'
  },
  value: Number
});

export default mongoose.model('Price', priceSchema);
