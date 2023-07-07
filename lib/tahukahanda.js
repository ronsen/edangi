import axios from "axios";
import * as cheerio from 'cheerio';

export const tahukahanda = async () => {
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

    return { data };
}