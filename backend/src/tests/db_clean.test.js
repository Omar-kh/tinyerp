import mongoose from 'mongoose';

after('Clean database and close connection', async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close(() => {
        console.log('Cleaned database and closed connection!');
    });
});
