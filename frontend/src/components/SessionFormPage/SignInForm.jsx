import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './FormStyles.css'
import '../Navigation/Nav.css'
import { fetchCartItems } from '../../store/cart_item';

const SignInForm = ({setFormType}) => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);
    const [errors, setErrors] = useState([]);

    const handleDemoSignIn = (e) => {
        e.preventDefault(); // prevent form from submitting
        setEmail("demo@test.com");
        setPassword("password123");
        dispatch(sessionActions.login({ email: "demo@test.com", password: "password123" }))
        .then(() => dispatch(fetchCartItems()));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        return dispatch(sessionActions.login({ email, password }))
        .then(() => dispatch(fetchCartItems()))
        .catch(async (res) => {
            let data;
            try {
                data = await res.clone().json();
            } catch {
                data = await res.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        });
    }

    return (
    <>

        <form className="form-wrapper" onSubmit={handleSubmit}>

            <div className="sign-in-header">
                <h1>Sign in</h1>
                <button
                type="button"
                onClick={() => setFormType("signUp")}
                className="navbar register">Register
                </button>
            </div>

            <ul className="error-list">
                {errors.map((error, index) => <li key={index}>{error}</li>)}
            </ul>

            <div>
                <label className="input-label">
                    Email Address
                    <input
                        className="form-input"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
            </div>

            <div>
                <label className="input-label">
                    Password
                    <input
                        className="form-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
            </div>

            <button className="form-button" type="submit">Sign In</button>

            <button className="form-button"
            type="button"
            onClick={handleDemoSignIn}>Sign In as Demo User
            </button>


        </form>
    </>)
}

export default SignInForm
