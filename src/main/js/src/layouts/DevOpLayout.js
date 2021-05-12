import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import devOpsImg from '../assets/images/devops.png';
import SocialSticker from "../components/sticker/SocialSticker";

const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        borderTop: '1px solid #eaeaea',
        justifyContent: 'center'
    },
    devOpWrap:{
        display: 'flex',
        margin: '30px auto'
    },
    devOpsRoadMap :{
        backgroundImage: `url(${devOpsImg})`,
        width: '850px',
        height: '1650px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        marginTop: '20px'
    }
}));


const DevOpLayout = ({

}) =>{
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <div className={classes.devOpWrap}>
                <SocialSticker/>
                <div className={classes.devOpsRoadMap}></div>
            </div>
        </div>
    )
}

export default DevOpLayout;