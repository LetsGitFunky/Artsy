import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

const ProfileButton = () => {
    const [showMenu, setShowMenu] = useState(false);
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const openMenu = (e) => {
        if (showMenu) return;
        setShowMenu(true);
        e.stopPropagation();
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
        dispatch(sessionActions.logout());
    };

    return (
        <div className="profile-container" onClick={openMenu}>
        <button className="navbar profile-button">Picture</button>
        {showMenu && (
            <ul className='profile-menu'>
                <li>{user.firstName}</li>
                <li>{user.email}</li>
                <li>
                <button onClick={handleLogout} className="logout">Logout</button>
                </li>
            </ul>
        )}
        </div>
    );
};

export default ProfileButton;
