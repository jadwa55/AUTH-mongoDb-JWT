const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Import Routes 
const authRoute = require('./routes/auth');

dotenv.config();

//connect to DB
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true }, () =>
    console.log('connect to db!')
);

//Middlewares
app.use(express.json());
//Route Middlewares
app.use('/api/user',authRoute);

app.listen(9000, () => console.log('server up and running'));