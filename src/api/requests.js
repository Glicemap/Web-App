import axios from 'axios';
import utilizeMock from './useMock';
import { API_SERVER } from '../config/constant.js';

const mockRequests = false;

const client = axios.create({
    baseUrl: API_SERVER
});

if (mockRequests) {
    utilizeMock(client);
}

export const getNewCode = async () => {
    const headers = {
        'CRM': '123456'
    };

    return await axios.get(`${API_SERVER}/new-code/`, { headers })
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error)
    });
    
};

export const fetchPatients = async (name, from, to, frequency) => {
    from = typeof from === 'undefined' ? null : from.split('-');
    from = from === null ? null : `${from[2]}-${from[1]}-${from[0]}`
    
    to = typeof to === 'undefined' ? null : to.split('-');
    to = to === null ? null : `${to[2]}-${to[1]}-${to[0]}`
    
    name = typeof name === 'undefined' ? null : name;
    
    frequency = typeof frequency === 'undefined' ? null : frequency;
    
    const headers = {
        'CRM': '123456'
    };

    var body = {
        "name": name,
        "from": from,
        "to": to,
        "frequency": frequency
    };

    return await axios.get(`${API_SERVER}/patients/`, { headers })
    .then(response => {
        
        return response.data;
    })
    .catch(error => {
        console.log(axios.get(`${API_SERVER}/patients/`, { headers }));
        console.log(error.response)
    });
};

export const fetchPatient = async (id, from, to) => {
    from = typeof from === 'undefined' ? null : from.split('-');
    from = from === null ? null : `${from[2]}-${from[1]}-${from[0]}`
    
    to = typeof to === 'undefined' ? null : to.split('-');
    to = to === null ? null : `${to[2]}-${to[1]}-${to[0]}`

    id = typeof id === 'undefined' ? null : id;

    var request ={
        params: {
            id: id,
            from: from,
            to: to
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
    id = typeof id === 'undefined' ? null : id;

    var request = {
        params: {
            id: id
        }
    }

    return client.get('/get-settings/', request);
};

export const updateSettings = (id, email, name, crm) => {
    id = typeof id === 'undefined' ? null : id;

    name = typeof name === 'undefined' ? null : name;

    email = typeof email === 'undefined' ? null : email;

    crm = typeof crm === 'undefined' ? null : crm;

    var request = {
        params: {
            id: id,
            name: name,
            email: email,
            crm: crm
        }
    }

    return client.post('/update-settings/', request);
};

export const updatePassword = (id, current, new_pass) => {
    id = typeof id === 'undefined' ? null : id;

    current = typeof current === 'undefined' ? null : current;

    new_pass = typeof new_pass === 'undefined' ? null : new_pass;

    var request = {
        params: {
            id: id,
            current: current,
            new_pass: new_pass
        }
    }

    return client.post('/update-password/', request);
};