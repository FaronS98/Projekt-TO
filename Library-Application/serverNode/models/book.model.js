var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var booksSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Book', booksSchema);