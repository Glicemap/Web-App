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

export const getNewCode = () => {
    return client.get('/get-new-code/');
};

export const fetchPatients = (name, from, to, frequency) => {
    var request = {
        params: {
            name: (typeof name === 'undefined' ? '' : name),
            from: (typeof from === 'undefined' ? '' : from),
            to: (typeof to === 'undefined' ? '' : to),
            frequency: (typeof frequency === 'undefined' ? '' : frequency)
        }
    }

    return client.get('/get-patients/', request);
};

export const fetchPatient = (id, from, to) => {
    var request ={
        params: {
            id: (typeof id === 'undefined' ? '' : id),
            from: (typeof from === 'undefined' ? '' : from),
            to: (typeof to === 'undefined' ? '' : to)
        }
    }

    return client.get('/get-patient', request);
};

export const fetchAllNotifications = () => {
    return client.get('/get-notifications/');
};

export const readNotifications = (ids) => {
    var params = new URLSearchParams();
    for (let i = 0; i < ids.length; i++) {
        params.append("id", ids[i]);
    }
    var request = {
        params: params
    };

    return client.post('/read-notifications/', request);
};

export const deleteNotifications = (ids) => {
    var params = new URLSearchParams();
    for (let i = 0; i < ids.length; i++) {
        params.append("id", ids[i]);
    }
    var request = {
        params: params
    };

    return client.delete('/delete-notifications/', request);
};

export const fetchAllSettings = (id) => {
    var request = {
        params: {
            id: (typeof id === 'undefined' ? '' : id)
        }
    }

    return client.get('/get-settings/', request);
};

export const updateSettings = (id, email, name, crm) => {
    var request = {
        params: {
            id: (typeof id === 'undefined' ? '' : id),
            name: (typeof name === 'undefined' ? '' : name),
            email: (typeof email === 'undefined' ? '' : email),
            crm: (typeof crm === 'undefined' ? '' : crm)
        }
    }

    return client.post('/update-settings/', request);
};

export const updatePassword = (id, current, new_pass) => {
    var request = {
        params: {
            id: (typeof id === 'undefined' ? '' : id),
            current: (typeof current === 'undefined' ? '' : current),
            new_pass: (typeof new_pass === 'undefined' ? '' : new_pass)
        }
    }

    return client.post('/update-password/', request);
};