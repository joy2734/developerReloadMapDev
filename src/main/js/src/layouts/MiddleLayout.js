import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RecipeReviewCard from '../components/Card/RecipeReviewCard';

const useStyles = makeStyles((theme) => ({
    detailInfo:{
        borderTop: '1px solid #eaeaea',
        backgroundColor: '#eae7e7',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailInfoWrap:{
        maxWidth: '1300px'
    }
}));


const MiddleLayout = ({

}) =>{
    const classes = useStyles();

    return (
        <div>
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