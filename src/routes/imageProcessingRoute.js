import express from "express";
import * as imageProcessController from "../controllers/imageProcessController.js";

export const imageProcessRouter = express.Router();

imageProcessRouter.post("/upload", imageProcessController.upload);

imageProcessRouter.get("/status", imageProcessController.status);
