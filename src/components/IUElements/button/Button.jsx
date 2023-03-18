import s from "./Button.module.css";

const Button = (props) => {
  return <button className={s.btn}>{props.text}</button>;
};

export default Button;
