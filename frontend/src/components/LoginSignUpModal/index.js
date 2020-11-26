import React, { useState, useEffect } from "react";
import { useDispatch, useSelector }from "react-redux"
import * as requireActions from "../../store/require";
import LoginFormPage from "../LoginFormPage";
import SignupForm from "../SignupForm";
import ReactDom from "react-dom";
import "./modal.css"

const LoginSignUpModal = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState(true)
    const [tagTodisplay, setTagToDisplay] = useState(<LoginFormPage/>)
    useEffect(() => setTagToDisplay(login ? (<LoginFormPage/>) : (<SignupForm />)), [login]);
    const sessionUser = useSelector(state => state.session.user);
    if(sessionUser) {
        dispatch(requireActions.setRequireLogin(false))
    }

    return ReactDom.createPortal(
        (<div id="modal">
            <div id="modal-background" onClick={() => dispatch(requireActions.setRequireLogin(false))}>
            </div>
            <div id="modal-content">
                <div className="tab-holder">
                    <div
                        className={login ? "tab-selected" : "tab-notSelected"}
                        onClick={() => setLogin(true)}
                    >
                        Log In
                    </div>
                    <div
                        className={!login ? "tab-selected" : "tab-notSelected"}
                        onClick={() => setLogin(false)}
                    >
                        Register
                    </div>
                </div>
                {tagTodisplay}
            </div>
        </div>), document.body
    )
}

export default LoginSignUpModal;
