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

    return axios.get(`${API_SERVER}/new-code/`, { headers })
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error)
    });
    
};

export const fetchPatients = async (name, from, to, frequency) => {
    from = typeof from === 'undefined' || from === '' ? null : from.split('-');
    from = from === null ? null : `${from[2]}-${from[1]}-${from[0]}`
    
    to = typeof to === 'undefined' || to === '' ? null : to.split('-');
    to = to === null ? null : `${to[2]}-${to[1]}-${to[0]}`
    
    name = typeof name === 'undefined' || name === '' ? null : name;
    
    frequency = typeof frequency === 'undefined' || frequency === '' ? null : frequency;
    
    const headers = {
        "CRM": "123456"
    };

    var body = {
        "name": name,
        "from": from,
        "to": to,
        "frequency": frequency
    };

    return axios({method: "post", url: `${API_SERVER}/patients/`, headers: headers, data: body})
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error.response)
    });
};

export const fetchPatient = async (documentNumber, from, to) => {
    from = typeof from === 'undefined' || from === '' ? null : from.split('-');
    from = from === null ? null : `${from[2]}-${from[1]}-${from[0]}`
    
    to = typeof to === 'undefined' || to === '' ? null : to.split('-');
    to = to === null ? null : `${to[2]}-${to[1]}-${to[0]}`

    documentNumber = typeof documentNumber === 'undefined' ? "" : documentNumber;

    var body = {
        "from": from,
        "to": to
    };

    return axios({method: "post", url: `${API_SERVER}/patients/${documentNumber}`, data: body})
    .then(response => {
        console.log(response);
        return response.data;
    })
    .catch(error => {
        console.log(error.response)
    });
};

export const fetchAllNotifications = () => {
    const headers = {
        'CRM': '123456'
    };

    return axios.get(`${API_SERVER}/notifications/`, { headers })
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error)
    });
};

export const readNotifications = (ids) => {
    var body = {
        "ids": ids
    };

    return axios({method: "put", url: `${API_SERVER}/notifications/`, data: body})
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error.response)
    });
};

export const deleteNotifications = (ids) => {
    const body = {
        "ids": ids
    };

    return axios({method: "delete", url: `${API_SERVER}/notifications/`, data: body})
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error.response)
    });
};

export const fetchAllSettings = (id) => {
    const headers = {
        'CRM': '123456'
    };

    return axios.get(`${API_SERVER}/settings/`, { headers })
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
    });
};

export const updateSettings = (CRM, name, email) => {

    name = typeof name === 'undefined' ? null : name;

    email = typeof email === 'undefined' ? null : email;

    CRM = typeof CRM === 'undefined' ? null : CRM;

    var body = {
        name: name,
        email: email,
        CRM: CRM
    }

    return axios({method: "put", url: `${API_SERVER}/settings/`, data: body})
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error.response)
    });
};

export const updatePassword = (oldPassword, newPassword) => {
    var body = {
        oldPassword: oldPassword,
        newPassword: newPassword
    }

    const headers = {
        'CRM': '123456'
    };

    console.log(body);
    return axios({method: "put", url: `${API_SERVER}/password/`, headers: headers, data: body})
    .then(response => {
        console.log(response.data);
        return response.data;
    })
    .catch(error => {
        console.log(error.response)
    });
};