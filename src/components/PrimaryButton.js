import './PrimaryButton.css';

export default function PrimaryButton(props){
    return(
        <button type='button' className='PrimaryButton' >{props.title}</button>
    );
}