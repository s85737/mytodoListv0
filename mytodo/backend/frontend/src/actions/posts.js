import axios from 'axios';
import { GET_POSTS } from './types';

// GET POSTS
// posts components 에서 호출
export const getPosts = () => async dispatch => {
    const res = await axios.get('/api/posts/');
    dispatch({
        type: GET_POSTS,
        payload: res.data
    });
};