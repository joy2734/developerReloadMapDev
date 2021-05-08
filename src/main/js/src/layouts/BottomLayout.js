import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        borderTop: '1px solid #eaeaea',
        padding: '65px 300px',
        height: '180px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    writerInfo:{
        width:'307px'
    },
    siteInfo:{
        display: 'flex',
        flexDirection: 'row'
    },
    developIconBtn:{
      padding: '5px'  
    },
    writerDetail:{
        marginTop: '10px',
        color:'rgb(153, 153, 153)'
    },
    contribute:{
        '& ul li a':{
           color: 'rgb(153, 153, 153)',
           padding: '2px'
        }
    },
    learn:{
        '& ul li a':{
            color: 'rgb(153, 153, 153)',
            padding: '2px'
        }
    },
    mostVisited:{
        '& ul li a':{
            color: 'rgb(153, 153, 153)',
            padding: '2px'
        }
    }
}));


const BottomLayout = ({

}) =>{
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.writerInfo}>
                <Typography>
                    <IconButton className={classes.developIconBtn}>
                        <DeveloperBoardIcon />
                    </IconButton>
                    roadmap.sh by <Link href="https://twitter.com/kamranahmedse">@kamranahmedse</Link>
                </Typography>
                <Typography className={classes.writerDetail}>
                    Community created roadmaps, articles, resources and journeys to help you choose your path and grow in your career.
                </Typography>
                <Typography className={classes.writerDetail}>
                    © roadmap.sh ·&nbsp;&nbsp;
                    <Link href="/about">FAQ</Link>&nbsp;&nbsp;
                    <Link href="/terms">Terms</Link>&nbsp;&nbsp;
                    <Link href="/Privacy">Privacy</Link>&nbsp;&nbsp;
                </Typography>
            </div>
            <div className={classes.siteInfo}>
                <div className={classes.contribute}>
                    <ul style={{listStyle: 'none'}}>
                        <li style={{fontWeight:'700', paddingBottom: '10px'}}>Contribute</li>
                        <li><Link href="/about">Sponsor</Link></li>
                        <li><Link href="/terms">Write a Guide</Link></li>
                        <li><Link href="/Privacy">Submit a Roadmap</Link></li>
                        <li><Link href="/Privacy">About this Site</Link></li>
                    </ul>
                </div>
                <div className={classes.learn}>
                    <ul style={{listStyle: 'none'}}>
                        <li style={{fontWeight:'700', paddingBottom: '10px'}}>Learn</li>
                        <li><Link href="/about">Read Guides</Link></li>
                        <li><Link href="/terms">Watch Videos</Link></li>
                        <li><Link href="/Privacy">Podcasts</Link></li>
                        <li><Link href="/Privacy">YouTube</Link></li>
                    </ul>
                </div>
                <div className={classes.mostVisited}>
                    <ul style={{listStyle: 'none'}}>
                        <li style={{fontWeight:'700', paddingBottom: '10px'}}>Most Visited</li>
                        <li><Link href="/about">Frontend Roadmap</Link></li>
                        <li><Link href="/terms">Backend Roadmap</Link></li>
                        <li><Link href="/Privacy">DevOps Roadmap</Link></li>
                        <li><Link href="/Privacy">Upcoming</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default BottomLayout;