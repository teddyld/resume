import express from "express";

import "dotenv/config";
import cors from "cors";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("vincentResume.pdf", { root: "." });
});

app.listen(5050, () => console.log("🚀 Server is listening on port 5050..."));
