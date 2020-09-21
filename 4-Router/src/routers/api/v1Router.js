import express from "express";
import { buy, refund } from "../../controllers/apiController";

const v1Router = express.Router();

v1Router.get("/buy", buy);
v1Router.get("/refund", refund);

export default v1Router;
