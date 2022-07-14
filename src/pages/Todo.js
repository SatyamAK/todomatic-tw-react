import './Todo.css';
import Heading from "../components/Heading";
import TodoForm from "../components/TodoForm";
import Tabs from "../components/Tabs";
import TaskcardList from '../components/TaskList';
import { getAllTasks, toggleTaskDoneOrNot, addTask } from '../services/task.service';
import { useState } from 'react';

export default function Todo(){

    const [taskList, setTaskList] = useState(false)

    function toggleTask(taskId){
        let updatedTaskList = toggleTaskDoneOrNot(taskId)
        setTaskList(updatedTaskList)
    }

    function addNewTask(taskName){
        let updatedTaskList = addTask(taskName)
        setTaskList(updatedTaskList)
    }

    return(
        <div className="todo">
            <Heading heading = "ToDoMatic" />
            <TodoForm addNewTask = {addNewTask}/>
            <Tabs />
            <TaskcardList taskList = {getAllTasks()} toggleTaskDoneOrNot = {toggleTask}/>
        </div>
    );
}