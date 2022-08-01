const { MongoClient , ObjectId} = require('mongodb');
MongoClient.connect('mongodb://127.0.0.1:27017')
    .then(client => {
       client.db('booksdb').collection('books')
        .updateOne({_id: new ObjectId('62e6e8b3995270469e4767ca')}, 
                {$set: {title: 'Dertogada----update', ISBN: 'ET0009008 ----', author: 'Yismake Worku.....updated'}})
        .then(result => {
            console.log(result);
            client.close();
        })
       
    })
    .catch(error => console.log(error));

   