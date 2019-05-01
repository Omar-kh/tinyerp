import mongoose from 'mongoose';

const pricelistSchema = new mongoose.Schema({
  name: String,
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article'
    }
  ]
});

export default mongoose.model('Pricelist', pricelistSchema);
