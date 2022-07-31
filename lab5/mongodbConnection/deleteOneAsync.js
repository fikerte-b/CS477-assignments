const { MongoClient, ObjectId } = require('mongodb');
async function run(){
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
    const book = await client.db('booksdb').collection('books').deleteOne({_id: new ObjectId('62e6e82f995270469e4767c6')});
     console.log(book);
     client.close()
     
 }
 run();