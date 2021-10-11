import React, { useState, useEffect } from 'react';
import { Catalogues } from './mock';
import { Row, Col, Table, Card, Button } from 'react-bootstrap';
import Checkbox from '../../../components/NotifTable/checkbox';
import { fetchAllNotifications, readNotifications, deleteNotifications } from '../../../api/requests';
//import deleteNotifications from '../../../api/requests';

const Notifications = () => {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);

    /*async function getNotifications() {
        var fullList = await fetchAllNotifications();
        return fullList.data;
    }*/

    useEffect(() => {
        setList(Catalogues);
    }, [list]);

    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    const notifications = list.map(({ id, text }) => {
        return (
            <tr className="unread">
                <td className="col-xl-1">
                    <Checkbox 
                        key={id}
                        id={id}
                        handleClick={handleClick}
                        isChecked={isCheck.includes(id)}
                    />
                </td>
                <td className="col-xl-11">
                    {text}
                </td>
            </tr>
        );
    });

    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <Row>
                        <Col xl={12}>
                            <Button variant="secondary" style={{float: "left"}}>Marcar como lido{" "}<i className="feather icon-check" style={{margin:"0"}}/* onClick={console.log(deleteNotifications(["1"]))}*//></Button>
                            <Button variant="secondary" style={{float: "left"}}>Excluir{" "}<i className="feather icon-trash" style={{margin:"0"}}/></Button>
                        </Col>
                        <Col xl={12}>
                        <Table responsive>
                                <tbody>
                                    <tr className="unread">
                                        <td className="col-xl-1">
                                            <Checkbox 
                                                type="checkbox"
                                                id="selectAll"
                                                handleClick={handleSelectAll}
                                                isChecked={isCheckAll}
                                            />
                                        </td>
                                        <td className="col-xl-11"><b>Mensagem</b></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col xl={12}>
                            <Table responsive>
                                <tbody>
                                    {notifications}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default Notifications;
