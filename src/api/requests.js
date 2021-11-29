import axios from 'axios';
import utilizeMock from './useMock';
import { API_SERVER } from '../config/constant.js';
import * as FileSaver from "file-saver";

const mockRequests = false;

const client = axios.create({
    baseUrl: API_SERVER
});

if (mockRequests) {
    utilizeMock(client);
}

export const getNewCode = async (crm) => {
    
    const headers = {
        'CRM': crm
    };
    console.log(headers)

    return axios.get(`${API_SERVER}/new-code/`, { headers })
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error)
    });
    
};

export const fetchPatients = async (name, from, to, frequency, crm) => {
    from = typeof from === 'undefined' || from === '' ? null : from;
    
    to = typeof to === 'undefined' || to === '' ? null : to;
    
    name = typeof name === 'undefined' || name === '' ? null : name;
    
    frequency = typeof frequency === 'undefined' || frequency === '' ? null : frequency;
    
    const headers = {
        "CRM": crm
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
    from = typeof from === 'undefined' || from === '' ? null : from;
    
    to = typeof to === 'undefined' || to === '' ? null : to;

    documentNumber = typeof documentNumber === 'undefined' ? "" : documentNumber;

    var body = {
        "from": from,
        "to": to
    };
    
    return axios({method: "post", url: `${API_SERVER}/patients/${documentNumber}`, data: body})
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error.response)
    });
};

export const fetchDocument = async (document, from, to, name) => {
    from = typeof from === 'undefined' || from === '' ? null : from;
    
    to = typeof to === 'undefined' || to === '' ? null : to;

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const currentDate = `${date}-${month<10?`0${month}`:`${month}`}-${year}`

    const fileName = `Relatório-${name.replaceAll(" ", "-")}-${currentDate}`

    var headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/pdf',
        "documentNumber": document,
        "dateBegin": from,
        "dateEnd": to
    };

    var responseType = "arraybuffer";

    console.log(headers)

    return axios({method: "get", url: `${API_SERVER}/report/`, headers: headers, responseType: responseType})
    .then(response => {
        console.log(response.data)
        
        var blob = new Blob([response.data], {type: "application/pdf;charset=utf-8"});
        FileSaver.saveAs(blob, fileName);
    })
    .catch(error => {
        console.log(error.response)
    });
};

export const fetchAllNotifications = (crm) => {
    const headers = {
        'CRM': crm
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

export const fetchAllSettings = (crm) => {
    const headers = {
        'CRM': crm
    };

    return axios.get(`${API_SERVER}/settings/`, { headers })
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
    });
};

export const updateSettings = (CRM, name, email, password) => {

    name = typeof name === 'undefined' ? null : name;

    email = typeof email === 'undefined' ? null : email;

    CRM = typeof CRM === 'undefined' ? null : CRM;

    password = typeof password === 'undefined' ? null : password;

    var body = {
        name: name,
        email: email,
        CRM: CRM,
        password: password
    }

    return axios({method: "put", url: `${API_SERVER}/settings/`, data: body})
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error.response)
    });
};

export const updatePassword = (oldPassword, newPassword, crm) => {
    var body = {
        oldPassword: oldPassword,
        newPassword: newPassword
    }

    const headers = {
        'CRM': crm
    };

    return axios({method: "put", url: `${API_SERVER}/password/`, headers: headers, data: body})
    .then(response => {
        console.log(response.data);
        return response.data;
    })
    .catch(error => {
        console.log(error.response)
    });
};