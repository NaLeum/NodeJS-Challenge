import express from "express";
import { courses, newCourses, mine } from "../controllers/coursesController";

const coursesRouter = express.Router();

coursesRouter.get("/", courses);
coursesRouter.get("/new", newCourses);
coursesRouter.get("/mine", mine);

export default coursesRouter;
