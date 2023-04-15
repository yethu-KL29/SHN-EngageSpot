const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true

    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
    




    
    
})
const User = mongoose.model('User', userSchema);

module.exports = User;