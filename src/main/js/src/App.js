import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import clsx from 'clsx';
import {
  HashRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Login from "./components/login/Login";
import {
  BottomLayout,
  MiddleLayout, 
  TopLayout,
  FrontEndLayout,
  BackEndLayout,
  DevOpLayout,
  ReactLayout,
  AndroidLayout,
  CommunityLayout} from './layouts';
import {useSelector} from 'react-redux';
import { hot } from 'react-hot-loader/root';
import {titleChangeAction} from "./modules/interaction";

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
  }
}));

function App() {
  const classes = useStyles();
  const {
    title,
    subTitle
  }= useSelector(store => store.interactReducer.titleInfo);
  const {
    isOpen,
    formStatus
  } = useSelector(store => store.interactReducer.login);
  var dispatch = useDispatch();
  
  useEffect(()=>{
    //dispatch(postsAction(getPosts))
    dispatch(titleChangeAction(location.href.split("/#/")[1] || "home"))
  }, []);

  return (
    <Router>
      <TopLayout title={title} subTitle={subTitle} isOpen={isOpen} />
      <div className={classes.container}>
          <div className={classes.title}>
              <h1>{title}</h1>
              <p className={classes.subtitle}>{subTitle}</p>
          </div>
      </div>
      <Switch>
        <Route path="/home" component={MiddleLayout} ></Route>
        <Route path="/front" component={FrontEndLayout} ></Route>
        <Route path="/back" component={BackEndLayout} ></Route>
        <Route path="/DevOps" component={DevOpLayout} ></Route>
        <Route path="/react" component={ReactLayout} ></Route>
        <Route path="/android" component={AndroidLayout}></Route>
        <Route path="/community" component={CommunityLayout} ></Route>
        <Route exact={true} path="/" component={MiddleLayout} ></Route>
      </Switch>
      <Login 
        isOpen={isOpen}
        formStatus={formStatus}
      />
      <BottomLayout />
    </Router>
  );
}

export default hot(App);
