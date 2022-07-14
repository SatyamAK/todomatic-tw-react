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
    allTasks = allTasks.map(task => {
        if(task.id === taskId){
            task.isDone = !task.isDone
        }

        return task
    })

    return allTasks
}

export function addTask(taskTitle){
    let lastIndex = allTasks.length
    let newTask = new Task(lastIndex+1, taskTitle, false)
    allTasks.push(newTask)

    return newTask
}