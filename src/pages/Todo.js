import Heading from "../components/Heading";
import ToDoForm from "../components/ToDoForm";

export default function Todo(){
    return(
        <div className="toDo">
            <Heading heading = "ToDoMatic" />
            <ToDoForm />
        </div>
    );
}