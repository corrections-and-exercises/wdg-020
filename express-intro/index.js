import express from 'express';

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const posts = [
    {id: 1, title: 'Post 1'},
    {id: 2, title: 'Post 2'},
];

app.get('/posts', (request, response) => {
    response.json(posts);
});

app.get('/user', (req, res) => {
    res.send('get user');
});

app.post('/posts', (req, res) => {
    console.log(req.body);
    posts.push(req.body);
    res.send('post created');
});

app.get('/posts/:id/:user', (req, res) => {
    console.log(req.params);
    res.send('retrieve single post');
});

app.put('/posts/:id', (req, res) => {
    res.send('post updated');
});

app.delete('/posts/:id', (req, res) => {
    res.send('post deleted');
});

app.listen(port, () => {
    console.log('server is listening on http://localhost:' + port);
});
