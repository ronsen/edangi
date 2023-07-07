import axios from "axios";
import * as cheerio from 'cheerio';

export const ayatAcak = async () => {
    const url = 'https://www.bible.com/id/verse-of-the-day';
    const response = await axios.get(url);
    const body = await response.data;

    const $ = cheerio.load(body);
    const verse = $(".pis-2.plb-1.pli-1.border-black.border-l-large.border.mbs-3 > .text-gray-25.mbs-2.font-bold.text-xs.text-gray-300.uppercase.font-aktiv-grotesk.text-11.leading-default.font-medium").text();
    const content = $(".pis-2.plb-1.pli-1.border-black.border-l-large.border.mbs-3 > .text-gray-50.font-aktiv-grotesk").text();
    
    return { verse, content };
}