import axios from 'axios';

export const login = async (data) =>{

    const response = await axios.post('/api/login', data);

    return response;
}

export const createUser = async (data) =>{

    const response = await axios.post('/api/createUser', data);

    return response;
}

export const changePassword = async (data) =>{
    const response = await axios.post('/api/changePassword', data);

    return response;
}

export const saveUserToken = async (data) =>{
    const response = await axios.put('/api/saveUserToken', data);

    return response;
}

export const checkUserToken = async (data) =>{
    const response = await axios.post('/api/checkUserToken', data);

    return response;
}