import app from './app.js';
import config from './config.js';
import { getPosts, getPostsId, getCommentsFromPost } from './services/jph-service.js';


app.get('/posts', async (req, res) => {
    try {
        const { filter, order, page } = req.query;
        const posts = await getPosts({ filter, order, page });
        res.json(posts);
        console.log(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/posts/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await getPostsId(postId);
        res.json(post);
        console.log(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/posts/:postId/comments', async (req, res) => {
    try {
        const postId = req.params.postId;
        const comments = await getCommentsFromPost(postId);
        res.json(comments);
        console.log(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




const { port } = config;

const server = app.listen(port, () => {
    console.log(`Server listen from ${port}`)
});


