import mongoose from 'mongoose';

const currencySchema = new mongoose.Schema({
    symbol: String,
    fullname: String
});

export default mongoose.model('Currency', currencySchema);
