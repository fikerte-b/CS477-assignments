const express = require('express');
const productRouter = require('./myRoutes/product');
const userRouter = require('./myRoutes/users');

const path = require('path');
const app = express();

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'mycss.css')));



app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'myHtml', '404.html'));
});

app.use((err, req, res, next)=> {
    res.status(500).send('failed!');
});


app.listen(3000, () => console.log('listening on 3000...'));