import axios from "axios";
import * as cheerio from 'cheerio';

export const tahukahAnda = async () => {
    const url = 'https://id.wikipedia.org/wiki/Halaman_Utama';
    const response = await axios.get(url);
    const body = await response.data;

    const data = [];

    const $ = cheerio.load(body);
    $('#mf-tahukahanda > ul > li').each((i, el) => {
        data.push({
            content: $(el).text()
        });
    });

    const image = $('#mf-tahukahanda').find('img').attr('src');

    return { data, image };
}