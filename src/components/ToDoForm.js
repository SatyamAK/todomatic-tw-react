import TextField from "./TextField";
import PrimaryButton from "./PrimaryButton";

export default function ToDoForm(){

    return (
        <form className="ToDoForm">
            <TextField hintText="What Needs To Be Done?" />
            <PrimaryButton title="Add" />
        </form>
    );
}