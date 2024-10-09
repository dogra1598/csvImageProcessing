import express from "express";
import cors from "cors";

import { imageProcessRouter } from "./routes/imageProcessingRoute.js";

export const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use("", imageProcessRouter);
