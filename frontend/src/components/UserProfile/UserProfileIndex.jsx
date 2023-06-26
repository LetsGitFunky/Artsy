import React from "react";
import { useSelector } from "react-redux";
import UserProfileIndexItem from "./UserProfileIndexItem.jsx";

const UserProfileIndex = () => {
    const reviews = useSelector((state) => Object.values(state.reviews));

    return reviews ? (
        <div className="review-index-container">
                {reviews.map((review, i) => (
                    <UserProfileIndexItem key={`review-item-${i}`} review={review} />
                ))}
        </div>
    ) : null;
};

export default UserProfileIndex;
