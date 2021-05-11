import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backendImg from '../../assets/images/backend.png';

const useStyles = makeStyles((theme) => ({
    main: {
        display:'flex',
        margin: '40px auto',
        maxWidth: '850px'
    },
    backendRoadMap :{
        backgroundImage: `url(${backendImg})`,
        width: '850px',
        height: '2250px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
    }
}));

const BackEndLandscape = ({

}) => {
    const classes = useStyles();

    return (
        <div className={classes.main}>
          <div className={classes.backendRoadMap}></div>
        </div>
    )
};

export default BackEndLandscape;