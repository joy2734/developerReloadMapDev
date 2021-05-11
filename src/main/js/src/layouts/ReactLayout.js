import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import reactImg from '../assets/images/react.png';

const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        margin: '0px auto',
        borderTop: '1px solid #eaeaea',
        justifyContent: 'center'
    },
    reactRoadMap:{
        width: '850px',
        margin: '40px auto',
        '& a':{
            color: '#007bff',
            textDecoration: 'none',
            backgroundColor: 'transparent',
            fontWeight: '600'
        }
    },
    reactRoadImg: {
        backgroundImage: `url(${reactImg})`,
        width: '850px',
        height: '1050px',
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
            <div className={classes.reactRoadMap}>
                <Typography>
                    The intent of this guide is to give you an idea about the React ecosystem and to help guide your learning if you are confused. 
                    We have another <a href="#home">roadmap on the Frontend Development</a> that focuses on the frontend development if you are interested in that.
                    <br/><br/>
                    Also, please note that the list below is exhaustive, and the items are listed in no particular order. You don't need to learn everything
                     listed in the picture, however knowing what you don't know is as important as knowing things.
                </Typography>
                <div className={classes.reactRoadImg}></div>
                <Typography>
                    Please note that the list is opinionated, and you might have different opinions than those of the author. Having said that,
                    <a href="#home">we would love to hear your opinions</a> and incorporate them in the picture if suitable.
                </Typography>
            </div>
        </div>
    )
}

export default DevOpLayout;