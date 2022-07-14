import './TaskList.css'
import TaskCard from "./TaskCard";

export default function TaskcardList(props){
    const taskList = props.taskList.map(task => <TaskCard task={task} key={task.id} toggleTaskDoneOrNot = {props.toggleTaskDoneOrNot}/>)
    return (
        <div className="task-list">
            { taskList }
        </div>
    );
}