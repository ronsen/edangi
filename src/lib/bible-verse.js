import axios from "axios";
import * as cheerio from 'cheerio';

export const bibleVerse = async () => {
    const url = 'https://dailyverses.net/random-bible-verse';
    const response = await axios.get(url);
    const body = await response.data;
    const status = response.status;

    const data = {};

    if (status == 200) {
        const $ = cheerio.load(body);
        const verse = $(".content .b1 .vr .vc").text();
        const content = $(".content .b1 .v1").text();

        data.verse = verse;
        data.content = content;
    }

    return { status, data };
}