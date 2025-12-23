const Movie = require("../models/Movie");

exports.getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

exports.searchMovies = async (req, res) => {
  const q = req.query.q;
  const movies = await Movie.find({
    title: { $regex: q, $options: "i" }
  });
  res.json(movies);
};

exports.sortedMovies = async (req, res) => {
  const sortBy = req.query.by || "rating";
  const movies = await Movie.find().sort({ [sortBy]: 1 });
  res.json(movies);
};

exports.addMovie = async (req, res) => {
  const movie = await Movie.create(req.body);
  res.json(movie);
};

exports.updateMovie = async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(movie);
};

exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
