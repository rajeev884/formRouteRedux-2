import axios from 'axios';
import {API_KEY} from '../../API';

export const FETCH_POST = "FETCH_POST";
// export const FETCH_POST_BY_ID = "FETCH_POST_BY_ID";
// export const CREATE_POST = "CREATE_POST";
// export const DELETE_POST = "DELETE_POST";
export const ROOT_URL = `https://reduxblog.herokuapp.com/api/posts/`

export function fetchPosts(){
    const request =axios.get(`${ROOT_URL}${API_KEY}`);
    return{
        type:FETCH_POST,
        payload:request
    };   

}
