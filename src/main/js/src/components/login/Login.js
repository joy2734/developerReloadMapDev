import React, {useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CancelOutlined from '@material-ui/icons/CancelOutlined';
import {loginOpenAction, loginFormChangeAction} from '../../modules/interaction';
import {useDispatch, useSelector} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Alert } from '@material-ui/lab';
import {
    loginAction
    ,signUpAction
    ,chgPasswdAction
} from '../../modules/login';
import LoadingWrap from './LoadingWrap';
import {encryptedPasswd} from '../../lib/cryptoUtils';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '35ch',
        },
    },
    modalDialog:{
        fontFamily: 'Arial',
        position: "fixed",
        width: "450px",
        height: "470px",
        maxWidth: "calc(100% - 40px)",
        maxHeight: "calc(100% - 30px)",
        backgroundColor: "white",
        border: "1px solid #547da1",
        zIndex: "2",
        boxShadow: "0 0px 6px #15030a",
        borderRadius: "4px",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        top: "50%",
        '& h2':{
            marginLeft: '20px'
        },
        '& form':{
            margin: 'auto 65px'
        }
    },
    closeBtn:{
        position: "relative",
        left: "93%",
        top: "2%"
    }
}));

const Login = ({
    isOpen,
    formStatus
}) => {
    const classes = useStyles();
    var dispatch = useDispatch();
    const loading = useSelector(store => store.interactReducer.loading);
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [userErrorForm, setUserErrorForm] = useState('');

    useEffect(()=>{
        if(loading.message)
            alert(loading.message);
        setShowModal(isOpen);
        changeForm("login")
    },[isOpen, loading]);
    
    
    const initFormField = useCallback(()=>{
        setUserErrorForm('')
        setUserId("");
        setPassword("");
        setPassword1("");
        setPassword2("");
    }, []);

    const login = () =>{
        if(!userId){
            alert('사용자ID을 입력해주세요.');
            return;
        }

        if(!password){
            alert('패스워드를 입력해주세요.');
            return;
        }
        dispatch(loginAction({userId: userId, password: encryptedPasswd(password)}));
    };

    const register = () =>{
        setUserErrorForm('')
        if(!userId){
            alert('사용자ID을 입력해주세요.');
            return;
        }

        if(!password){
            alert('패스워드를 입력해주세요.');
            return;
        }

        if(!password1){
            alert('패스워드를 입력해주세요.');
            return;
        }

        if(password != password1){
            alert("패스워드가 동일하지 않습니다.");
            return;
        }
        //아이디 중복체크
        //패스워드 암호화
        fetch('api/isExistUser?userId='+userId)
        .then((resp) => resp.json())
        .then((data)=>{
            console.log(data);
            if(data.SUCCESS)
                dispatch(signUpAction({userId: userId, password: encryptedPasswd(password)}))
            else
                setUserErrorForm('중복유저가 존재합니다.')
        })


    };

    const changePasswd = () =>{
        //dispatch(chgPasswdAction())
    };

    const closeModal =() =>{
        dispatch(loginOpenAction(false))
    }

    const changeForm = useCallback((formStatus) =>{
        initFormField();
        dispatch(loginFormChangeAction(formStatus))
    },[formStatus])

    return (
        <React.Fragment>
            <LoadingWrap className="loading" loading={loading.loading} />
            <div className={classes.modalDialog} style={{display: isOpen ? "block": "none"}}>
                <CancelOutlined className={classes.closeBtn} onClick={closeModal} />
                {formStatus === 'login' ?             
                    (<div>
                        <h2>로그인</h2>
                        <div style={{clear:"both", border: "1px solid #afaeae", marginBottom:"10px"}}></div>
                        <form name="loginForm" className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" name="userId" label="Username or email" value={userId} onChange={(evt) => setUserId((evt.target.value))} />
                            <span>{userErrorForm}</span>
                            <TextField id="standard-basic" name="password" label="Password" value={password} onChange={(evt)=> setPassword(evt.target.value)} />
                            <div>
                                <Link href="#" onClick={()=> changeForm("recoverPassword")}>Forgot Password</Link>
                            </div>
                            <Button className="loginBtn" 
                                variant="contained" 
                                color="primary"
                                onClick={login}
                            >로그인</Button>
                            <div>
                                <Link href="#" onClick={()=> changeForm("register")}>Create your account</Link>
                            </div>
                        </form>
                    </div>): formStatus === 'register' ? 
                    <div>
                        <h2>회원가입</h2>
                        <div style={{clear:"both", border: "1px solid #afaeae", marginBottom:"10px"}}></div>
                        <form name="registerForm" className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" name="userId" label="Username or email"   value={userId} onChange={(evt)=> setUserId(evt.target.value)} />
                            <span>{userErrorForm}</span>
                            <TextField id="standard-basic" type="password" name="password" label="Password"   value={password} onChange={(evt)=> setPassword(evt.target.value)} />
                            <TextField id="standard-basic" type="password" name="password1" label="Password"  value={password1} onChange={(evt)=> setPassword1(evt.target.value)}/>
                            <Button className="loginBtn" variant="contained" color="primary"  onClick={()=>{register()}}>회원 등록</Button>
                            <div>
                                <Link href="#" onClick={()=> changeForm("login")}>Login</Link>
                            </div>
                        </form>
                    </div>
                    : 
                    <div>
                        <h2>비밀번호 찾기</h2>
                        <div style={{clear:"both", border: "1px solid #afaeae", marginBottom:"10px"}}></div>
                        <form name="changePasswordForm" className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" name="userId" label="Username or email" value={userId} onChange={(evt)=> setUserId(evt.target.value)} />
                            <span>{userErrorForm}</span>
                            <TextField id="standard-basic" name="password" label="Password" value={password} onChange={(evt)=> setPassword(evt.target.value)} />
                            <TextField id="standard-basic" name="password1" label="new Password" value={password1} onChange={(evt)=> setPassword1(evt.target.value)} />
                            <TextField id="standard-basic" name="password2" label="new Password" value={password2} onChange={(evt)=> setPassword2(evt.target.value)} />
                            <Button className="loginBtn" variant="contained" color="primary" onClick={()=>{changePasswd()}}>패스워드 변경</Button>
                            <div>
                                <Link href="#" onClick={()=> changeForm("login")}>Login</Link>
                            </div>
                        </form>
                    </div>
                    }
            </div>
        </React.Fragment>
    )
};

export default Login;