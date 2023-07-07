import express from 'express';
import cors from 'cors';
import axios from 'axios';
import * as cheerio from 'cheerio';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get('/', async (req, res) => {
    res.sendFile(path.resolve('.', 'index.html'));
});

app.get('/tahukahanda', async (req, res) => {
    const url = 'https://id.wikipedia.org/wiki/Wikipedia:Tahukah_Anda';
    const response = await axios.get(url);
    const body = await response.data;
    const $ = cheerio.load(body);

    const data = [];

    $('.mw-parser-output > ul > li').each((i, el) => {
        const item = { content: '' };

        item.content = $(el).text();

        data.push(item);
    });

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
});

app.listen(port, () => {
    console.info(`🚀 Server runs at port ${port}`);
});