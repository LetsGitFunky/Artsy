import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LogoButton from './LogoButton';
import CartButton from '../Cart/CartButton';
import Categories from '../Categories/categories';
import { Modal } from '../../context/Modal';
import SessionForm from '../SessionFormPage/SessionForm';
import { BsSearch } from 'react-icons/bs';
import './Nav.css'


const Navigation = () => {
    const sessionUser = useSelector(state => state.session.user);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formType, setFormType ]= useState("signIn")

    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
            <li className='profile navbar'>
                <ProfileButton/>
            </li>
        );
    } else {
        sessionLinks = (
            <li className='login navbar'>
                <button onClick={() => setIsModalOpen(true)}>Sign In</button>
                {isModalOpen && (
                    <Modal onClose={() => {
                        setIsModalOpen(false);
                        setFormType("signIn");
                    }}>
                    <SessionForm  formType={formType} setFormType={setFormType}/>
                    </Modal>
                )}
            </li>
        );
    }

    return (
        <div className='navMain'>
            <div className='navTop'>
                    <LogoButton/>
                <div className='searchContainer'>
                    <input
                        className='searchbar'
                        type="text"
                        placeholder={"Search for anything"}
                    />
                    <button type="submit" className="searchButton">
                        <span class="searchIcon"><BsSearch size={17} /></span>
                    </button>
                </div>

                <div className='navRight'>
                    {sessionLinks}
                    <CartButton/>
                </div>
            </div>

            <div className='categories'>
                <Categories/>
            </div>
        </div>
    );
}

export default Navigation
