var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var booksSchema = new Schema({
    bookName: {
        type: String,
        required: true
    },
    authorName:{
        type: String,
        required: true
    },
    authorSurname:{
        type: String,
        required: true
    },
    photoName:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Book', booksSchema);