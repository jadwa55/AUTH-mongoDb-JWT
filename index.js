const express = require('express');
const app = express();

//Import Routes 
const authRoute = require('./routes/auth');

//Route Middlewares
app.use('/api/user',authRoute);

app.listen(9000, () => console.log('server up and running'));