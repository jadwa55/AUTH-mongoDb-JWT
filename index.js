const express = require('express');
const app = express();
const mongoose = require('mongoose');


//connect to DB
mongoose.connect('mongodb+srv://jadwa:jadwa@cluster0.e1sc6.mongodb.net/auth?retryWrites=true&w=majority',
() => console.log('connect to db!')
);

//Import Routes 
const authRoute = require('./routes/auth');

//Route Middlewares
app.use('/api/user',authRoute);

app.listen(9000, () => console.log('server up and running'));