import React from 'react';
import './ReviewCart.css'
const ReviewCart = ({ review }) => {
    const { name, img, comment, ratings } = review
    return (
        <div className='cart-container'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h3>{comment}</h3>
            <h4>Ratings: {ratings}</h4>
        </div>
    );
};

export default ReviewCart;