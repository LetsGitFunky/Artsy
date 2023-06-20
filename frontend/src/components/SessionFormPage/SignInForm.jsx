import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import '../../styles/FormStyles.css'
import '../../styles/Nav.css'

const SignInForm = ({setFormType}) => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);
    const [errors, setErrors] = useState([]);

    const handleDemoSignIn = (e) => {
        e.preventDefault(); // prevent form from submitting
        setEmail("test@test.com");
        setPassword("password");
        dispatch(sessionActions.login({ email: "test@test.com", password: "password" }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        // setIsModalOpen(false);
                return dispatch(sessionActions.login({ email, password }))
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

        <form className="formContainer" onSubmit={handleSubmit}>

            <div className="signInHeader">
                <h1>Sign in</h1>
                <button
                type="button"
                onClick={() => setFormType("signUp")}
                className="navbar register">Register
                </button>
            </div>

            <ul className="errorList">
                {errors.map((error, index) => <li key={index}>{error}</li>)}
            </ul>

            <div>
                <label className="inputLabel">
                    Email Address
                    <input
                        className="formInput"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
            </div>

            <div>
                <label className="inputLabel">
                    Password
                    <input
                        className="formInput"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
            </div>

            <button className="formButton" type="submit">Sign In</button>

            <button className="formButton"
            type="button"
            onClick={handleDemoSignIn}>Sign In as Demo User
            </button>


        </form>
    </>)
}

export default SignInForm
