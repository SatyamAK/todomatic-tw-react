import './AccentButton.css';

export default function AccentButton(props){
    return(
        <button type='button' className='accent-button' onClick={props.onClick}>{props.title}</button>
    );
}