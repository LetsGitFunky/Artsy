import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './FormStyles.css'
import '../Navigation/Nav.css'

const RegisterForm = () => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
        setErrors([]);
        return dispatch(sessionActions.signup({ email, firstName, password }))
            .catch(async (res) => {
            let data;
                try {
                // .clone() essentially allows you to read the response body twice
                data = await res.clone().json();
            } catch {
                data = await res.text(); // Will hit this case if the server is down
            }   if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
        });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <form className="formContainer" onSubmit={handleSubmit}>
                <div className="signUpHeader">
                    <h1 >Create your account</h1>
                    <p>Registration is easy.</p>
                </div>
                <ul className="errorList">
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <label className="inputLabel">
                    Email address
                    <input
                        className="formInput"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label className="inputLabel">
                    First name
                    <input
                        className="formInput"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </label>
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
                <label className="inputLabel">
                    Confirm Password
                    <input
                        className="formInput"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <button className="formButton" type="submit">Register</button>
            </form>
    )

    }

    export default RegisterForm
