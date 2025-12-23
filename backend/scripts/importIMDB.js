const axios = require("axios");
const cheerio = require("cheerio");
const connectDB = require("../config/db");
const Movie = require("../models/Movie");

const url = "https://www.imdb.com/chart/top/";

const fetchIMDB = async () => {
  await connectDB();
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const movies = [];

  $("tbody.lister-list tr").each((i, el) => {
    const title = $(el).find(".titleColumn a").text();
    const rating = parseFloat($(el).find(".imdbRating strong").text());
    const releaseDate = $(el).find(".titleColumn span").text().replace(/[()]/g, "");
    movies.push({ title, rating, releaseDate });
  });

  await Movie.insertMany(movies);
  console.log("IMDb Top 250 movies imported!");
  process.exit();
};

fetchIMDB();
