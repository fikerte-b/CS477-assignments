const express = require('express');

const bookRouter = require('./routes/bookRouter') 

const app = express();
app.use(express.json());

app.use('/books', bookRouter);








app.listen(3000, ()=>console.log(`listning to port 300000`));
