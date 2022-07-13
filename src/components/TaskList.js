import './TaskList.css'
import TaskCard from "./TaskCard";

export default function TaskcardList(){
    return (
        <div className="task-list">
            <TaskCard />
            <TaskCard />
        </div>
    );
}