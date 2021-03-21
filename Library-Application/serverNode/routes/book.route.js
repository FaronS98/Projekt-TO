const express = require('express');
const Book = require('../models/book.model');
const router = express.Router();

router.get('/', ( req , res ) =>{
    
//Adding three sample books to the database
    for(let i=1; i<4; i++){
    let name = "book"+i;
    let price = 1 + (Math.round(Math.random()*10));
    const bookData = new Book({
        name: name,
        price: price
    });

    bookData.save((err) => {
        console.log(err);
    });
    }

   Book.find({},(err,data) =>{
        console.log(data);
    });

    res.render('book', {tittle: "Book"});

    //Downloading books from the database
    
    // Book.find({},(err,data) =>{
    //     res.json(data);
    // });
});

module.exports = router;
