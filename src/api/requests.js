import axios from 'axios';
import utilizeMock from './useMock';
import { API_SERVER } from '../config/constant.js';

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