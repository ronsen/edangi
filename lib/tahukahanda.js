import axios from "axios";
import * as cheerio from 'cheerio';

export const tahukahAnda = async () => {
    const url = 'https://id.wikipedia.org/wiki/Halaman_Utama';
    const response = await axios.get(url);
    const body = await response.data;

    const data = [];

    const $ = cheerio.load(body);
    $('#mf-tahukahanda > ul > li').each((i, el) => {
        const item = { content: '' };
        item.content = $(el).text();

        data.push(item);
    });

    return { data };
}