import express from "express";
import { promptController } from "../controllers/prompt-controller.js";

const routes = express.Router();

routes.post("/api/prompt", promptController);

export default routes;
