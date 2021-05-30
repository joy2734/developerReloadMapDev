import * as  postAPI from '../lib/post';
import { createAction, handleActions } from 'redux-actions'
import{
    handleAsyncActions,
    handleAsyncActionsById,
    createPromiseSaga,
    createPromiseSagaById,
    createAsyncAction,
    reducerUtils 
} from '../lib/asyncUtils';
import { takeLatest, put, call } from "@redux-saga/core/effects";


const [
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR
] = createAsyncAction('post/GET_POSTS');

const [
    GET_POST,
    GET_POST_SUCCESS,
    GET_POST_ERROR
] = createAsyncAction('post/GET_POST');

export const postsAction = createAction(GET_POSTS)
export const postAction = createAction(GET_POST)

export const getPosts = ()=> ({type: GET_POSTS});
export const getPost = id => ({type: GET_POST, payload: id, meta: id});

//const getPostsSaga = createPromiseSaga(GET_POSTS, postAPI.getPosts);
//const getPostSaga = createPromiseSagaById(GET_POST, postAPI.getPost);
function* getPostsSaga() {
    try {
      const posts = yield call(postAPI.getPosts); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.

      yield put({
        type: GET_POSTS_SUCCESS,
        payload: posts
      }); // 성공 액션 디스패치
    } catch (e) {
      //console.log('error:'+e)
      yield put({
        type: GET_POSTS_ERROR,
        error: true,
        payload: e
      }); // 실패 액션 디스패치
    }
  }
  
  // 액션이 지니고 있는 값을 조회하고 싶다면 action을 파라미터로 받아와서 사용 할 수 있습니다.
  function* getPostSaga(action) {
    const param = action.payload;
    const id = action.meta;
    try {
      const post = yield call(postsAPI.getPost, param); // API 함수에 넣어주고 싶은 인자는 call 함수의 두번째 인자부터 순서대로 넣어주면 됩니다.
      yield put({
        type: GET_POST_SUCCESS,
        payload: post,
        meta: id
      });
    } catch (e) {
      yield put({
        type: GET_POST_ERROR,
        error: true,
        payload: e,
        meta: id
      });
    }
  }


export function* postsSaga() {
    yield takeLatest(GET_POSTS, getPostsSaga)
    yield takeLatest(GET_POST, getPostSaga)
}

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial()
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
          return handleAsyncActions(GET_POSTS, 'posts')(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
          return handleAsyncActionsById(GET_POST, 'post')(state, action);
        default:
          return state;
    }
};