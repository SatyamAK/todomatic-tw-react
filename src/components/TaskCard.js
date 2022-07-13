import './TaskCard.css';
import AccentButton from './AccentButton';
import SecondaryButton from './SecondaryButton';

export default function TaskCard(){
    return(
        <div className='task-card'>
            <div className='task-status'>
                <input type="checkbox"></input>
                <div className='task-name'>Eating</div>
            </div>
            <div className='buttons-container'>
                <SecondaryButton title="Edit" />
                <AccentButton title="Accent"/>
            </div>
        </div>
    );
}