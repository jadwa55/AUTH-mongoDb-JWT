const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

//connect to DB
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true }, () =>
    console.log('connect to db!')
);

//Import Routes 
const authRoute = require('./routes/auth');

//Route Middlewares
app.use('/api/user',authRoute);

app.listen(9000, () => console.log('server up and running'));