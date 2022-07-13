import './PrimaryButton.css';

export default function PrimaryButton(props){
    return(
        <button type='button' className='primary-button' >{props.title}</button>
    );
}