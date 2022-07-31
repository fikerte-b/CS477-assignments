const express = require('express');
const cors = require('cors');

const bookRouter = require('./routes/bookRouter');
const {mongoConnect} = require('./utils/database');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/books', bookRouter);
mongoConnect(()=> {
    app.listen(6000, ()=> {console.log("listening to 4000")});
});








