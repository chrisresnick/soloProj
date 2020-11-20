import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import ProfileButton from "./ProfileButton";

const Navigation = ({isLoaded}) => {
    const user = useSelector(state => state.session.user);
    const links = user ? (<li><ProfileButton user={user} /></li>) : (
        <>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </>
      );
    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
                {isLoaded && links}

        </ul>
    );
}

export default Navigation;
