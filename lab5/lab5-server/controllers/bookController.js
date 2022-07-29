const Book = require('../models/books');


exports.getAll= (req, res, next)=>{
   
   res.json(Book.getAll());
};

exports.getById = (req, res, next)=>{
   res.json(Book.getById(req.params.id))
};

exports.save = (req, res, next)=>{
    console.log(req.body);
    let addBook = new Book(null, req.body.title, req.body.ISBN, req.body.author).save();
    res.json(addBook);
};

exports.update = (req, res, next)=>{
    console.log(req.body);
    let updateBook = new Book(req.params.id, req.body.title, req.body.ISBN, req.body.author).update();
    res.json(updateBook);
};

exports.deleteById = (req, res, next)=>{
    res.json(Book.deleteById(req.params.id))
 };
 
