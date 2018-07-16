var mongoose = require('mongoose');
var schema = mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true },
contact: { type: String, required: true },
password: { type: String, required: true },
}, {collection: 'User'});

module.exports = mongoose.model('user',schema);