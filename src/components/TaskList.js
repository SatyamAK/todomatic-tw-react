import './TaskList.css'
import TaskCard from "./TaskCard";
import { useState } from 'react';

export default function TaskcardList(props){

    const [taskIdToBeUpdated, setTaskIdToBeUpdated] = useState(-1)

    function toggleTaskEdit(taskId){
        setTaskIdToBeUpdated(taskId)
    }

    const taskList = props.taskList.map(task => 
        <TaskCard 
            task={task} 
            key={task.id} 
            toggleTaskDoneOrNot = {props.toggleTaskDoneOrNot}
            delTask = {props.delTask}
            taskIdToBeUpdated = { taskIdToBeUpdated }
            toggleTaskEdit = {toggleTaskEdit}
            editATask = {props.editATask}/>
    )
    
    return (
        <div className="task-list">
            { taskList }
        </div>
    );
}