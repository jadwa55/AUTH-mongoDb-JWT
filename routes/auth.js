const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')


router.post('/register', async (req,res) => {
    // res.json(req.body)

    // Checking if the user is already in database 
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        // password: req.body.password
        password: hashPassword
    });
    try {
        const saveUser = await user.save();
        res.send({user: user._id});
    }catch(err){
        res.status(400).send(err);
    }
});

// Login 
 router.post('/login', (req, res) => {

    // Checking if the email exists
    const emailExist = await User.findOne({email: req.body.email});
    if(!emailExist) return res.status(400).send('Email or password is wrong');
 });

module.exports = router;