const router = require("express").Router();
const { login,registerUser } = require("../controllers/authController");

router.post("/login", login);
router.post("/register", registerUser); // ✅ NEW

module.exports = router;
