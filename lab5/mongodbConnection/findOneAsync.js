const {MongoClient, ObjectId} = require('mongodb');
// MongoClient.connect('mongodb://127.0.0.1:27017')
//   .then(client =>{
//      client.db('booksdb').collection('books')
//        .findOne({_id: new ObjectId('62e6e82f995270469e4767c6')})
//        // to find using multiple properties
//        //.findOne({title: 'The other side of Midnight', author:'Sidney Sheldon'})
//        .then(book => {
//          console.log(book);
//          client.close();
//        })
//   })

async function run(){
   const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
   const book = await client.db('booksdb').collection('books').findOne({_id: new ObjectId('62e6e82f995270469e4767c6')});
    console.log(book);
    client.close()
    
}
run();