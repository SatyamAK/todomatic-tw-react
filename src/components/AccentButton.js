import './AccentButton.css';

export default function AccentButton(props){
    return(
        <button type='button' className='accent-button' >{props.title}</button>
    );
}