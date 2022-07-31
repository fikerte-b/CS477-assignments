const{ MongoClient } = require('mongodb');
MongoClient.connect('mongodb://127.0.0.1:27017')
  .then(client =>{
    console.log(('connected......'));
    const db = client.db('booksdb');
    db.collection('books').find().toArray()
      .then(book => {
        console.log(book);
      });
  })
  .catch(error => console.log(error));