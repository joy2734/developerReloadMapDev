import axios from 'axios';

export const getMenus = async () =>{

    const response = await axios.get('/menu');

    return response.json();
}