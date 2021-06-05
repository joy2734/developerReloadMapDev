import React, {useState, useEffect, useRef, useCallback, useMemo } from 'react';

const LoignForm = ({
    userId,
    password
}) => {

    return(
        <React.Fragment>
            <h2>로그인</h2>
            <div style={{clear:"both", border: "1px solid #afaeae", marginBottom:"10px"}}></div>
            <form name="loginForm" className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" name="userId" label="Username or email" value={userId} onChange={(evt) => setUserId((evt.target.value))} />
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
        </React.Fragment>
    )
};

export default LoignForm;