import Joi from "joi";

export const courseSchema: Joi.ObjectSchema<any> = Joi.object().keys({
  id: Joi.number().required().strict(),
  name: Joi.string().required(),
  author: Joi.string().required(),
  createdAt: Joi.date().required(),
});
