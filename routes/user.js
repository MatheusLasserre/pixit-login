const express = require('express');
const { createuser, getUsers, deleteUser } = require('../utils/users/users');
const router = express.Router();


//All app routes that need authentication

// route for get all users
router.get('/', async (req, res) => {
    const users = await getUsers();
    res.json(users);
});

// route to create user
router.post('/', async (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    try {
        await createuser(user);
        res.redirect('/admin');
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }


})

// route for user deletion
router.delete('/', async (req, res) => {
    const id = req.body.id
    try {
        await deleteUser(id);
        res.status(200).send();
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }


})

module.exports = router