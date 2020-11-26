import React, {useState} from "react";
import * as sessionActions from "../../store/session";
import * as requireActions from "../../store/require";
import {useDispatch, } from "react-redux";

import "./loginForm.css";


const LoginFormPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({
            credential : email,
            password
        })).catch(res => {
            if(res.data && res.data.errors) setErrors(res.data.errors)
        });
    }

    const demoUser = e => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({
            credential : 'Demo-lition',
            password: "password"
        })).catch(res => {
            if(res.data && res.data.errors) setErrors(res.data.errors)
        });
    }

    return (
        <div className="login-form-holder">
            <ul>
                {errors.map((err, idx) => <li key={idx}>{err}</li>)}
            </ul>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="username" type="text" required/>
            <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password" required/>
            <button onClick={handleSubmit}>Log In</button>
            <button onClick={demoUser}>Log in as Demo User</button>
        </div>
    );
}

export default LoginFormPage;
