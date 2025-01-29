import {Note} from '../models/Note.js';
import {User} from '../models/User.js';

export const getNotes = async (req, res) => {
    const notes = await Note.findAll({
        include: {model: User, attributes: ['firstName']},
    });
    res.json(notes);
};

export const createNote = async (req, res) => {
    const {
        body: {title, content},
    } = req;

    if (!title || !content) {
        return res.status(400).json({error: 'title and content are required'});
    }

    const note = await Note.create(req.body);
    res.json(note);
};

export const getNoteById = async (req, res) => {
    const {
        params: {id},
    } = req;
    const note = await Note.findByPk(id);

    if (!note) {
        return res.json({message: 'note not found'});
    }
    res.json(note);
};

export const updateNote = async (req, res) => {
    const {
        params: {id},
    } = req;

    const note = await Note.findByPk(id);

    note.update(req.body);
    await note.save();
    res.json(note);
};

export const deleteNote = async (req, res) => {
    const {
        params: {id},
    } = req;

    const note = await Note.findByPk(id);
    await note.destroy();
    res.json({message: 'note deleted', data: note});
};
