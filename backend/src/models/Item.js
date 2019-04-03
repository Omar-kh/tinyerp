import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: String,
  unit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unit'
  },
  description: String,
  prices: [
    {
      pricelist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pricelist'
      },
      price: Number,
      Currency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Currency'
      }
    }
  ],
  changeHistory: [{ changedProperty: String, changeDate: Date }]
});

export default mongoose.model('Item', itemSchema);
