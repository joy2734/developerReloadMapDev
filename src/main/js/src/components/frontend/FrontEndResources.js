import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    main: {
        display:'flex',
        margin: '0px auto',
        maxWidth: '1000px',
        flexDirection: 'column'
    }
}));

const FrontEndLandscape = ({

}) => {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <Typography>
                This page is incomplete and is being worked upon. Please check back later or subscribe / follow me on twitter to get notified. Also, feel free to contribute by suggesting the resources in the issues.
            </Typography>
            <br />
            <Typography variant="h4">
            Become a Frontend Developer
            </Typography>
            <Typography>
            Before I go ahead and list down the resources, please know that the roadmap and the list below is exhaustive and you don't need to know it all from the get go. For frontend development, all you need to get started with is learn some basic HTML, CSS and JavaScript and start working on projects; everything else you will learn along the way.
            </Typography>
            <Typography>
            Internet and how it works?
            </Typography>
            <Typography>
            Get the basic understanding of internet, browsers, networks and other relevant knowledge.
            </Typography>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Typography variant="h4">
            Style your pages with CSS
            </Typography>
            <Typography>
            With the help of HTML, you create structure for your pages. CSS allows you to style your pages and make them pretty. If you take the analogy of human body, the skeleton would be the HTML, skin would be the CSS and muscles that help us move would be JavaScript - we will learn more about JavaScript in the coming sections.
            </Typography>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Typography variant="h4">
            Version Control Systems and Git
            </Typography>
            <Typography>
            Version control systems allow you to track changes to your codebase/files over time. They allow you to go back to some previous version of the codebase without any issues. Also, they help in collaborating with people working on the same code – if you’ve ever collaborated with other people on a project, you might already know the frustration of copying and merging the changes from someone else into your codebase; version control systems allow you to get rid of this issue.
            </Typography>
            <br />
            <Typography>
            In this section, you will learn what version control systems are and understand how to use Git which is the de facto VCS.
            </Typography>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Typography>
            Now that you know what git is go ahead and create an account on GitHub and push everything that you do from now on to GitHub so that you can get the practice and get it reviewed from the other people in the community.
            </Typography>
            <Typography variant="h4">
            Modern JavaScript
            </Typography>
            <Typography>
            In this section you will learn how to use package managers and get started with the "modern JavaScript".
            </Typography>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
};

export default FrontEndLandscape;