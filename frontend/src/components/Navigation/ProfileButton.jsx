import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {FaUserCircle} from "react-icons/fa";
import {TiArrowSortedDown} from "react-icons/ti";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import "./Nav.css"

const ProfileButton = () => {
    const [showMenu, setShowMenu] = useState(false);
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();


    const openMenu = (e) => {
        e.stopPropagation();
        if (showMenu) return;
        setShowMenu(true);
    };

    const closeMenu = () => {
        if (!showMenu) return;
        setShowMenu(false);
    };

    useEffect(() => {
        if (!showMenu) return;
        document.addEventListener('click', closeMenu);

        return () => {
        document.removeEventListener('click', closeMenu);
        };
    }, [showMenu]);

    const handleLogout = (e) => {
        e.preventDefault();
        history.push('/');
        dispatch(sessionActions.logout());
    };

    return (
        <div className="profile-container" onClick={openMenu}>
        <button className="navbar profile-button"><FaUserCircle size={20} style={{ color: "#0091F5" }}/> <TiArrowSortedDown style={{ color: "#0091F5" }}/></button>
        {showMenu && (
            <ul className='profile-menu'>
                <li className="profile-link">
                    <Link to={`/user/${user.id}`}>View {user.firstName}'s Profile</Link>
                </li>
                <li className="logout">
                    <Link to="/">
                        <button className="logout-button" onClick={handleLogout}>Logout</button>
                    </Link>
                </li>
            </ul>
        )}
        </div>
    );
};

export default ProfileButton;
