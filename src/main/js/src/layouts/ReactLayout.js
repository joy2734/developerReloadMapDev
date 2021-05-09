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
        width: '1000px',
        marginTop: '20px'
    },
    reactRoadImg: {
        backgroundImage: `url(${reactImg})`,
        width: '1000px',
        height: '1250px',
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
                    The intent of this guide is to give you an idea about the React ecosystem and to help guide your learning if you are confused. We have another roadmap on the Frontend Development that focuses on the frontend development if you are interested in that.
                    <br/>
                    Also, please note that the list below is exhaustive, and the items are listed in no particular order. You don't need to learn everything listed in the picture, however knowing what you don't know is as important as knowing things.
                </Typography>
                <div className={classes.reactRoadImg}></div>
                <Typography>
                    Please note that the list is opinionated, and you might have different opinions than those of the author. Having said that, we would love to hear your opinions and incorporate them in the picture if suitable.
                </Typography>
            </div>
        </div>
    )
}

export default DevOpLayout;