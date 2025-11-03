import express from "express";
import { getData } from "../utils/fetcher.js";

const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const data = await getData("provinces.json");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to read provinces data" });
  }
});

router.get("/region/:regionCode", async (req, res) => {
  try {
    const data = await getData("provinces.json");
    const filtered = data.filter(
      (p) => p.region_code === req.params.regionCode
    );
    res.json(filtered);
  } catch (err) {
    res.status(500).json({ error: "Failed to read provinces data" });
  }
});

router.get("/:provinceCode", async (req, res) => {
  try {
    const data = await getData("provinces.json");
    const province = data.find(
      (p) => p.province_code === req.params.provinceCode
    );
    if (!province) return res.status(404).json({ error: "Province not found" });
    res.json(province);
  } catch (err) {
    res.status(500).json({ error: "Failed to read provinces data" });
  }
});

export default router;
