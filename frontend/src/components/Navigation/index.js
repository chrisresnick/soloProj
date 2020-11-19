import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import ProfileButton from "./ProfileButton";

const Navigation = ({isLoaded}) => {
    const user = useSelector(state => state.session.user);
    const links = user ? (<ProfileButton user={user} />) : (
        <>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      );
    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
                {isLoaded && links}
            </li>
        </ul>
    );
}

export default Navigation;
