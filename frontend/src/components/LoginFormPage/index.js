import React, {useState} from "react";
import * as sessionActions from "../../store/session";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import "./loginForm.css";


const LoginFormPage = () => {

    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    if(sessionUser) return (
        <Redirect to="/" />
    );

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

    return (
        <>
            <ul>
                {errors.map((err, idx) => <li key={idx}>{err}</li>)}
            </ul>
            <form id="login" onSubmit={handleSubmit}>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email" type="text" required/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password" required/>
                <input type="submit" value="Log In"/>
            </form>
        </>
    );
}

export default LoginFormPage;
