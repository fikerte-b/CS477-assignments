const express = require ('express');
//const cors = require('cors');

const booksroute = require('./routes/bookRouter');

const app = express();

//app.use(cors())
app.use(express.json());

app.use('/books', booksroute);

app.listen(5000, ()=> {console.log("listening to 5000....")});