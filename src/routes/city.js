import express from "express";
import City from "../models/city.model.js";
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ error: "Failed to read cities data" });
  }
});

router.get("/province/:provinceCode", async (req, res) => {
  try {
    const { provinceCode } = req.params;
    const filteredCities = await City.find({ province_code: provinceCode });
    res.status(200).json(filteredCities);
  } catch (err) {
    res.status(500).json({ error: "Failed to read cities data" });
  }
});

router.get("/:cityCode", async (req, res) => {
  try {
    const { cityCode } = req.params;
    const city = await City.findOne({ city_code: cityCode });
    if (!city) return res.status(404).json({ error: "City not found" });
    res.status(200).json(city);
  } catch (err) {
    res.status(500).json({ error: "Failed to read cities data" });
  }
});

export default router;
