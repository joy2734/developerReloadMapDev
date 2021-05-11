import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import frontendImg from '../../assets/images/frontend.png';

const useStyles = makeStyles((theme) => ({
    main: {
        display:'flex',
        margin: '20px auto',
        maxWidth: '1000px'
    },
    frontRoadMap:{
        backgroundImage: `url(${frontendImg})`,
        width: '1000px',
        height: '2850px',
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