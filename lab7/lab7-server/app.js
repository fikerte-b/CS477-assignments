const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const bookRouter = require('./routes/bookRouter');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/books', bookRouter);

app.use((req, res, next)=>{
    res.status(404).send({error: 'API NOT SUPPORTED'});
})

app.use((err, req, res, next) =>{
  res.status(500).send({error: err.message})
})

mongoose.connect('mongodb://127.0.0.1:27017/booksMongoosedb')
   .then(()=> {
     app.listen(3000, ()=> {console.log("connected...")});
   });
// mongoConnect(()=> {
//     app.listen(4000, ()=> {console.log("listening to 4000")});
// });








