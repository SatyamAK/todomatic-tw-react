import './Todo.css';
import Heading from "../components/Heading";
import TodoForm from "../components/TodoForm";
import Tabs from "../components/Tabs";
import TaskcardList from '../components/TaskList';

export default function Todo(){
    return(
        <div className="todo">
            <Heading heading = "ToDoMatic" />
            <TodoForm />
            <Tabs />
            <TaskcardList />
        </div>
    );
}