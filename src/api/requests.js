import axios from 'axios';
import utilizeMock from './useMock';
import { API_SERVER } from '../config/constant.js';
import qs from 'qs';

const mockRequests = true;

const client = axios.create({
    API_SERVER,
});

if (mockRequests) {
    utilizeMock(client);
}

export const fetchAllUsers = () => {
    return client.get('/all-users');
};

export const fetchSingleUser = (id) => {
    return client.get(`/single-user?id=${id}`);
};

export const getNewCode = () => {
    return client.get(`/get-new-code/`);
};

export const fetchAllPatients = () => {
    return client.get('/all-patients');
};

export const fetchAllNotifications = () => {
    return client.get('/all-notifications');
};

export const readNotifications = () => {
    return client.post('/read-notifications');
};

export /*default async function deleteNotifications(ids)*/ const deleteNotifications = () => {
    /*const idParams = ids.map((ids))

    const response = await this.client.delete('/delete-notifications', {
        params: {
            id: idParams
        },
        paramsSerializer: (params) => {
            return qs.stringify(params, {arrayFormat: 'reapeat' })
        },
    })*/

    return /*response*/ client.delete('/delete-notifications');
}