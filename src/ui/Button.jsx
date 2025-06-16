function Button(props) {
  return (
    <button
    onClick={props.onClick}
      className={` ${props.className}`}
      style={{ backgroundColor: props.color }}
    >
      {props.children}
    </button>
  );
}
export default Button;
