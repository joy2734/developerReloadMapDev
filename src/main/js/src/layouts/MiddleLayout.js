import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RecipeReviewCard from '../components/Card/RecipeReviewCard';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingLeft: '20px',
        paddingRight: '20px'
    },
    title:{
        color: '#212529',
        fontSize: '24px',
        fontWeight: '700',
        marginBottom: '12px',
        padding: '45px 30px',
        textAlign: 'center'
    },
    subtitle:{
        fontSize: '16px',
        color: 'rgb(68, 68, 68)'
    },
    detailInfo:{
        borderTop: '1px solid #eaeaea',
        backgroundColor: '#fafafa',
        display: 'flex',
        flexWrap: 'wrap'
    },
    detailInfoWrap:{
        marginLeft: '16%',
        maxWidth: '1300px'
    }
}));


const MiddleLayout = ({

}) =>{
    const classes = useStyles();
    const [title, setTitle] = useState('Developer Roadmaps');
    const [subTitle, setSubTitle] = useState('Step by step guides and paths to learn different tools or technologies');

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h1>{title}</h1>
                    <p className={classes.subtitle}>{subTitle}</p>
                </div>
            </div>
            <div className={classes.detailInfo}>
                <div className={classes.detailInfoWrap} >
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                </div>
            </div>
        </div>
    )
}


export default MiddleLayout;