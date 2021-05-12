
export const titleChangeAction = (url) =>{
    return{
        type: 'CHG_TITLE',
        payload: url
    }
}

export const initCommuAction = (comm) =>{
    return {
        type: 'COMM_INIT',
        payload: comm
    }
}

export const searchCommuAction = (comm) =>{
    return {
        type: 'COMM_SRCH',
        payload: comm
    }
}

export const saveCommuAction = (comm) =>{
    return {
        type: 'COMM_SAVE',
        payload: comm
    }
}

export const modifyCommuAction = (comm) =>{
    return {
        type: 'COMM_MOD',
        payload: comm
    }
}

export const deleteCommuAction = (comm) =>{
    return {
        type: 'COMM_DEL',
        payload: comm
    }
}