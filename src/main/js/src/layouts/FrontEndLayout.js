import React, {useState} from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {
    FrontEndLandscape,
    FrontEndResources
} from '../components/frontend';

const useStyles = makeStyles((theme) => ({
    container: {
    },
    resourceInfo:{
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '1px solid #eaeaea',
        '& a':{
            padding: '5px',
            color: 'rgb(45, 45, 45)',
            fontSize: '14px',
            textDecoration: 'none'
        },
        '& a:active, & a:hover':{
            borderBottom: '2px solid currentColor',
            bottom: '-1px',
            position: 'relative'
        },
    }
}));


const FrontEndLayout = ({

}) =>{
    const classes = useStyles();
    const [tabActive, setActive] = useState(1);
    const activeStyle = {
        borderBottom: '2px solid currentColor',
        bottom: '-1px',
        position: 'relative'
    };

    const clickLink = (tabIdx)=>{
        setActive(tabIdx);
    };

    return(
        <div className={classes.container}>
            <div className={classes.resourceInfo} >
                <a style={tabActive == '1' ? activeStyle: []} onClick={()=> clickLink('1') } >Landscape</a>&nbsp;&nbsp;
                <a style={tabActive == '2' ? activeStyle: []} onClick={()=> clickLink('2') } >Resources</a>
            </div>
            {tabActive == '1' ?  <FrontEndLandscape/> : <FrontEndResources/>}
        </div>
    )
}

export default FrontEndLayout;