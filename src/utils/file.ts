import {readFile, writeFile} from 'fs/promises'
import { Task } from "./ITask";


//  get all data from json file
export const getAll = async(): Promise<Task[]> => {
  const buffer = await readFile('./src/db.json', {
    encoding: 'utf-8'
  })

  return JSON.parse(buffer)
}


// get data by author 
export const getByAuthor  =  async(author:string) =>{
  const TasksList =  await getAll();
  const task = TasksList.filter(task => task.author === author) as any;

  if(task){
    return  task
  }
}  


// add data to json file
export const add = async (task: Task) => {
  const tasksList: any =  await getAll();
  let data = JSON.stringify(tasksList)
  let tasks: [Task] = JSON.parse(data);
  // get the id of the latest task
  let latest_id = tasks.reduce(
      (max = 0, task: Task) => (task.id > max ? task.id : max),
      0
    );
    // increment the id by 1
    task.id = latest_id + 1;
    // add the new task to the tasks array
    tasks.push(task);
    // write the new tasks array to the db.json file
    await writeFile('./src/db.json', JSON.stringify([...tasksList, task]));
}