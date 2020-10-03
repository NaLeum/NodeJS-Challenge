import express from "express";
import {
  home,
  movieDetail,
  createMovie,
  editMovie,
  deleteMovie,
  search
} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/", home);

movieRouter.get("/search", search);

movieRouter.route("/create").get(createMovie).post(createMovie);

movieRouter.get("/:id", movieDetail);

movieRouter.route("/:id/edit").get(editMovie).post(editMovie);

movieRouter.get("/:id/delete", deleteMovie);

export default movieRouter;
