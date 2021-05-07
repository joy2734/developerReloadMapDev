import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory 
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
;
import Typography from '@material-ui/core/Typography';
import {BottomLayout, MiddleLayout, TopLayout} from './layouts';
import { hot } from 'react-hot-loader/root';

const useStyles = makeStyles((theme) => ({

}));

function App() {
  const classes = useStyles();
  const [menus, setMenus] = useState([]);
  let history = useHistory();

  useEffect(()=>{
    fetch('../public/data/menuList.json')
    .then(resp => { return resp.json() })
    .then(resp => setMenus(resp.menuList))
  }, []);
  
  return (
    <Router basename="/roadMap">
      <TopLayout />
      <Switch>
        <Route path="/home" component={MiddleLayout} />
        <Route path="/front">
          <div>121212121</div>
        </Route>
        <Route path="/back">
          <div>sdsdsd</div>
        </Route>
        <Route path="/DevOps"></Route>
        <Route path="/react"></Route>
        <Route path="/android"></Route>
        <Route path="/board"></Route>
      </Switch>
      <BottomLayout />
    </Router>
  );
}

export default hot(App);
