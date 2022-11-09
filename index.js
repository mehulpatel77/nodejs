const path = require('path');
require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const PORT = process.env.PORT | 3000;

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on('open',()=>{
    console.log('Database Connection OK');
})
mongoose.connection.on('error',(err)=>{
    console.log('Database Connection Fail',err);
})

const indexRouter = require('./routes/index');

const app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes 
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}, http://localhost:${PORT}`);
});