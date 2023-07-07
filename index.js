import express from 'express';
import cors from 'cors';
import path from 'path';
import { tahukahanda } from './lib/tahukahanda.js';
import { didyouknow } from './lib/didyouknow.js';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get('/', async (req, res) => {
    res.sendFile(path.resolve('.', 'index.html'));
});

app.get('/api/tahukahanda', async (req, res) => {
    const data = await tahukahanda();

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
});

app.get('/api/didyouknow', async (req, res) => {
    const data = await didyouknow();

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
});

app.listen(port, () => {
    console.info(`🚀 Server runs at port ${port}`);
});