import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import devOpsImg from '../assets/images/devops.png';

const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        margin: '0px auto',
        borderTop: '1px solid #eaeaea',
        justifyContent: 'center'
    },
    devOpsRoadMap :{
        backgroundImage: `url(${devOpsImg})`,
        width: '1000px',
        height: '1900px',
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
            <div className={classes.devOpsRoadMap}></div>
        </div>
    )
}

export default DevOpLayout;