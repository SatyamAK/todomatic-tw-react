import './Todo.css';
import Heading from "../components/Heading";
import TodoForm from "../components/TodoForm";
import Tabs from "../components/Tabs";
import TaskcardList from '../components/TaskList';
import { getAllTasks, toggleTaskDoneOrNot } from '../services/task.service';
import { useState } from 'react';

export default function Todo(){

    const [taskList, setTaskList] = useState(false)

    function toggleTask(taskId){
        let updatedTaskList = toggleTaskDoneOrNot(taskId)
        setTaskList(updatedTaskList)
    }

    return(
        <div className="todo">
            <Heading heading = "ToDoMatic" />
            <TodoForm />
            <Tabs />
            <TaskcardList taskList = {getAllTasks()} toggleTaskDoneOrNot = {toggleTask} />
        </div>
    );
}