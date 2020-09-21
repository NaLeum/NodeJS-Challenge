import express from "express";
import globalRouter from "./routers/globalRouter";
import coursesRouter from "./routers/courseRouter";
import apiRouter from "./routers/apiRouter";

const app = express();

app.use("/", globalRouter);
app.use("/courses", coursesRouter);
app.use("/api", apiRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
