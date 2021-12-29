import express from "express";
import { get, post } from "./courses/delivery/CourseController";
import { courseSchema } from "./courses/entities/CourseSchema";
import { joiMiddleware } from "./JoiMiddleware";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.send("Express + TypeScript Server"));

app.get("/courses", get);
app.post("/courses", joiMiddleware(courseSchema), post);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
