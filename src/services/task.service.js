import Task from "../models/task.model";
import tasks from '../dummy json/tasks.json';

var allTasks = undefined

export function getAllTasks(){
    if(allTasks === undefined){
        allTasks = []
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

    return allTasks
}

export function deleteTask(taskId){
    allTasks = allTasks.filter((task)=>task.id!==taskId)

    return allTasks
}

export function editTask(taskId, taskName){
    allTasks = allTasks.map(task =>{
        if(task.id === taskId){
            task.title = taskName
        }

        return task
    })

    return allTasks
}

export function getActiveTask(){
    let activeTasks = allTasks.filter((task) => !task.isDone)
    return activeTasks
}

export function getCompletedTask(){
    let completdTasks = allTasks.filter((task) => task.isDone)
    return completdTasks
}