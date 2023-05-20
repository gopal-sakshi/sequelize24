const users = require('../models/users');
var express = require('express');
var router = express.Router();
const { Op } = require("sequelize");

router.get('/getAll', async (req, res) => { 
    users.findAll({}).then(data => res.status(200).send(data))
});

router.get('/getSomeFields', async (req, res) => { 
    users.findAll({attributes:['firstName', 'lastName']}).then(data => res.status(200).send(data))
});

router.get('/where1', async (req, res) => {
    // var condition1 = { where: { age:35 }};
    var condition2 = { where: { [Op.or]: [ {age:35}, {age: 37} ] }};
    users.findAll(condition2).then(data => res.status(200).send(data));
});

router.post('/createUser', async (req, res) => {
    const userPayload = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        favoriteColor: req.body.favoriteColor,
        age:req.body.age,
        cash:req.body.cash
    };
    users.create(userPayload).then(data => res.status(201).send(data));
});



module.exports = router;