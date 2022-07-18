import './Todo.css';
import Heading from "../components/Heading";
import TodoForm from "../components/TodoForm";
import Tabs from "../components/Tabs";
import TaskcardList from '../components/TaskList';
import { getAllTasks, toggleTaskDoneOrNot, addTask, deleteTask, editTask, getActiveTask, getCompletedTask } from '../services/task.service';
import { useState } from 'react';

export default function Todo(){

    const [taskList, setTaskList] = useState(getAllTasks())
    const [selectedTab, setSelectedTab] = useState("All")

    function toggleTask(taskId){
        let updatedTaskList = toggleTaskDoneOrNot(taskId)
        setTaskList(updatedTaskList)
        setSelectedTab("All")
    }

    function addNewTask(taskName){
        let updatedTaskList = addTask(taskName)
        setTaskList([... updatedTaskList])
        setSelectedTab("All")
    }

    function delTask(taskId){
        let updatedTaskList = deleteTask(taskId)
        setTaskList(updatedTaskList)
    }

    function editATask(taskId, taskName){
        let updatedTaskList = editTask(taskId, taskName)
        setTaskList(updatedTaskList)
    }

    function applyFilter(filter){

        if(filter === "Active"){
            let activeTasks = getActiveTask()
            setTaskList(activeTasks)
        }

        if(filter === "Completed"){
            let completedTasks = getCompletedTask()
            setTaskList(completedTasks)
        }

        if(filter === "All"){
            let allTasks = getAllTasks()
            setTaskList(allTasks)
        }

        setSelectedTab(filter)
    }

    return(
        <div className="todo">
            <Heading heading = "ToDoMatic" />
            <TodoForm addNewTask = {addNewTask}/>
            <Tabs selectedTab = {selectedTab} applyFilter = {applyFilter}/>
            <TaskcardList 
                taskList = {taskList} 
                toggleTaskDoneOrNot = {toggleTask} 
                delTask = {delTask}
                editATask = {editATask}/>
        </div>
    );
}