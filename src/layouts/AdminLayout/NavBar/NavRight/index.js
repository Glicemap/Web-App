import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ChatList from './ChatList';
import { API_SERVER } from '../../../../config/constant';
import { LOGOUT } from './../../../../store/actions';

const NavRight = () => {
    const account = useSelector((state) => state.account);
    const dispatcher = useDispatch();

    const [listOpen, setListOpen] = useState(false);

    const handleLogout = () => {
        axios
            .post(API_SERVER + 'users/logout', {}, { headers: { Authorization: `${account.token}` } })
            .then(function (response) {
                // Force the LOGOUT
                //if (response.data.success) {
                dispatcher({ type: LOGOUT });
                //} else {
                //    console.log('response - ', response.data.msg);
                //}
            })
            .catch(function (error) {
                console.log('error - ', error);
            });
    };

    return (
        <React.Fragment>
            <ListGroup as="ul" bsPrefix=" " className="navbar-nav ml-auto" id="navbar-right">
                <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="dud-logout" onClick={handleLogout} title="Logout">
                        <i className="feather icon-log-out" /><span> Logout</span>
                    </Link>
                </ListGroup.Item>
            </ListGroup>
            <ChatList listOpen={listOpen} closed={() => setListOpen(false)} />
        </React.Fragment>
    );
};

export default NavRight;
