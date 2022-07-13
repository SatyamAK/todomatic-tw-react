import Heading from "../components/Heading";
import ToDoForm from "../components/ToDoForm";
import Tabs from "../components/Tabs";

export default function Todo(){
    return(
        <div className="toDo">
            <Heading heading = "ToDoMatic" />
            <ToDoForm />
            <Tabs />
        </div>
    );
}