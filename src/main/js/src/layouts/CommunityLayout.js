import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux";
import {changePageAction} from '../store/actions/RoadMapAction';
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
    }= useSelector(store => store.commPageReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(changePageAction('home'))
      }, []);

    console.log(mode);
    return(
        <div className={classes.container}>
            {mode == 'home' ? 
                <CommnunityRead /> : mode == 'create' || mode == 'update' ? <CommnunityForm mode={mode}/> : <CommunityReadForm /> }
        </div>
    )
}

export default CommunityLayout;