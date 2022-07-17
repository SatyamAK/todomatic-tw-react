import './TaskCard.css';
import AccentButton from './AccentButton';
import SecondaryButton from './SecondaryButton';
import { useState } from 'react';

export default function TaskCard(props){

    const [taskName, setTaskName] = useState("")

    const editContainer = (
        <form className='edit-container' onSubmit= {handleSubmit}>
            <input type="text" 
                value={taskName} 
                onChange = {changeHandler}
                placeholder={'What will be the new name of '+props.task.title} 
                onSubmit = {handleSubmit}
            />
            <SecondaryButton title="Save" type = "submit" onClick={null}/>
            <AccentButton title="Cancel" onClick={()=> setEditing(-1)}/>
        </form>
    );

    const buttonsContainer = (
        <div className='buttons-container'>
            <SecondaryButton title="Edit" type = "button" onClick = {() => setEditing(props.task.id)}/>
            <AccentButton title="Delete" onClick={()=> props.delTask(props.task.id)} />
        </div>
    );

    function onChange(taskId){
        props.toggleTaskDoneOrNot(taskId)
    }

    function setEditing(taskId){
        props.toggleTaskEdit(taskId)
    }

    function changeHandler(event){
        setTaskName(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();

        if(taskName === "") return

        props.editATask(props.taskIdToBeUpdated, taskName)
        setTaskName("")
        setEditing(-1)
    }

    return(
        <div className='task-card'>
            <div className='task-status'>
                <input type="checkbox" checked={props.task.isDone} onChange={() => onChange(props.task.id)}></input>
                <div className='task-name'>{props.task.title}</div>
            </div>
            { (props.taskIdToBeUpdated === props.task.id)?editContainer:buttonsContainer }
        </div>
    );
}