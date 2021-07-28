const User = require('./users.model');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(200).send({user: savedUser, message: "User created in database"});
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.findUser = async (req, res) => {
    try {
        const user = req.params.username;
        const targetUser = await User.findOne({username: user});
        res.status(200).send({ user: targetUser });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updatePassword = async (req, res) => {
    try {
        const user = {
            username: req.body.username,
            password: req.body.password,
        }
        const updatedUser = await User.updateOne({username: user.username, password: user.password});
        res.status(200).send( {user: user, message: 'Password updated'});
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = req.params.username;
        const deletedUser = await User.deleteOne({username: user });
        res.status(200).send({ message: 'User deleted from database' });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.showAllUsers = async (req, res) => {
    try {
        const list = await User.find();
        res.status(200).send({ list });
    } catch (error) {
        res.status(500).send(error);
    }
};