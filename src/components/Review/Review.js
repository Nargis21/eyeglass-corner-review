import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';

const Review = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
            <h1 className='home-title2' >What Our customers Say!</h1>
            <div className="review-cart-conatiner">
                {
                    reviews.map(review => <ReviewCart
                        key={review.id}
                        review={review}
                    ></ReviewCart>)
                }
            </div>
        </div>
    );
};

export default Review;