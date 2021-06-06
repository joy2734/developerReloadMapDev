import React, {useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Loader from "react-loader-spinner";
import { makeStyles } from '@material-ui/core/styles';
import {
    checkTokenAction, 
    logoutAction
} from "../../modules/login";

const TokenChecker = ({

}) => {
    var dispatch = useDispatch();
    const {
        token
    } = useSelector(store => store.login.login);

    useEffect(()=>{
        dispatch(checkTokenAction({token: localStorage.getItem('devmap-user-token')}))
    }, []);

    return(
        <React.Fragment>
        </React.Fragment>
    )
};

export default TokenChecker;