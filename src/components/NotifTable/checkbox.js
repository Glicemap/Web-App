function Checkbox(props) {
    return (
        <input
        key={props.key}
        id={props.id}
        onChange={props.onChange}
        checked={props.isChecked}
      />
    );
}

export default Checkbox;