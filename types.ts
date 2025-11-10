import { courses } from "./data/courses";

// Strict course type from courses list
export type CourseType = (typeof courses)[number];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  course: CourseType;
  price: number;
};
