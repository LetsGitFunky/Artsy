import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as reviewActions from '../../store/review';
import './ReviewForm.css'

const ReviewForm = ({productId}) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(3);

    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(reviewActions.createReview({ title, body, rating, productId }))
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
        <form className="reviewFormContainer" onSubmit={handleSubmit}>

            <ul className="errorList">
                {errors.map((error, index) => <li key={index}>{error}</li>)}
            </ul>

            <div>
                <label className="inputLabel">
                    Title
                    <input
                        className="formInput"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
            </div>

            <div>
                <label className="inputLabel">
                    Body
                    <textarea
                        className="formInput"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </label>
            </div>

            <div>
                <label className="inputLabel">
                    Rating
                    <select
                        className="formInput"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </label>
            </div>

            <button className="formButton" type="submit">Submit Review</button>

        </form>
    )
}

export default ReviewForm;
