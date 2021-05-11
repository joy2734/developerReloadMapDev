import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    main: {
        display:'flex',
        margin: '0px auto',
        maxWidth: '1000px',
        flexDirection: 'column',
        margin: '50px auto',
        '& ul li':{
            padding: '1px',
            '& a':{
                color: '#007bff',
                textDecoration: 'none',
                backgroundColor: 'transparent'
            }
        }
    },
    alertprimary:{
        color: '#004085',
        backgroundColor: '#cce5ff',
        borderColor: '#b8daff',
        borderRadius: '4px',
        padding: '15px',
        '& a':{
            color: '#007bff',
            textDecoration: 'none',
            backgroundColor: 'transparent'
        }
    },
    title:{
        color: '#212529',
        fontSize: '42px',
        fontWeight: '700',
        marginBottom: '10px'
    },
    subtitle:{
        color: '#212529',
        fontSize: '32px',
        fontWeight: '700',
        marginBottom: '10px'
    },
    read:{
        backgroundColor: '#28a745',
        display:'inline-block',
        fontWeight: '700',
        fontSize: '75%',
        color: '#fff',
        padding: '.25em .4em',
        borderRadius: '.25rem'
    },
    watch:{
        backgroundColor: '#007bff',
        display:'inline-block',
        fontWeight: '700',
        fontSize: '75%',
        color: '#fff',
        padding: '.25em .4em',
        borderRadius: '.25rem'
    }
}));

const FrontEndLandscape = ({

}) => {
    const classes = useStyles();

    const Read = ()=>{
        return(
            <span className={classes.read}>Read</span>
        )
    }
    const Watch = ()=>{
        return(
            <span className={classes.watch}>Watch</span>
        )
    }

    return (
        <div className={classes.main}>
            <div className={classes.alertprimary}>
                This page is incomplete and is being worked upon. Please check back later or <a href="#home">subscribe</a> 
                / <a  href="#home">follow me on twitter</a> to get notified. Also, feel free to contribute by suggesting 
                the resources in <a  href="#home">the issues.</a>
            </div>
            <br />
            <div className={classes.title}>
                Become a Frontend Developer
            </div>
            <Typography>
            Before I go ahead and list down the resources, please know that the roadmap and the list below is exhaustive and
             you don't need to know it all from the get go. For frontend development, all you need to get started with is learn some basic HTML,
              CSS and JavaScript and start working on projects; everything else you will learn along the way.
            </Typography>
            <br/>
            <div className={classes.subtitle}>
                Internet and how it works?
            </div>
            <Typography>
            Get the basic understanding of internet, browsers, networks and other relevant knowledge.
            </Typography>
            <ul>
                <li><Read/><a href="#home"> What is Internet?</a></li>
                <li><Watch/><a href="#home"> How the internet works in 5 minutes</a></li>
                <li><Read/><a href="#home"> What is HTTP and how it evolved?</a></li>
                <li><Read/><a href="#home"> HTTP/3: the past, the present, and the future</a></li>
                <li><Read/><a href="#home"> What Is HTTP/3 – Lowdown on the Fast New UDP-Based Protocol</a></li>
                <li><Read/><a href="#home"> How Browsers Work: Behind the scenes of modern web browsers</a></li>
                <li><Watch/><a href="#home"> DNS as Fast As Possible</a></li>
                <li><Read/><a href="#home"> How DNS works?</a></li>
                <li><Read/><a href="#home"> DNS in One Picture</a></li>
            </ul><br/>
            <div className={classes.subtitle}>
                Learn HTML
            </div>
            <Typography>
                HTML provides the skeleton of a webpage. Learn the basics of HTML; learn the basic tags, learn how to write semantic HTML, understand basic SEO, learn how to divide your pages into sections that will help you style them.
            </Typography><br/>
            <Typography>
                Please know that I have put multiple links for each resource. While you may pick something new while going through each, you don't need to go through all of them - if you feel like you have understood the concepts and are just repeating what you learnt, you may skip the resource and move to exercises section.
            </Typography><br/>
            <ul>
                <li><Watch/><a href="#home"> HTML Crash Course For Absolute Beginners</a></li>
                <li><Read/><a href="#home"> W3Schools – HTML Tutorial</a></li>
                <li><Watch/><a href="#home"> HTML Full Course - Build a Website Tutorial</a></li>
                <li><Read/><a href="#home"> A few HTML tips</a></li>
                <li><Read/><a href="#home"> Six tips to set up a better HTML document</a></li>
                <li><Read/><a href="#home"> HTML Semantic Elements</a></li>
                <li><Read/><a href="#home"> HTML elements reference</a></li>
            </ul><br/>
            <div className={classes.subtitle}>
                Style your pages with CSS
            </div><br/>
            <Typography>
                With the help of HTML, you create structure for your pages. CSS allows you to style your pages and make them pretty. If you take the analogy of human body, the skeleton would be the HTML, skin would be the CSS and muscles that help us move would be JavaScript - we will learn more about JavaScript in the coming sections.
            </Typography>
            <ul>
                <li><Read/><a href="#home"> W3Schools – CSS Tutorial</a></li>
                <li><Watch/><a href="#home"> CSS Crash Course For Absolute Beginners</a></li>
                <li><Watch/><a href="#home"> Build An HTML5 Website With A Responsive Layout</a></li>
                <li><Watch/><a href="#home"> Flexbox CSS In 20 Minutes</a></li>
            </ul><br/>
            <div className={classes.subtitle}>
                Basics of JavaScript
            </div><br/>
            <Typography>
                JavaScript allows you to add interactivity to your pages. Common examples that you may have seen on the websites are sliders, click interactions, popups and so on. In this section, you will learn the basics of JavaScript.
            </Typography>
            <ul>
                <li><Read/><a href="#home"> W3Schools – JavaScript Tutorial</a></li>
                <li><Watch/><a href="#home"> JavaScript Crash Course for Beginners</a></li>
                <li><Watch/><a href="#home"> Build a Netflix Landing Page Clone with HTML, CSS & JS</a></li>
            </ul><br/>
            <div className={classes.subtitle}>
                Version Control Systems and Git
            </div><br/>
            <Typography>
                Version control systems allow you to track changes to your codebase/files over time. They allow you to go back to some previous version of the codebase without any issues. Also, they help in collaborating with people working on the same code – if you’ve ever collaborated with other people on a project, you might already know the frustration of copying and merging the changes from someone else into your codebase; version control systems allow you to get rid of this issue.
            </Typography>
            <br />
            <Typography>
            In this section, you will learn what version control systems are and understand how to use Git which is the de facto VCS.
            </Typography>
            <ul>
                <li><Watch/><a href="#home"> Version Control System Introduction</a></li>
                <li><Watch/><a href="#home"> Git & GitHub Crash Course For Beginners</a></li>
                <li><Watch/><a href="#home"> Learn Git in 20 Minutes</a></li>
            </ul>
            <Typography>
            Now that you know what git is go ahead and create an account on GitHub and push everything that you do from now on to GitHub so that you can get the practice and get it reviewed from the other people in the community.
            </Typography>
            <div className={classes.subtitle}>
                Modern JavaScript
            </div><br/>
            <Typography>
            In this section you will learn how to use package managers and get started with the "modern JavaScript".
            </Typography><br/>
            <ul>
                <li><Read/><a href="#home"> Modern JavaScript for Dinosaurs (Don't worry if you don't understand some parts of it)</a></li>
                <li><Watch/><a href="#home"> What is NPM and how to use it</a></li>
                <li><Watch/><a href="#home"> NPM Crash Course</a></li>
            </ul>
        </div>
    )
};

export default FrontEndLandscape;