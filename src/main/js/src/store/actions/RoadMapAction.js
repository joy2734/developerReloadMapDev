
export const titleChangeAction = (url) =>{
    return{
        type: 'CHG_TITLE',
        payload: url
    }
}

export const initCommuAction = (comms) =>{
    return {
        type: 'COMM_INIT',
        payload: comms
    }
}

export const searchCommuAction = (comms) =>{
    return {
        type: 'COMM_SRCH',
        payload: comms
    }
}

export const loadCommuAction = (comm) =>{
    return {
        type: 'COMM_LOAD',
        payload: comm
    }
}

export const changePageAction = (page) =>{
    return {
        type: 'CHG_MODE',
        payload: page
    }
}