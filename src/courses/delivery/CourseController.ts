import { Request, Response } from "express";
import { courseRepository } from "../data/CourseRepository";

export const get = (req: Request, res: Response): Promise<any> => {
  return courseRepository
    .get()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
};

export const post = async (req: Request, res: Response) => {
  res.send("OK");
};
