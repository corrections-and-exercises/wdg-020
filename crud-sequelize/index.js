import express from 'express';
import './models/index.js';
import {
    createUser,
    getUsers,
    getUserById,
    deleteUser,
    updateUser,
} from './controller/users.js';
import {
    getNotes,
    createNote,
    getNoteById,
    deleteNote,
    updateNote,
} from './controller/notes.js';

const app = express();

const port = 8080;

app.use(express.json());

app.route('/users').get(getUsers).post(createUser);

app.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

app.route('/notes').get(getNotes).post(createNote);

app.route('/notes/:id').get(getNoteById).put(updateNote).delete(deleteNote);

app.listen(
    port,
    console.log(`server is listening on http://localhost:${port}`)
);
