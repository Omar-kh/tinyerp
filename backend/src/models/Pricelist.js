import mongoose from 'mongoose';

const pricelistSchema = new mongoose.Schema({
    name: String
});

export default mongoose.model('Pricelist', pricelistSchema);
