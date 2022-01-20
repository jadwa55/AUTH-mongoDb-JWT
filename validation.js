// ::VALIDATION::
const Joi = require('@hapi/joi');


// Register validation 
const registerValidation = (data) => {
    const schema = {
        name: Joi.string()
            .min(6),
        email: Joi.string()
            .min(6)
            .email(),
        password: Joi.string()
            .min(6)
    };
    return Joi.validate(data, schema)
};

// login validation 
const loginValidation = (data) => {
    const schema = {
        email: Joi.string()
            .min(6)
            .email(),
        password: Joi.string()
            .min(6)
    };
    return Joi.validate(data, schema)
};


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;