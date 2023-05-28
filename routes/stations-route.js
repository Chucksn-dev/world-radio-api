const express = require("express");
const router = express.Router();
const RadioBrowser = require("radio-browser");
const Station = require("../models/stations-model");

router.get("/", async (req, res) => {
  const { page, limit, countryCode } = req.query;

  try {
    const stations = await Station.find({ countryCode });
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const totalStation = stations.length;
    const totalPages = Math.ceil(totalStation / limit);
    const paginatedStations = stations.slice(startIndex, endIndex);

    res.status(200).json({
      stations: paginatedStations,
      currentPage: Number(page),
      totalPages,
      totalStation,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
