const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/signup', async(req, res) => {
  try {
    const {name, surname, email, password, cpassword } = req.body;
    const emailExist = await User.findOne({email});

    if(emailExist) { return res.status(400).send({message: "Email is already exist"});}
    if(password !== cpassword)  return res.json({message: "Your passwords are not equal!"});

    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    const user = new User({ name, surname, email, password: hashedPassword});
    const newUser = await user.save();

    res.json(newUser);
  } catch(error) {
    res.status(500).send({error})
  };
});

router.post('/login', async(req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(!user) { return res.status(404).send({message: "Email or password is wrong"})}

    const vadilPass = await bcrypt.compare(password, user.password);
    if(!vadilPass) return res.status(400).send('Email of password is wrong');

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, {
      expiresIn: 86400
    });
    res.header('auth-token', token);
    res.status(200).send({auth: true, token, user});
    
  } catch(error) {
    res.status(500).send({error})
  };
});


module.exports = router;