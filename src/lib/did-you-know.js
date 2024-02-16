import axios from "axios";
import * as cheerio from 'cheerio';

export const didYouKnow = async () => {
    const url = 'https://en.wikipedia.org/wiki/Main_Page';
    const response = await axios.get(url);
    const body = await response.data;
    const status = response.status;
    
    const data = [];
    let image = '';

    if (status == 200) {
        const $ = cheerio.load(body);
        $('#mp-dyk > ul > li').each((i, el) => {
            data.push({
                content: $(el).text()
            });
        });

        image = $('#mp-dyk').find('img').attr('src');
    }

    return { status, data, image };
}