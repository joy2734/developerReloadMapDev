import axios from 'axios';

export const login = async (data) =>{
    const response = await axios.get('/api/login', data);

    return response.json();
}

export const createUser = async (data) =>{

    const response = await axios.post('/api/createUser', data);

    return response;
}

export const changePassword = async (data) =>{
    const response = await axios.post('/api/changePassword', data);

    return response;
}