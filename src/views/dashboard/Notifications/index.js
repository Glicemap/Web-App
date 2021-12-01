import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Card, Button } from 'react-bootstrap';
import Checkbox from '../../../components/NotifTable/checkbox';
import { fetchAllNotifications, readNotifications, deleteNotifications } from '../../../api/requests';
import { useLoginCode } from '../../../contexts/LoginCode';

const Notifications = () => {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);
    const { loginCode, setLoginCode } = useLoginCode();

    useEffect(() => {
        async function fetch() {
            const x = await fetchAllNotifications(loginCode);
            setList(x.notifications);
        }
        fetch()
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

    function findChecked() {
        const notifs = document.getElementsByClassName("notifications-table")[0].children;
        let checkedNotifs = [];
        for (var i = 0; i < notifs.length; i++) {
            if (notifs[i].children[0].children[0].checked) {
                checkedNotifs.push(notifs[i].children[0].children[0].id);
            };
        };
        return checkedNotifs;
    };

    function handleRead() {
        let ids = findChecked();
        readNotifications(ids);
    };

    function handleDelete() {
        let ids = findChecked();
        deleteNotifications(ids);
    };

    const notifications = list.map(({ id, text, read }) => {
        const boldClass = read ? "col-xl-11" : "col-xl-11 notif-read"
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
                <td className={boldClass}>
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
                            <Button 
                                variant="secondary"
                                style={{float: "left"}}
                                onClick={handleRead}
                            >
                                Marcar como lido{" "}<i className="feather icon-check" style={{margin:"0"}}/>
                            </Button>
                            <Button 
                                variant="secondary"
                                style={{float: "left"}}
                                onClick={handleDelete}
                            >
                                Excluir{" "}<i className="feather icon-trash" style={{margin:"0"}}/>
                            </Button>
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
                                <tbody className="notifications-table">
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
