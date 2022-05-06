import { add, getAll, getByAuthor} from '../utils/file';
import { Request, Response } from "express";

// get all tasks 

export const getTasksList = async (req: Request, res: Response) => {
    const tasks = await getAll();

    try {
        res.status(200).send(tasks);
        
    } catch (e: any){
        res.status(404).send(e.message);
    }
    
}



//  get task by author
export const getTaskByAuthor = async (req: Request, res: Response ) =>  { 
    
    try{
      const author = req.params.author;
      const tasks = await getByAuthor(author);
  
      if (tasks.length === 0) {
         
        res.status(404).send(JSON.stringify({error: `task with author: ${author} not found`}))
      } else{
        res.status(200).send(JSON.stringify(tasks));
      }
    } catch (e){
        console.error(e);
    }
    
}




//add tasks
export const addTask =  async (req: Request, res: Response) => {

  const newTaskData = await (req.body);
  await add(newTaskData);
  res.status(201).send(
    JSON.stringify({
      success: true,
      message: newTaskData
    }));
 };

