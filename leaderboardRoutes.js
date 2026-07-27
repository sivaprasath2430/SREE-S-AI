const express = require("express");
const router = express.Router();

const leaderboardController = require("../controllers/leaderboardController");

router.get("/:quizId", leaderboardController.getLeaderboard);

module.exports = router;