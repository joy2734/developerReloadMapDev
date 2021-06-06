import axios from 'axios';

export const getMenus = async () =>{

    const response = await axios.get('/api/menu');

    return response.json();
}