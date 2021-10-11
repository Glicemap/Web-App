function PatientRow(props) {
    var freq;
    var color;
    switch (props.frequency) {
        case 'low':
            freq = 'Baixa';
            color = 'text-c-red';
            break;
        case 'medium':
            freq = 'Média';
            color = 'text-c-yellow';
            break;
        case 'high':
            freq = 'Alta';
            color = 'text-c-green';
            break;
        default:
            freq = 'Indefinido';
            color = '';
    }
    const patientClass = 'fa fa-circle ' + color + ' f-10 m-r-15';
    const percentage = props.percentage + '%';

    return (
        <tr className="unread">
            <td className="col-xl-4">
                <a href="/patient-list/patient" as="h6" className="mb-1">{props.name}</a>
            </td>
            <td className="col-xl-4">
                <h6 className="text-muted">
                    <i className={patientClass} />
                    {freq}
                </h6>
            </td>
            <td className="col-xl-4 progress-registers">
                <tr>
                    <td className="percentage">
                        <p className="m-b-0">{props.percentage}%</p>
                    </td>
                    <td className="col-xl-12">
                        <div className="progress m-t-30" style={{ height: '4px', margin: '15px 0px' }}>
                            <div
                                className="progress-bar progress-c-theme"
                                role="progressbar"
                                style={{ width: percentage}}
                                aria-valuenow={props.percentage}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            />
                        </div>
                    </td>
                </tr>
            </td>
        </tr>
    );
}

export default PatientRow;
