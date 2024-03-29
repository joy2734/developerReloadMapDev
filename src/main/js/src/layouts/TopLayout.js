import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useDispatch, useSelector} from 'react-redux';
import {titleChangeAction, loginOpenAction} from '../modules/interaction';
import {logoutAction} from '../modules/login';
import {
  useHistory
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    topArea: {
      flexGrow: 1,
      '& .MuiAppBar-positionStatic':{
        position: 'fixed'
      }
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    menuArea:{
      width: '100%',
      paddingLeft: '10%',
      paddingRight: '10%'
    },
    menuList:{
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'flex-start',
      flexDirection: 'row',
      overflow:  'auto',
      listStyle: 'none',
      maxWidth: '1300px'
    },
    title: {
        flex: 1
    }
}));

const TopLayout = ({
  isOpen,
  userId
}) =>{
    const classes = useStyles();
    const [menus, setMenus] = useState([]);
    const history = useHistory();
    var dispatch = useDispatch();
    useEffect(()=>{
      fetch(getContextPath() + 'api/menu')
      .then(resp => { return resp.json() })
      .then(resp => setMenus(resp))
    }, []);
  
    const clickMenu = (menuLink) =>{
      if (history.location.pathname.split("/").length > 1)
        history.replace("");
      history.push(menuLink)
      dispatch(titleChangeAction(menuLink))
    }

    const goLogout = () =>{
      if(confirm("로그아웃 하시겠습니까?")){
        console.log(userId);
        dispatch(logoutAction({token:'', userId: userId}))
      }else{

      }
    }

    const goPopup = () =>{
      window.open("/api/popup", "popupWin", "width=600, height=600");
    }

    const menuList = menus.map( menu =>{
      return <li key={menu.menuId} className={classes.title} onClick={()=> clickMenu(menu.menuLink)}><Typography>{menu.menuName}</Typography></li>
    })
    return (
        <div className={classes.topArea}>
            <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <div className={classes.menuArea}>
                <nav>
                    <ul className={classes.menuList}>
                      {menuList}
                    </ul>
                </nav>
                </div>
                {userId === '' ? 
                  <Button color="inherit" onClick={()=> dispatch(loginOpenAction(!isOpen)) }>Login</Button>
                  : <Button color="inherit" onClick={goLogout}>Logout</Button>
                }
                <Button color="inherit" onClick={ goPopup }>팝업</Button>
            </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopLayout;