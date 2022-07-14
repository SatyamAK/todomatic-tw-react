import Task from "../models/task.model";
import tasks from '../dummy json/tasks.json';

var allTasks = []
export function getAllTasks(){
    if(allTasks === undefined || allTasks.length === 0){
        tasks.map(
            (task) => allTasks.push(
                new Task(
                        task.id, 
                        task.title, 
                        task.isDone
                )
            )
        )
    }

    return allTasks
}

export function toggleTaskDoneOrNot(taskId){
    allTasks = tasks.map(task => {
        if(task.id === taskId){
            task.isDone = !task.isDone
        }

        return task
    })

    return allTasks
}