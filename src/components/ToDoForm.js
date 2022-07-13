import './TodoForm.css'
import TextField from "./TextField";
import PrimaryButton from "./PrimaryButton";

export default function ToDoForm(){

    return (
        <form className="todoForm">
            <TextField hintText="What Needs To Be Done?" />
            <PrimaryButton title="Add" />
        </form>
    );
}