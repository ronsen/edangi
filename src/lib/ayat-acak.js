import axios from "axios";
import * as cheerio from 'cheerio';

export const ayatAcak = async () => {
    const url = 'https://www.bible.com/id/verse-of-the-day';
    const response = await axios.get(url);
    const body = await response.data;
    const status = response.status;

    const data = {};

    if (status == 200) {
        const $ = cheerio.load(body);
        const verse = $(".pis-2.plb-1.pli-1.border-black.border-l-large.border.mbs-3 > .text-gray-25").text();
        const content = $(".pis-2.plb-1.pli-1.border-black.border-l-large.border.mbs-3 > .text-gray-50").text();

        data.verse = verse;
        data.content = content;
    }

    return { status, data };
}