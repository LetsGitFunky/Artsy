import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignInForm from './SignInForm';
import RegisterForm from './RegisterForm';
import './FormStyles.css'
import '../Navigation/Nav.css'

const SessionForm = ({formType, setFormType})  => {
    const sessionUser = useSelector(state => state.session.user);

if (sessionUser) return <Redirect to="/" />;

return (
    <>
        {formType === "signIn" ? <SignInForm setFormType={setFormType}/> : <RegisterForm setFormType={setFormType}/> }
    </>
    );
};

export default SessionForm;
