import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './UserProfile.css';
import { fetchUser } from '../../store/session';
import UserProfileIndex from './UserProfileIndex';



const UserProfile = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)
    const userId = user.id

    useEffect(() => {
        dispatch(fetchUser(userId));
    }, [dispatch, userId]);


    return (
        <div className='up-wrapper'>
            <p className='up-header'>{user.firstName}'s Profile</p>
            <p className='up-reviews-header'>Your reviews:</p>
            <UserProfileIndex/>
        </div>
    );
}

export default UserProfile;
