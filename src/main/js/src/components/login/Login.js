import React, {useState, useEffect, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactModalLogin from "react-modal-login";
import {loginOpenAction, loginFormChangeAction} from '../../modules/interaction';
import {useDispatch, useSelector} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    }
}));

const Login = ({
    isOpen,
    formStatus
}) => {
    const classes = useStyles();
    const loginModal = useRef();
    var dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [error, setError] = React.useState(null);

    useEffect(()=>{
        setShowModal(isOpen)
    },[isOpen]);
     
    const login = () =>{
        console.log('login')
    };

    const register = () =>{
        console.log('register')
    };

    const changePasswd = () =>{
        console.log('changePasswd')
    };

    const closeModal =() =>{
        dispatch(loginOpenAction(false))
        setError(null);
    }
     
    const startLoading= ()=> {
        setLoading(true)
    }
     
    const finishLoading = () => {
        setLoading(false);
    }

    const changeForm = useCallback((formStatus) =>{
        dispatch(loginFormChangeAction(formStatus))
    },[formStatus])

    const LoignForm = () =>{
        return(
            <React.Fragment>
                <h2>로그인</h2>
                <div style={{clear:"both", border: "1px solid #afaeae", marginBottom:"10px"}}></div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" name="userId" label="Username or email" />
                    <TextField id="standard-basic" name="userPasswd" label="Password" />
                    <div>
                        <Link href="#" onClick={()=> changeForm("recoverPassword")}>Forgot Password</Link>
                    </div>
                    <Button className="loginBtn" 
                        variant="contained" 
                        color="primary"
                        onClick={()=>{login()}}
                    >로그인</Button>
                    <div>
                        <Link href="#" onClick={()=> changeForm("register")}>Create your account</Link>
                    </div>
                </form>
            </React.Fragment>
        )
    }

    const LoignRegisterForm = () =>{
        return(
            <React.Fragment>
                <h2>회원가입</h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" name="userId" label="Username or email" />
                    <TextField id="standard-basic" name="userPasswd" label="Password" />
                    <TextField id="standard-basic" name="userPasswd1" label="Password" />
                    <Button className="loginBtn" variant="contained" color="primary"  onClick={()=>{register()}}>회원 등록</Button>
                    <div>
                        <Link href="#" onClick={()=> changeForm("login")}>로그인</Link>
                    </div>
                </form>
            </React.Fragment>
        )
    }

    const LoignRecoverPasswordForm = () =>{
        return(
            <React.Fragment>
                <h2>비밀번호 찾기</h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" name="userId" label="Username or email" />
                    <TextField id="standard-basic" name="userPasswd" label="Password" />
                    <TextField id="standard-basic" name="userPasswd1" label="new Password" />
                    <TextField id="standard-basic" name="userPasswd2" label="new Password" />
                    <Button className="loginBtn" variant="contained" color="primary" onClick={()=>{changePasswd()}}>패스워드 변경</Button>
                    <div>
                        <Link href="#" onClick={()=> changeForm("login")}>로그인</Link>
                    </div>
                </form>
            </React.Fragment>
        )
    }


    const LoginContainer = (formStatus) =>{
        return (
            <React.Fragment>
                {formStatus === 'login' ? <LoignForm /> : null}
                {formStatus === 'register' ? <LoignRegisterForm /> : null}
                {formStatus === 'recoverPassword' ? <LoignRecoverPasswordForm /> : null}
            </React.Fragment>   
        )
    };

    return (
        <React.Fragment>
            <ReactModalLogin
                tabs={null}
                initialTab={'login'}
                visible={showModal}
                onCloseModal={() => closeModal()}
                loading={loading}
                error={error}
                aboveSocialsLoginContainer={LoginContainer(formStatus)}
                loginError={{
                    label: "Couldn't sign in, please try again."
                }}
                registerError={{
                    label: "Couldn't sign up, please try again."
                }}
                startLoading={() => startLoading}
                finishLoading={() => finishLoading}
            />
        </React.Fragment>
    )
};

export default Login;