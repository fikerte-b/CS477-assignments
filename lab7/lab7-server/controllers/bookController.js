//const { default: mongoose } = require('mongoose');
const {ObjectId} = require('mongodb');
const Book = require('../models/books');


// exports.getAll= (req, res, next)=>{
   
//    res.json(Book.getAll());
// };
exports.getAll= async (req, res, next)=>{
//     Book.getAll()
//    .then(books =>{
//     res.json(books)
//    })
let book = await Book.find();
res.json(book);
 };

// exports.getById = (req, res, next)=>{
//    res.json(Book.getById(req.params.id))
// };
exports.getById = async (req, res, next)=>{
    let book = await Book.getById(req.params.id);
    res.json(book);
 };

// exports.save = (req, res, next)=>{
//     console.log(req.body);
//     let addBook = new Book(null, req.body.title, req.body.ISBN, req.body.author).save();
//     res.json(addBook);
// };
exports.save = async (req, res, next)=>{
    // console.log(req.body);
    // let addBook = new Book(null, req.body.title, req.body.ISBN, req.body.author);
    // let result = await addBook.save();
    // res.json(result);
    try{
        const result = await new Book(req.body).save(); //Instance  method
        res.json(result);
    }catch(error){
        next(error.message);
    }    

};

exports.update = async (req, res, next)=>{
    console.log(req.body);
    // let updateBook =  new Book(req.params.id, req.body.title, req.body.ISBN, req.body.author);
    // let result = updateBook.update()
    const result = await Book.updateOne({_id: new ObjectId(req.params.id)}, req.body);
    res.json(result);
};
 
exports.deleteById = async (req, res, next)=>{
    //let result = await Book.deleteById(req.params.id);
    let result = await Book.findByIdAndDelete(req.params.id)
    res.json(result);
 };
 
