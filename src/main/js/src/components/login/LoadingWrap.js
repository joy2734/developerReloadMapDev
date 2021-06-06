import React, {useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Loader from "react-loader-spinner";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    loadingWrap: {
        position: "absolute",
        left: "46%",
        top: "46%",
        zIndex: "4"
    }
}));

const LoadingWrap = ({
    loading
}) => {
    const classes = useStyles();
    
    return(
        <div className={classes.loadingWrap}>
            <Loader
                type="TailSpin"
                color="#00BFFF"
                height={70}
                width={70}
                visible={loading}
            />
        </div>
    )
};

export default LoadingWrap;