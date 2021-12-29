This is a simple backend with express.js and Joi. There is runtime validation for the types of the Course interface, when the client gets the data with a GET /courses and when it tries to insert new data with POST /courses.

CourseSchema.ts repeats the interface defined on Course.ts with the Joi dependencies to create a Joi object that validates any object. There is a middleware (JoiMiddleware.ts) that checks the body of a request with a given schema, this follows the example given on the official docs.
