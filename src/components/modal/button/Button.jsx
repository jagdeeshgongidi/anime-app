
import './button.scss';
const Button = props => {
    return <button className='modalBtn' onClick={props.onClick}>
        {props.children}
    </button>;
  };
  
  export default Button;
  