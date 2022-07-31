const Book = require('../models/books');


// exports.getAll= (req, res, next)=>{
   
//    res.json(Book.getAll());
// };
exports.getAll= async (req, res, next)=>{
//     Book.getAll()
//    .then(books =>{
//     res.json(books)
//    })
let book = await Book.getAll();
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
    console.log(req.body);
    let addBook = new Book(null, req.body.title, req.body.ISBN, req.body.author);
    let result = await addBook.save();
    res.json(result);
};

exports.update = async (req, res, next)=>{
    console.log(req.body);
    let updateBook = new Book(req.params.id, req.body.title, req.body.ISBN, req.body.author);
    let result = updateBook.update()
    res.json(result);
};

exports.deleteById = async (req, res, next)=>{
    let deletBook = await Book.deleteById(req.params.id);
    res.json(deletBook);
 };
 
