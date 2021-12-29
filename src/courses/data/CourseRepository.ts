import { Course } from "../entities/Course";
import { courseSchema } from "../entities/CourseSchema";

class CourseRepository {
  constructor() {}
  get(): Promise<Course[]> {
    const data: any[] = [
      {
        id: 1001,
        name: "React beginner",
        author: "John Madden",
        createdAt: new Date(),
      },
      {
        id: "4003",
        name: "Express beginner",
        author: 100,
        createdAt: new Date(),
      },
    ];
    const error = data.some((it) => {
      const { error } = courseSchema.validate(it);
      console.log(it, error);
      return error != null;
    });
    if (error) throw new Error("Validation error");
    return Promise.resolve(data);
  }
}

export const courseRepository = new CourseRepository();
