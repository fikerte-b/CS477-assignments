const Book = require('../models/books');


exports.getAll= (req, res, next)=>{
   
   res.json(Book.getAll());
};

exports.save = (req, res) => {
    let addBook = new Book(null, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).save();
    res.json(addBook);
 }
 
 exports.update = (req, res)=>{
     let updateBook = new Book(req.params.id, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).update();
     res.json(updateBook);
 }
 exports.deleteByID = (req,res) =>{
     res.json(Book.deleteByID(req.params.id));
 }
