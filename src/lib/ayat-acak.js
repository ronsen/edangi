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
    const verse = $("#__next > div > main > div > div > div > div:nth-child(1) > div > a:nth-child(2) > p").text();
    const content = $("#__next > div > main > div > div > div > div:nth-child(1) > div > a:nth-child(1)").html().replace(/[\n\r]+/g, ' ');;

    data.verse = verse;
    data.content = content;
  }

  return { status, data };
}
