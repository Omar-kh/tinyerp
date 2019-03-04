// Import package
import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

// Create Schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// Add passport methods to schema
userSchema.plugin(passportLocalMongoose, { usernameField: 'email', usernameUnique: false });

// Create module
const User = mongoose.model('User', userSchema);

// Export the module
module.exports = User;
