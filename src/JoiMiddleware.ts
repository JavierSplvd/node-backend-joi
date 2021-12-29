import { Request, Response } from "express";
import Joi from "joi";

export const joiMiddleware = (schema: Joi.ObjectSchema<any>) => {
  return (req: Request, res: Response, next: any) => {
    const { error } = schema.validate(req.body);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i: any) => i.message).join(",");

      console.log("error", message);
      res.status(422).json({ error: message });
    }
  };
};
