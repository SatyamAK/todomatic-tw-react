import './SecondaryButton.css';

export default function SecondaryButton(props){
    return(
        <button type='button' className='secondary-button' >{props.title}</button>
    );
}