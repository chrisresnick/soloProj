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
    const toggleLogin = (e) => {
        e.preventDefault();
        setLogin(!login);
    }
    let tagTodisplay = login ? (<LoginFormPage toggleLogin={toggleLogin}/>) : (<SignupForm toggleLogin={toggleLogin} />);
    useEffect(() => tagTodisplay = login ? (<LoginFormPage toggleLogin={toggleLogin}/>) : (<SignupForm toggleLogin={toggleLogin} />), [login])
    const sessionUser = useSelector(state => state.session.user);
    if(sessionUser) {
        dispatch(requireActions.setRequireLogin(false))
    }

    return ReactDom.createPortal(
        (<div id="modal">
            <div id="modal-background" onClick={() => dispatch(requireActions.setRequireLogin(false))}>
            </div>
            <div id="modal-content">
                {tagTodisplay}
            </div>
        </div>), document.body
    )
}

export default LoginSignUpModal;
