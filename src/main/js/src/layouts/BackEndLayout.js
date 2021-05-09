import React, {useState} from 'react';
import {BackEndLandscape} from '../components/backend';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        borderTop: '1px solid #eaeaea'
    }
}));


const FrontEndLayout = ({

}) =>{
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <BackEndLandscape/>
        </div>
    )
}

export default FrontEndLayout;