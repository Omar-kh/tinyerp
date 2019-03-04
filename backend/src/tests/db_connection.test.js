import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import seeds from '../utils/seeds';

dotenv.config({ path: path.resolve(process.cwd(), '.env.development') });

const items = [
    {
        name: 'item1',
        description: 'this is item1'
    },
    {
        name: 'item2',
        description: 'this is item2'
    },
    {
        name: 'item3',
        description: 'this is item3'
    }
];

const pricelists = [
    {
        name: 'pricelist1'
    },
    {
        name: 'pricelist2'
    }
];

const currency = {
    symbol: 'MAD',
    fullname: 'Dirham Marocain'
};

before('Clean and Seed database', async () => {
    mongoose.connect(process.env.DB_URL_TEST, { useNewUrlParser: true });
    await mongoose.connection
        .once('open', () => {
            console.log('Successfully connected to mongoDB!');
        })
        .on('error', (error) => {
            console.warn('Error : ', error);
        });

    await seeds(items, pricelists, currency);
});
