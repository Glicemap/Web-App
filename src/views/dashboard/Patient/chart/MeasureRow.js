function MeasureRow(props) {
    return (
        <tr className="unread">
            <td className="col-xl-3">
                <h6 className="text-muted">{props.date.replaceAll("-", "/")}</h6>
            </td>
            <td className="col-xl-3">
                <h6 className="text-muted">{props.situation}</h6>
            </td>
            <td className="col-xl-3 progress-registers">
                <h6 className="text-muted">{props.sugarLevel} mg/dl</h6>
            </td>
            <td className="col-xl-3 progress-registers">
                <h6 className="text-muted">{props.insulin}</h6>
            </td>
        </tr>
    );
}

export default MeasureRow;