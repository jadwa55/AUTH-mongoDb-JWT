const router = require('express').Router();
const User = require('../models/User');


router.post('/register', async (req,res) => {
    // res.json(req.body)
    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        // const name= req.body.name;
        // const email= req.body.email;
        // const password= req.body.password;
        // const saveUser = await User.insertMany({name: name, email:email,password:password})
        // console.log(saveUser);
        const saveUser = await user.save();
        res.send(saveUser);
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;