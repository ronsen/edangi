import axios from "axios";
import * as cheerio from 'cheerio';

export const didYouKnow = async () => {
    const url = 'https://en.wikipedia.org/wiki/Main_Page';
    const response = await axios.get(url);
    const body = await response.data;
    
    const data = [];

    const $ = cheerio.load(body);
    $('#mp-dyk > ul > li').each((i, el) => {
        data.push({
            content: $(el).text()
        });
    });

    const image = $('#mp-dyk').find('img').attr('src');

    return { data, image };
}