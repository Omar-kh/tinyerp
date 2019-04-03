import mongoose from 'mongoose';

const unitSchema = new mongoose.Schema({
  name: String,
  symbol: String
});

export default mongoose.model('Unit', unitSchema);
