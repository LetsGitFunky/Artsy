import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './UserProfile.css';
import { fetchUser, updateUser } from '../../store/session';
import UserProfileIndex from './UserProfileIndex';

const UserProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const userId = user.id
    const [firstName, setFirstName] = useState(user.firstName);

    useEffect(() => {
        dispatch(fetchUser(userId));
    }, [dispatch, userId]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedUser = { ...user, firstName };
        const res = await dispatch(updateUser(updatedUser));

        if (!res) {
            setFirstName(updatedUser.firstName);
        }
    };


    return (
        <div className='up-wrapper'>
            <p className='up-header'>{user.firstName}'s Profile</p>
                <p className='info-header'>Your info:</p>
            <div className='info-container'>
                <div className='info-cat-container'>
                    <p className='info-cat'>Email:</p>
                    <p>{user.email}</p>
                </div>
                <div className='info-cat-container'>
                    <p className='info-cat'>Name:</p>
                    <form onSubmit={handleUpdate}>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <button type="submit" className="change-name">Update Name</button>
                    </form>

                </div>
            </div>
            <p className='up-reviews-header'>Your reviews:</p>
            <UserProfileIndex/>
        </div>
    );
}

export default UserProfile;
