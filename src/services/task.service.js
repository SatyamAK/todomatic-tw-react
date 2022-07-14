import Task from "../models/task.model";
import tasks from '../dummy json/tasks.json';

export function getAllTasks(){
    let allTasks = []
    tasks.map(
        (task) => allTasks.push(
            new Task(
                    task.id, 
                    task.title, 
                    task.isDone
            )
        )
    )

    return allTasks
}