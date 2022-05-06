import { Express, Request, Response } from "express";
import { addTask, getTaskByAuthor, getTasksList } from "./controllers/tasks.controller";
import validate from "./middleware/validate";
import { createPostSchema } from "./schema/tasks.schema";




export  default function (app: Express){

    // get all task url
    app.get('/tasks', getTasksList);

    // Get a task by author
    app.get("/tasks/:author", getTaskByAuthor);
    
    // add task
    app.post("/tasks", validate(createPostSchema), addTask);
    
}