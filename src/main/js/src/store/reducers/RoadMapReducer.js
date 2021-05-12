import React, {useState, useEffect} from 'react';

const titleMap = {
    home : ['Developer Roadmaps', 'Step by step guides and paths to learn different tools or technologies'],
    front : ['Frontend Developer', 'Step by step guide to becoming a modern frontend developer'],
    back: ['Backend Developer', 'Step by step guide to becoming a modern backend developer'],
    DevOps: ['DevOps Roadmap', 'Step by step guide for DevOps or any other Operations Role'],
    react: ['React Developer', 'Everything that is there to learn about React and the ecosystem in 2021.'],
    android: ['Android Developer', 'Step by step guide to becoming an Android developer'],
    community: ['Community','It is a space for communication among web users']
}

export const titleChangeReducer = (state ={
    title: 'Developer Roadmaps',
    subTitle: 'Step by step guides and paths to learn different tools or technologies'
}, action) =>{

    switch(action.type){
        case 'CHG_TITLE': 
            return {...state, title: titleMap[action.payload][0] ,subTitle: titleMap[action.payload][1]}
        default:
            return state;
    }
}

export const communityReducer = (state = [], action) =>{
    //console.log(action.payload)
    switch(action.type){
        case 'COMM_INIT':
            return action.payload;
        case 'COMM_SRCH':
            return action.payload;
        default:
            return state;
    }
};