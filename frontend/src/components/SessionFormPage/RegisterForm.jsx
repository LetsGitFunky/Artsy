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
        <form className="form-wrapper" onSubmit={handleSubmit}>
                <div className="sign-up-header">
                    <h1 >Create your account</h1>
                    <p>Registration is easy.</p>
                </div>
                <ul className="error-list">
                    {errors.map(error => <li key={`error-${error}`}>{error}</li>)}
                </ul>
                <label className="input-label">
                    Email address
                    <input
                        className="form-input"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label className="input-label">
                    First name
                    <input
                        className="form-input"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </label>
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
                <label className="input-label">
                    Confirm Password
                    <input
                        className="form-input"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <button className="form-button" type="submit">Register</button>
            </form>
    )

    }

    export default RegisterForm
