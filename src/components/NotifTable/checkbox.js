function Checkbox(props) {
    return (
        <input
        key={props.key}
        id={props.id}
        onChange={props.handleClick}
        checked={props.isChecked}
        type="checkbox"
      />
    );
}

export default Checkbox;