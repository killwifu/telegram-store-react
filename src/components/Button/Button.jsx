import './Button.css';

const Button = (props) => {
  return <button {...props} className={'button' + props.className} >123</button>;
};

export default Button;
