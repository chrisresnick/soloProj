import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import * as sessionActions from "../../store/session";


const ProfileButton = ({user}) => {
    const dispatch = useDispatch();
    const  [selected, setSelected] = useState(false);

    const open = () => {
        if(selected) return;
        setSelected(true);
    }

    useEffect(() => {
        if(!selected) return;
        const closeMenu = () => {
            setSelected(false);
        }
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener("click", closeMenu)
    }, [selected]);

    const logout = e => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    }

    return (
        <>
            <i  onClick={open}className="far fa-user-circle"></i>
            {selected && (
                <ul className="dropdown">
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </>
    );
}

export default ProfileButton;
