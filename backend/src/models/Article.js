import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  name: String,
  reference: String,
  unit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unit'
  },
  description: String,
  prices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Price'
    }
  ],
  changeHistory: [{ changedProperty: String, changeDate: Date }]
});

export default mongoose.model('Article', articleSchema);
