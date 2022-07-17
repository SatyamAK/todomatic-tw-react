import './SecondaryButton.css';

export default function SecondaryButton(props){
    return(
        <button type={props.type} className='secondary-button' onClick={props.onClick}>{props.title}</button>
    );
}