import axios from 'axios';

export const getPosts = async () =>{

    const response = await axios.get('/list');
    //console.log(response)
    return response.data;
}

export const getPost = async (id) =>{

    const response = await axios.get(`/list/?commuNum=${id}` );

    return response.data;
}