import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLoginCode } from '../../../contexts/LoginCode';

import navigation from '../../../menu-items';
import { BASENAME } from '../../../config/constant';
import { LOGOUT } from '../../../store/actions';

const Breadcrumb = () => {
    const [main, setMain] = useState([]);
    const [item, setItem] = useState([]);
    const dispatcher = useDispatch();
    const { setLoginCode } = useLoginCode();

    const handleLogout = () => {
        try {
            // Force the LOGOUT
            //if (response.data.success) {
            dispatcher({ type: LOGOUT });
            setLoginCode("");

            //} else {
            //    console.log('response - ', response.data.msg);
            //}
        }
        catch (error) {
            console.log('error - ', error);
        };
    };

    useEffect(() => {
        navigation.items.map((item, index) => {
            if (item.type && item.type === 'group') {
                getCollapse(item, index);
            }
            return false;
        });
    });

    const getCollapse = (item, index) => {
        if (item.children) {
            item.children.filter((collapse) => {
                if (collapse.type && collapse.type === 'collapse') {
                    getCollapse(collapse, index);
                } else if (collapse.type && collapse.type === 'item') {
                    if (document.location.pathname === BASENAME + collapse.url) {
                        setMain(item);
                        setItem(collapse);
                    }
                }
                return false;
            });
        }
    };

    let mainContent, itemContent;
    let breadcrumbContent = '';
    let title = '';

    if (main && main.type === 'collapse') {
        mainContent = (
            <ListGroup.Item as="li" bsPrefix=" " className="breadcrumb-item">
                <Link to="#">{main.title}</Link>
            </ListGroup.Item>
        );
    }

    if (item && item.type === 'item') {
        title = item.title;
        itemContent = (
            <ListGroup.Item as="li" bsPrefix=" " className="breadcrumb-item">
                <Link to="#">{title}</Link>
            </ListGroup.Item>
        );

        if (item.breadcrumbs !== false) {
            breadcrumbContent = (
                <div className="page-header">
                    <div className="page-block">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="page-header-title">
                                    <h5 className="m-b-10">{title}</h5>
                                    <Link to="/" className="dud-logout" onClick={handleLogout} title="Logout">
                                        <i className="feather icon-log-out" /><span> Logout</span>
                                    </Link>
                                </div>
                                <ListGroup as="ul" bsPrefix=" " className="breadcrumb">
                                    <ListGroup.Item as="li" bsPrefix=" " className="breadcrumb-item">
                                        <Link to="/">
                                            <i className="feather icon-home" />
                                        </Link>
                                    </ListGroup.Item>
                                    {mainContent}
                                    {itemContent}
                                </ListGroup>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }

    return <React.Fragment>{breadcrumbContent}</React.Fragment>;
};

export default Breadcrumb;
