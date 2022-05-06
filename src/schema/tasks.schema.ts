import { object, string } from "yup";


const payload = {
  body: object({
    title: string().required("Title is required"),
    author: string().required("author is required"),
    description: string()
      .required("description is required")
      .min(50, "Body is too short - should be 50 chars minimum."),
  }),
};


export const createPostSchema = object({
  ...payload,
});

