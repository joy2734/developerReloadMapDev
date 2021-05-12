import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column',
        position: 'sticky',
        top: '60px',
        left: '150px',
        width: '30px',
        height: '220px'
    }
}));


const SocialSticker = ({

}) =>{
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <TwitterIcon color='disabled'/>
            <FacebookIcon color='disabled'/>
            <RedditIcon color='disabled'/>
            <InstagramIcon color='disabled'/>
        </div>
    )
}

export default SocialSticker;