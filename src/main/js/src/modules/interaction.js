import { createAction, createActions, handleActions } from 'redux-actions'
import React, {useState, useEffect} from 'react';
import produce from 'immer';

/* 
 서버를 거치지않고 화면상에서만 일어나는 것들 store관리
*/

const titleMap = {
    home : ['Developer Roadmaps', 'Step by step guides and paths to learn different tools or technologies'],
    front : ['Frontend Developer', 'Step by step guide to becoming a modern frontend developer'],
    back: ['Backend Developer', 'Step by step guide to becoming a modern backend developer'],
    DevOps: ['DevOps Roadmap', 'Step by step guide for DevOps or any other Operations Role'],
    react: ['React Developer', 'Everything that is there to learn about React and the ecosystem in 2021.'],
    android: ['Android Developer', 'Step by step guide to becoming an Android developer'],
    community: ['Community','It is a space for communication among web users']
}

const TITLE_CHANGE = 'main/TITLE_CHANGE';
const LOGIN_OPEN = 'main/LOGIN_OPEN';
const LOGIN_FORM_CHANGE = 'main/LOGIN_FORM_CHANGE'


export const titleChangeAction = createAction(TITLE_CHANGE)
export const loginOpenAction = createAction(LOGIN_OPEN)
export const loginFormChangeAction = createAction(LOGIN_FORM_CHANGE)



const initialState = {
    titleInfo:{
        title: 'Developer Roadmaps',
        subTitle: 'Step by step guides and paths to learn different tools or technologies'
    },
    login:{
        isOpen: false,
        formStatus: 'login'
    }
}

export const interactReducer = handleActions({
    [TITLE_CHANGE]: (state, action) => (produce(state, draft =>{
        draft.titleInfo.title = titleMap[action.payload][0]
        draft.titleInfo.subTitle = titleMap[action.payload][1]
    })),
    [LOGIN_OPEN]: (state, action) =>(produce(state, draft => {
        draft.login.isOpen = action.payload
    })),
    [LOGIN_FORM_CHANGE]: (state, action) =>(produce(state, draft =>{
        draft.login.formStatus = action.payload
    }))
}, initialState)

/* (produce(state, draft =>{
            draft.titleInfo.title = titleMap[action.payload][0]
            draft.titleInfo.subTitle = titleMap[action.payload][1]
        })), */