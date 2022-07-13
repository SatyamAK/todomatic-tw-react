import './TextField.css';

export default function TextField(props){
    return(
        <input placeholder={props.hintText} className="textField"></input>
    );
}