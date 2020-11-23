import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import ProfileButton from "./ProfileButton";
import SearchBar from "./SearchBar";
import "./nav.css"

const Navigation = ({isLoaded}) => {
    const user = useSelector(state => state.session.user);
    const links = user ? (
        <>
        <li><ProfileButton user={user} /></li>
        <li>
            <NavLink to="/cart">
                <i class="fas fa-shopping-cart"></i>
            </NavLink>
        </li>
        </>
    ) : (
        <>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </>
      );
    return (
        <>
            <ul class="nav">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li><SearchBar /></li>
                    {isLoaded && links}
            </ul>
            <hr/>
        </>
    );
}

export default Navigation;
