import express from "express";
import { getData } from "../utils/fetcher.js";

const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const data = await getData("barangays.json");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to read barangays data" });
  }
});

router.get("/city/:cityCode", async (req, res) => {
  try {
    const data = await getData("barangays.json");
    const filtered = data.filter((b) => b.city_code === req.params.cityCode);
    res.json(filtered);
  } catch (err) {
    res.status(500).json({ error: "Failed to read barangays data" });
  }
});

router.get("/:barangayCode", async (req, res) => {
  try {
    const data = await getData("barangays.json");
    const barangay = data.find((b) => b.brgy_code === req.params.barangayCode);
    if (!barangay) return res.status(404).json({ error: "Barangay not found" });
    res.json(barangay);
  } catch (err) {
    res.status(500).json({ error: "Failed to read barangays data" });
  }
});

export default router;
