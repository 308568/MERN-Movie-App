const router = require("express").Router();
const {
  getMovies,
  searchMovies,
  sortedMovies,
  addMovie,
  updateMovie,
  deleteMovie
} = require("../controllers/movieController");

const {
  authMiddleware,
  adminMiddleware
} = require("../middleware/authMiddleware");

router.get("/", getMovies);
router.get("/search", searchMovies);
router.get("/sorted", sortedMovies);

router.post("/", authMiddleware, adminMiddleware, addMovie);
router.put("/:id", authMiddleware, adminMiddleware, updateMovie);
router.delete("/:id", authMiddleware, adminMiddleware, deleteMovie);

module.exports = router;
