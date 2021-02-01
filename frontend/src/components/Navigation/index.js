import React from "react";
import {useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import * as sessionActions from "../../store/session"
import * as requireActions from "../../store/require"
import SearchBar from "./SearchBar";
import "./nav.css"

const Navigation = ({isLoaded}) => {
    const user = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();

    const logout = e => {
        dispatch(sessionActions.logout());
    }
    const links = user ? (
        <li>
            <ul className="nav-links-ul">
                <li>
                    <i className="fas fa-sign-out-alt" onClick={logout}></i>
                </li>
                <li>
                    <i className="far fa-plus-square"
                    onClick={e => history.push("/newListing")}></i>
                </li>
                <li>
                    <i  className="fas fa-shopping-cart"
                        onClick={() => history.push("/cart")}></i>
                </li>
            </ul>
        </li>
    ) : (
        <>
          <li><i className="fas fa-sign-in-alt" onClick={() => dispatch(requireActions.setRequireLogin(true))}></i></li>
        </>
      );
    return (
        <>
            <ul className="nav">
                <li>
                <i className="fas fa-mountain" onClick={() => history.push("/")}></i>
                </li>
                <li><SearchBar /></li>
                    {isLoaded && links}
            </ul>
            <hr/>
        </>
    );
}

export default Navigation;
