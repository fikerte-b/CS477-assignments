//A book has properties: id, title, ISBN, publishedDate, author

// let books = [
//     {id:1, title: "Fikir Eske Mekabir/Love to the Grave", ISBN: "ET0000001", author: "Haddis Alemayehu"},
//     {id:2, title: "Sememen", ISBN: "ET0056889", author: "Sisay Nigus"},
//     {id:3, title: "The other side of Midnight", ISBN: "068800220X", author: "Sidney Sheldon"},
//     {id:4, title: "Dertogada", ISBN:"ET0009008", author:"Yismake Worku"},
//     {id:5, title: "The Murder on the Links", ISBN: "128097834uy", author: "Agatha Christie"}
// ];

// let counter = 5;
const { getDB } = require('../utils/database');
const { ObjectId } = require('mongodb');
module.exports = class Book{
    constructor(id, title, ISBN, author){
        this.id = id,
        this.title = title,
        this.ISBN = ISBN,
        this.author = author
    }

    static getAll(){
        return getDB().collection('books').find().toArray();
    }

    static getById(id){
        // const index = books.findIndex(book => book.id == id);
        // if(index < 0){
        //     throw new Error(`There is no book with ID: ${id}`);
        // }else{
        //     return books[index];
        // }
        return  getDB().collection('books').findOne({_id:new ObjectId(id)});
    }

   save(){
    //  this.id = ++counter;
    //  books.push(this);
    //  return this;
    return  getDB().collection('books').insertOne(this);
   }

   update(){
    // const index = books.findIndex(book=> book.id == this.id);
    // if(index < 0){
    //     throw new Error(`There is no books with ID: ${id}`);
    // }else{
    //     books[index] = this;
    //     return this;
    // }
    return getDB().collection('books').updateOne({_id: new ObjectId(this._id)},
   {$set: {title: this.title, ISBN: this.ISBN,publishedDate: this.publishedDate, author: this.author}}
   );
   }
   
   static deleteById(id){
    // const index = books.findIndex(book=> book.id == id)
    //     if(index < 0){
    //         throw new Error(`There is no book with ID: ${id}`);
    //     }else{
    //        let temp = books[index];
    //        books.splice(index, 1);
    //        return temp;
    //     }
    return getDB().collection('books').deleteOne({_id: new ObjectId(id)});
    }
   



}

