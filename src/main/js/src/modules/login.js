import * as  loginAPI from '../lib/login';
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
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILURE
] = createAsyncAction('login/LOGIN_REQUEST');

const [
    SIGNUP_REQUEST,
    SIGNUP_REQUEST_SUCCESS,
    SIGNUP_REQUEST_FAILURE
] = createAsyncAction('login/SIGNUP_REQUEST');

const [
    CHGPASSWD_REQUEST,
    CHGPASSWD_REQUEST_SUCCESS,
    CHGPASSWD_REQUEST_FAILURE
] = createAsyncAction('login/CHGPASSWD_REQUEST')

const [
    LOGOUT_REQUEST,
    LOGOUT_REQUEST_SUCCESS,
    LOGOUT_REQUEST_FAILURE
] = createAsyncAction('login/LOGOUT_REQUEST');

export const loginAction = createAction(LOGIN_REQUEST)
export const signUpAction = createAction(SIGNUP_REQUEST)
export const logoutAction = createAction(LOGOUT_REQUEST)
export const chgPasswdAction = createAction(CHGPASSWD_REQUEST)

/* 로그인시 세팅 */
function createLoginRequestSaga(type, api){
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

    return function* saga(action){
        try{
            const payload = yield call(api, action.payload)

            if(payload.SUCCESS){
                //캐시세팅?
                console.log(action.payload);
                //localStorage.setItem('devmap-user-token', pa)
            }

            yield put({type: SUCCESS, payload})
        } catch (e) {
            yield put({type: ERROR, error: true, payload: e})
        }
    }
}


const loginRequestSaga = createLoginRequestSaga(LOGIN_REQUEST, loginAPI.login);
const signUpRequestSaga = createPromiseSaga(SIGNUP_REQUEST, loginAPI.createUser);
const logoutRequestSaga = createPromiseSaga(CHGPASSWD_REQUEST, loginAPI.changePassword);

export function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, loginRequestSaga)
    yield takeLatest(SIGNUP_REQUEST, signUpRequestSaga)
    yield takeLatest(CHGPASSWD_REQUEST, logoutRequestSaga)
}

const initialState = {
    login:{
        userId: '',
        password: '',
        token: ''
    }
};

export const login = handleActions({
    [LOGIN_REQUEST_SUCCESS]: (state, action) => (produce(state, draft => {
        //draft.login = 
        console.log(action.payload);
    })),
    [SIGNUP_REQUEST_SUCCESS]: (state, action) =>(produce(state, draft => {
        //draft.login = 
        console.log(action.payload);
    })),
    [CHGPASSWD_REQUEST_SUCCESS]: (state, action) =>(produce(state, draft =>{
        console.log(action.payload);
    }))
}, initialState);