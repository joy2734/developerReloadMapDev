import axios from 'axios';

export const login = async (data) =>{
    const reponse = await axios.get('/login', data);

    return reponse.json();
}

export const createUser = async (data) =>{

    const response = await axios.post('/createUser', data);

    return response.json();
}

export const changePassword = async (data) =>{
    const reponse = await axios.post('/changePassword', data);

    return reponse.json();
}