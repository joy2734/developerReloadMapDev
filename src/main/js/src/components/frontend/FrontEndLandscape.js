import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import frontendImg from '../../assets/images/frontend.png';

const useStyles = makeStyles((theme) => ({
    main: {
        display:'flex',
        margin: '20px auto',
        maxWidth: '850px'
    },
    frontRoadMap:{
        backgroundImage: `url(${frontendImg})`,
        width: '850px',
        height: '2450px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        marginTop: '40px'
    }
}));

const FrontEndLandscape = ({

}) => {
    const classes = useStyles();

    return (
        <div className={classes.main}>
          <div className={classes.frontRoadMap}></div>
        </div>
    )
};

export default FrontEndLandscape;