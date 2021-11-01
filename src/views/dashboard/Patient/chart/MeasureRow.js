function MeasureRow(props) {
    return (
        <tr className="unread">
            <td className="col-xl-3">
                <h6 className="text-muted">{props.date}</h6>
            </td>
            <td className="col-xl-3">
                <h6 className="text-muted">{props.ocasion}</h6>
            </td>
            <td className="col-xl-3 progress-registers">
                <h6 className="text-muted">{props.glicemy} mg/dl</h6>
            </td>
            <td className="col-xl-3 progress-registers">
                <h6 className="text-muted">{props.insulin}</h6>
            </td>
        </tr>
    );
}

export default MeasureRow;