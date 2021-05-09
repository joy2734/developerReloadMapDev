import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import androidImg from '../assets/images/android.svg';
import pickLangImg from '../assets/images/pickLanguage.svg';
import githubImg from '../assets/images/github.png';
import fundImg from '../assets/images/theFundamentals.png';
import buildAppImg from '../assets/images/buildApplication.png';

const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        margin: '0px auto',
        borderTop: '1px solid #eaeaea',
        justifyContent: 'center'
    },
    androidRoadMap:{
        width: '1000px',
        margin: '20px auto'
    },
    androidRoadImg: {
        backgroundImage: `url(${androidImg})`,
        height: '1200px'
    },
    pickLangImg: {
        backgroundImage: `url(${pickLangImg})`,
        height: '300px'
    },
    fundamantalImg: {
        backgroundImage: `url(${fundImg})`,
        height: '300px'
    },
    githubImg: {
        backgroundImage: `url(${githubImg})`,
        height: '300px'
    },
    buildAppImg:{
        backgroundImage: `url(${buildAppImg})`,
        height: '300px'
    }
}));


const AndroidLayout = ({

}) =>{
    const classes = useStyles();

    const imgStyle = {
        width: '1000px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        marginTop: '20px'
    }

    return(
        <div className={classes.container}>
            <div className={classes.androidRoadMap}>
                <Typography>
                    The intent of this guide is to give you an idea about the Android development landscape and to help guide your learning if you are confused. Before we start, please note that the roadmap is opinionated, and you might have different opinions than those of the author. Having said that, we would love to hear your opinions and incorporate them in the roadmap if suitable.
                    <br/>
                    There are multiple ways to develop applications for the android; you can go down the path of hybrid application development where flutter, react-native, or NativeScript are the most common contenders. Flutter uses Dart, whereas React Native and Native Script rely on JavaScript. Answering the question of hybrid vs native is out of the scope of this roadmap. This roadmap is focused on the native Android apps development but if you are interested in learning any hybrid framework, my personal preference is react-native and I would recommend you to checkout the Frontend Developer Roadmap.
                </Typography>
                <div className={classes.androidRoadImg} style={imgStyle}></div>
                <Typography variant="h4">
                    Complete RoadMap
                </Typography>
                <br />
                <Typography>
                    Here is the full version of the roadmap in a single image and after that we have the broken down version with the resources and links to learn more about each of the boxes.
                </Typography>
                <br/>
                <Typography>
                    Broken Down Version<br/>
                    Below is the broken down version of the roadmap with links and resources to learn more about each of the items listed in the complete roadmap above.
                </Typography>
                <br/>
                <Typography variant="h4">
                    Pick a Language<br/>
                </Typography>
                <Typography>
                    For the languages, you can develop android apps either by using Kotlin or Java.
                </Typography>
                <div className={classes.pickLangImg} style={imgStyle}></div>
                <Typography>
                    Although, you can use both Kotlin and Java to develop native android apps, Google announced in 2019 to make Kotlin the preferred way of developing android applications. If you were to start learning android development today, Kotlin should be your language of choice.                
                </Typography><br/>
                <Typography variant="h4">
                    The Fundamentals<br/>
                </Typography>
                <Typography>
                    Install the Android Studio and learn the basics of Kotlin to get started.
                </Typography><br/>
                <div className={classes.fundamantalImg} style={imgStyle}></div>
                <Typography>
                    We have also listed down some free resources which you can use for the items listed in the image above. If you have some better ones, please do suggest. Also, you don't need to go through all of them, just go through them and pick what you like.
                </Typography><br/>
                <ul>
                    <li><a href="">Learn the basics of Kotlin</a></li>
                    <li><a href="">Kotlin Docs and Official Kotlin Tutorials</a></li>
                    <li><a href="">Data Structures and Algorithms. Also check this.</a></li>
                    <li><a href="">Kotlin DataStructures</a></li>
                    <li><a href="">Algorithms and DataStructures in Kotlin</a></li>
                </ul>
                <Typography variant="h4">
                    Version Control Systems<br/>
                </Typography>
                <Typography>
                    Version control systems record your changes to the codebase and allow you to recall specific versions later. There are multiple Version Control Systems available but Git is the most common one these days.
                </Typography><br/>
                <div className={classes.githubImg} style={imgStyle}></div>
                <Typography>
                    Here are some of the resources to get you started. Feel free to google and find something else that you find easier.
                </Typography><br/>
                <ul>
                    <li><a href="">Learn the basics of Kotlin</a></li>
                    <li><a href="">Kotlin Docs and Official Kotlin Tutorials</a></li>
                </ul>
                <Typography variant="h4">
                    Building an Application
                </Typography><br/>
                <Typography>
                    Here is the list of items that you are going to need when developing Android applications. Please note that, this is an exhaustive list, and you don't need to know it all from the get-go. Get an idea of the items listed, and just start building some apps and keep the items listed in the back of your mind and have a deep dive when using them.
                </Typography><br/>
                <div className={classes.buildAppImg} style={imgStyle}></div>
                <Typography>
                    To learn more about the items listed in the image above, here are the links to the relevant docs
                </Typography>
                <ul>
                    <li><a href="">Learn the basics of Kotlin</a></li>
                    <li><a href="">Kotlin Docs and Official Kotlin Tutorials</a></li>
                    <li><a href="">Data Structures and Algorithms. Also check this.</a></li>
                    <li><a href="">Kotlin DataStructures</a></li>
                    <li><a href="">Algorithms and DataStructures in Kotlin</a></li>
                    <li><a href="">Kotlin Docs and Official Kotlin Tutorials</a></li>
                    <li><a href="">Data Structures and Algorithms. Also check this.</a></li>
                    <li><a href="">Kotlin DataStructures</a></li>
                    <li><a href="">Algorithms and DataStructures in Kotlin</a></li>
                    <li><a href="">Kotlin Docs and Official Kotlin Tutorials</a></li>
                    <li><a href="">Data Structures and Algorithms. Also check this.</a></li>
                    <li><a href="">Kotlin DataStructures</a></li>
                    <li><a href="">Algorithms and DataStructures in Kotlin</a></li>
                </ul>
                <Typography>
                I would highly recommend watching this free course from google on Developing Android Apps with Kotlin. Also, here are some of the resources to learn more about the topics listed above.
                </Typography>
                <ul>
                    <li><a href="">Learn the basics of Kotlin</a></li>
                    <li><a href="">Kotlin Docs and Official Kotlin Tutorials</a></li>
                    <li><a href="">Data Structures and Algorithms. Also check this.</a></li>
                </ul>
                <Typography variant="h4">
                    Wrap Up
                </Typography><br/>
                <Typography>
                    That wraps it up for the android developer roadmap. Again, remember to not be exhausted by the list; just learn the basics and start working on some project, rest of the learnings will come along the way. Good luck!
                </Typography><br/>
                <Typography>
                    For any suggestions, improvements and feedback, feel free to submit an issue or reach out to me on twitter @kamranahmedse.
                </Typography>
            </div>
        </div>
    )
}

export default AndroidLayout;