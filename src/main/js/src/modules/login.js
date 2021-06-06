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
import {
    startLoadingAction, 
    finishLoadingAction,
    loginOpenAction
} from './interaction';
import { takeLatest, put, call } from "@redux-saga/core/effects";
import produce from 'immer';

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

const [
    CHECK_TOKEN,
    CHECK_TOKEN_SUCCESS,
    CHECK_TOKEN_FAILURE
] = createAsyncAction('login/CHECK_TOKEN');

export const loginAction = createAction(LOGIN_REQUEST)
export const signUpAction = createAction(SIGNUP_REQUEST)
export const logoutAction = createAction(LOGOUT_REQUEST)
export const chgPasswdAction = createAction(CHGPASSWD_REQUEST)
export const checkTokenAction = createAction(CHECK_TOKEN);

/* 로그인시 세팅 */
function createLoginRequestSaga(type, api){
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

    return function* saga(action){
        let token, message;
        yield put(startLoadingAction())
        try{
            const payload = yield call(api, action.payload)

            if(payload.data.SUCCESS && payload.data.userId){
                token = payload.data.userId+ '@devMap@'+ String(new Date().getTime());
                localStorage.setItem('devmap-user-token', token);
                //토큰저장
                const successToken= yield call(loginAPI.saveUserToken, {token, userId: payload.data.userId});

                if(successToken.data){

                    //필요한 스토어 모두 로드되도록....
                    /* 
                    
                    */
                    message = '로그인 되었습니다';
                    yield put({type: SUCCESS, payload:{userId: payload.data.userId, token: token}})
                }
            }else{
                message = '사용자 정보가 일치하지 않습니다.';
            }

        } catch (e) {
            yield console.log(e);
            yield put({type: ERROR, error: true, payload: e})
        } finally {
            yield put(finishLoadingAction({message: message}));
            if(token)
                yield put(loginOpenAction(false));
        }
    }
}

function createLogoutRequestSaga(type, api){
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

    return function* saga(action){
        let message;
        try{
            const payload = yield call(api, {token: '', userId: action.payload.userId})

            if(payload){
                //토큰삭제
                localStorage.removeItem('devmap-user-token');
                message = '로그아웃 되었습니다';
            }else{
                message = '로그아웃 실패';
            }

            yield put({type: SUCCESS, payload})
        } catch (e) {
            yield console.log(e);
            yield put({type: ERROR, error: true, payload: e})
        } finally{
            yield put(finishLoadingAction({message: message}));
        }
    }
}

function createCheckTokenRequestSaga(type, api){
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

    return function* saga(action){
        let message;
        try{
            const payload = yield call(api, action.payload)

            //토큰존재시
            if(payload.data.token){
                
                if(localStorage.getItem('devmap-user-token') === payload.data.token){
                    yield put({type: SUCCESS, payload: payload.data});
                }else{
                    yield put(logoutAction({token:'', userId: payload.data.userId}));
                }
            }else{
                //서버에 token 미존재시 logout
                if(localStorage.getItem('devmap-user-token')){
                    yield put(logoutAction({token:'', userId: payload.data.userId}));
                }
            }
        } catch (e) {
            yield console.log(e);
            yield put({type: ERROR, error: true, payload: e})
        } finally{
            yield put(finishLoadingAction({message: message ? message: ''}));
        }
    }
}

const loginRequestSaga = createLoginRequestSaga(LOGIN_REQUEST, loginAPI.login);
const logoutRequestSaga = createLogoutRequestSaga(LOGOUT_REQUEST, loginAPI.saveUserToken);
const signUpRequestSaga = createPromiseSaga(SIGNUP_REQUEST, loginAPI.createUser, "사용자 등록에 성공하였습니다.");
const chgPasswdRequestSaga = createPromiseSaga(CHGPASSWD_REQUEST, loginAPI.changePassword, "비밀번호 변경에 성공하였습니다.");
const checkTokenRequestSaga = createCheckTokenRequestSaga(CHECK_TOKEN, loginAPI.checkUserToken);

export function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, loginRequestSaga)
    yield takeLatest(SIGNUP_REQUEST, signUpRequestSaga)
    yield takeLatest(CHGPASSWD_REQUEST, chgPasswdRequestSaga)
    yield takeLatest(LOGOUT_REQUEST, logoutRequestSaga)
    yield takeLatest(CHECK_TOKEN, checkTokenRequestSaga)
}

const initialState = {
    login:{
        userId: '',
        token: ''
    }
};

export const login = handleActions({
    [LOGIN_REQUEST_SUCCESS]: (state, action) => (produce(state, draft => {        
        draft.login.userId = action.payload.userId;
        draft.login.token = action.payload.token;
    })),
    [LOGOUT_REQUEST_SUCCESS]: (state, action) => (produce(state, draft => {        
        draft.login.userId = '';
        draft.login.token = '';
    })), 
    [SIGNUP_REQUEST_SUCCESS]: (state, action) =>(produce(state, draft => {
        console.log(action.payload);
    })),
    [CHGPASSWD_REQUEST_SUCCESS]: (state, action) =>(produce(state, draft =>{
        console.log(action.payload);
    })),
    [CHECK_TOKEN_SUCCESS]: (state, action) =>(produce(state, draft =>{
        draft.login.userId = action.payload.userId;
        draft.login.token = action.payload.token;
    }))
}, initialState);