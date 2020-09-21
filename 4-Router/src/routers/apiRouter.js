import express from "express";
import { documentation } from "../controllers/apiController";
import v1Router from "./api/v1Router";
import v2Router from "./api/v2Router";

const apiRouter = express.Router();

apiRouter.get("/documentation", documentation);
apiRouter.use("/v1", v1Router);
apiRouter.use("/v2", v2Router);

export default apiRouter;
