import React from "react";
import { useDispatch }from "react-redux"
import * as requireActions from "../../store/require";
import ReactDom from "react-dom";
import "./modal.css"

const LoginSignUpModal = () => {
    const dispatch = useDispatch();
    return ReactDom.createPortal(
        (<div id="modal">
            <div id="modal-background" onClick={() => dispatch(requireActions.setRequireLogin(false))}>
            </div>
            <div id="modal-content">
                <h1>test</h1>
            </div>
        </div>), document.body
    )
}

export default LoginSignUpModal;
