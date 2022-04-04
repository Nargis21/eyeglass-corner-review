import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
            <div className='home-container'>
                <div className="home-title1">
                    <h1>EyeGlass Corner</h1>
                    <p>To buying your first glass Eyeglass corner is best for you. It's a Collections of similar eyeglass frames. Find your favorite style.Stay with us!</p>
                    <button className='explore-btn'>Explore Now</button>
                </div>
                <div className="home-img">
                    <img src="https://www.eyeworksonline.co.uk/wp-content/uploads/blog-offer-eco-clip-on.jpg" alt="" />
                </div>
            </div>
            <h1 className='home-title2' >What Our customers Say!</h1>
            <div className="review-cart-conatiner">
                {
                    reviews.slice(0, 3).map(review => <ReviewCart
                        key={review.id}
                        review={review}
                    ></ReviewCart>)
                }
            </div>
            <div className="seeall">
                <Link to='/review'>
                    <button className='seeall-btn'>See All Reviews</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;