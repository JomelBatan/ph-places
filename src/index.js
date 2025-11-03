import express from "express";
import cors from "cors";

import regionRoute from "./routes/region.js";
import provinceRoute from "./routes/province.js";
import cityRoute from "./routes/city.js";
import barangayRoute from "./routes/barangay.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/regions", regionRoute);
app.use("/provinces", provinceRoute);
app.use("/cities", cityRoute);
app.use("/barangays", barangayRoute);

app.get("/", (_, res) => {
  res.json({ message: "PH Geo API running locally ✅" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
