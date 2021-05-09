const express = require('express');
const Book = require('../models/book.model');
const router = express.Router();

router.get('/', ( req , res ) =>{
    
    //Downloading books from the database    
    Book.find({},(err,data) =>{
        res.json(data);
    });
});

router.post('/', (req, res) =>{
    const book = req.body.book;
    const bookData = new Book({
        bookName: book.bookName,
        authorName: book.authorName,
        authorSurname: book.authorSurname,
        photoName: book.photoName,
        type: book.type
    });

    bookData.save((err) => {
        console.log(err);
    });
});

module.exports = router;
