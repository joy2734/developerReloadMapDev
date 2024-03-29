import React, {useState, useEffect, useMemo} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux";
import {changePageAction} from '../modules/post';
import {
    CommnunityForm,
    CommnunityRead,
    CommunityReadForm
} from '../components/search';

const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        justifyContent: 'center',
        flexDirection:'column',
        borderTop: '1px solid #eaeaea'
    }
}));

const CommunityLayout = ({

}) =>{
    const classes = useStyles();
    const {
        mode
    }= useSelector(store => store.posts);
    const {
        userId,
        token
    } = useSelector(store => store.login.login);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(changePageAction('home'));
    }, []);

    return(
        <div className={classes.container}>
            {mode == 'home' ? 
                <CommnunityRead userId={userId} /> : 
                    mode == 'create' || mode == 'update' ? <CommnunityForm mode={mode} userId={userId}/> : 
                    <CommunityReadForm userId={userId} /> }
        </div>
    )
}

export default CommunityLayout;