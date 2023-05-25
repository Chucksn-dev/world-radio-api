const express = require("express");
const router = express.Router();

//sign-up end point
router.post("/sign-up", (req, res) => {
  const { email, password } = req.body;
});

//login end point
router.post("/login", (req, res) => {
  const { email, password } = req.body;
});

module.exports = router;
