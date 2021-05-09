import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingLeft: '20px',
        paddingRight: '20px'
    }
}));


const CommunityLayout = ({

}) =>{
    const classes = useStyles();

    return(
        <div>Community</div>
    )
}

export default CommunityLayout;