import express from "express";
import { remove, edit } from "../../controllers/apiController";

const v2Router = express.Router();

v2Router.get("/buy", remove);
v2Router.get("/edit", edit);

export default v2Router;
