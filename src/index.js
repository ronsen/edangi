import express from 'express';
import cors from 'cors';
import path from 'path';
import { tahukahAnda } from './lib/tahukah-anda.js';
import { didYouKnow } from './lib/did-you-know.js';
import { bibleVerse } from './lib/bible-verse.js';
import { ayatAcak } from './lib/ayat-acak.js';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get('/', async (req, res) => {
	res.sendFile(path.resolve('.', './src/index.html'));
});

app.get('/api/tahukah-anda', async (req, res) => {
	const { status, data } = await tahukahAnda();

	res.status(status);
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(data));
});

app.get('/api/did-you-know', async (req, res) => {
	const { status, data } = await didYouKnow();

	res.status(status);
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(data));
});

app.get('/api/random-bible-verse', async (req, res) => {
	const { status, data } = await bibleVerse();

	res.status(status);
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(data));
});

app.get('/api/ayat-acak', async (req, res) => {
	const { status, data } = await ayatAcak();

	res.status(status);
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(data));
});

app.listen(port, () => {
	console.info(`🚀 Server runs at port ${port}`);
});