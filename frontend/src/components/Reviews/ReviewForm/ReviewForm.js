import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as reviewActions from '../../../store/review.js';
import { Modal } from '../../../context/Modal.js'
import './ReviewForm.css'

const ReviewForm = ({productId, onReviewSubmit }) => {

    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(3);
    const currentUser = useSelector(state => state.session.user);
    const [submissionSuccessful, setSubmissionSuccessful] = useState(false);

    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setErrors([]);
    //     return dispatch(reviewActions.createReview({id: productId}, { userId: currentUser.id, title, body, rating }))
    //         .catch(async (res) => {
    //         let data;
    //             try {
    //             data = await res.clone().json();
    //             } catch {
    //             data = await res.text();
    //             }
    //             if (data?.errors) setErrors(data.errors);
    //             else if (data) setErrors([data]);
    //             else setErrors([res.statusText]);
    //     });
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(reviewActions.createReview(productId, { userId: currentUser.id, title, body, rating, productId }))
        .then(() => {
            setTitle(''); // Clear form fields
            setBody('');
            setRating(3);
            setShowModal(false); // Close modal
            setSubmissionSuccessful(true);
            setTimeout(() => setSubmissionSuccessful(false), 5000);
            onReviewSubmit();
            // debugger
        })
        .catch(async (res) => {
            let data;
            try {
            data = await res.json();
            } catch {
            data = await res.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        });
    }



    return (
        <div>
            {submissionSuccessful && <p>Review submitted successfully!</p>}

            <button onClick={() => setShowModal(true)}>Write a Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <form className="reviewFormContainer" onSubmit={handleSubmit}>
                        <ul className="error-list">
                            {errors.map((error, index) => <li key={index}>{error}</li>)}
                        </ul>
                        <div>
                            <label className="review-input-label">
                                Title
                                <input
                                    className="review-form-input"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label className="review-input-label">
                                Body
                                <textarea
                                    className="review-form-input"
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label className="review-input-label">
                                Rating
                                <select
                                    className="review-form-input"
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
                        <button className="review-form-button" type="submit">Submit Review</button>
                    </form>
                </Modal>
            )}
        </div>
    )
}

export default ReviewForm;
