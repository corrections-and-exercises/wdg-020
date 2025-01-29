import {User} from '../models/User.js';

export const getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

export const createUser = async (req, res) => {
    const {
        body: {firstName, lastName, email},
    } = req;

    if (!firstName || !lastName || !email) {
        return res
            .status(400)
            .json({error: 'firstName, lastName and email are required'});
    }

    const user = await User.create(req.body);
    res.json(user);
};

export const getUserById = async (req, res) => {
    const {
        params: {id},
    } = req;
    const user = await User.findByPk(id);
    res.json(user);
};

export const updateUser = async (req, res) => {
    const {
        body: {firstName, lastName, email},
        params: {id},
    } = req;

    if (!firstName || !lastName || !email) {
        return res
            .status(400)
            .json({error: 'firstName, lastName and email are required'});
    }

    const user = await User.findByPk(id);

    user.update(req.body);
    await user.save();
    res.json(user);
};

export const deleteUser = async (req, res) => {
    const {
        params: {id},
    } = req;

    const user = await User.findByPk(id);
    await user.destroy();
    res.json({message: 'user deleted', data: user});
};
