import React, {useState} from 'react';
import {BackEndLandscape} from '../components/backend';
import { makeStyles } from '@material-ui/core/styles';
import SocialSticker from "../components/sticker/SocialSticker";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        borderTop: '1px solid #eaeaea'
    },
    content:{
        display: 'flex',
        margin: '40px 0px 40px 10px',
    }
}));


const FrontEndLayout = ({

}) =>{
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <SocialSticker/>
                <BackEndLandscape/>
            </div>
        </div>
    )
}

export default FrontEndLayout;