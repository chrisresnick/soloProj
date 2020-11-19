import React, {useState} from "react";
import * as sessionActions from "../../store/session";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import "./signupForm.css";

const SignupFrom = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if(sessionUser) return (
        <Redirect to="/" />
    )

    const handleSubmit = e => {
        e.preventDefault();
        if(password === cPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({
                email,
                username,
                password
            })).catch(res => {
                if(res.data && res.data.errors) setErrors(res.data.errors);
            });
        }
        return setErrors(['Confirm Password must match Password']);
    }



    return (
        <>
            <ul>
                {errors.map((err, idx) => <li key={idx}>{err}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="username" type="text" required/>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email" type="text" required/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password"  type="password" required/>
                <input value={cPassword} onChange={e => setCPassword(e.target.value)} placeholder="confirm password"  type="password" required/>
                <input type="submit"/>
            </form>

        </>
    );
}

export default SignupFrom;
