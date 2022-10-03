const express = require("express");
const {me, login, register} = require ("../controllers/auth");
const auth = require('../middlewares/auth');

const router = express.Router();


router.get("/me", auth, me);
router.post("/login", login);
router.post("/register", register);

module.exports = router;