import './PrimaryButton.css';

export default function PrimaryButton(props){
    return(
        <button type={props.type} className='primary-button' onClick = {props.onClick}>{props.title}</button>
    );
}