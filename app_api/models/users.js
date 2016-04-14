var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    provider: String,
    provider_id: {type: String, unique: true},
    photo: String,
    email: String,
    createdAt: {type: Date, default: Date.now}
});

mongoose.model('User', userSchema)