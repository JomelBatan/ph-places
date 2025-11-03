import express from "express";
import { getData } from "../utils/fetcher.js";

const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const data = await getData("cities.json");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to read cities data" });
  }
});

router.get("/province/:provinceCode", async (req, res) => {
  try {
    const data = await getData("cities.json");
    const filtered = data.filter(
      (c) => c.province_code === req.params.provinceCode
    );
    res.json(filtered);
  } catch (err) {
    res.status(500).json({ error: "Failed to read cities data" });
  }
});

router.get("/:cityCode", async (req, res) => {
  try {
    const data = await getData("cities.json");
    const city = data.find((c) => c.city_code === req.params.cityCode);
    if (!city) return res.status(404).json({ error: "City not found" });
    res.json(city);
  } catch (err) {
    res.status(500).json({ error: "Failed to read cities data" });
  }
});

export default router;
