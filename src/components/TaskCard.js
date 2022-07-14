import './TaskCard.css';
import AccentButton from './AccentButton';
import SecondaryButton from './SecondaryButton';

export default function TaskCard(props){
    return(
        <div className='task-card'>
            <div className='task-status'>
                <input type="checkbox" checked={props.task.isDone}></input>
                <div className='task-name'>{props.task.title}</div>
            </div>
            <div className='buttons-container'>
                <SecondaryButton title="Edit" />
                <AccentButton title="Accent"/>
            </div>
        </div>
    );
}