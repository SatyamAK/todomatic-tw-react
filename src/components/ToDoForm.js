import './TodoForm.css'
import TextField from "./TextField";
import PrimaryButton from "./PrimaryButton";
import { useState } from 'react';

export default function ToDoForm(props){
    
    const [name, setName] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        props.addNewTask(name)
        setName("")
    }

    function handleChange(event){
        setName(event.target.value)
    }

    return (
        <form className="todoForm" onSubmit={handleSubmit}>
            <TextField hintText="What Needs To Be Done?" value={name} handleChange={handleChange}/>
            <PrimaryButton title="Add" type="submit" onClick = {null}/>
        </form>
    );
}