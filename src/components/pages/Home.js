import React from 'react';
import ReviewsForm from '../reviews/reviewsForm'
import ReviewList from '../reviews/reviewsList';

import './home.css'
function Home() {
    return (
        <>
            <h1>Homepage !</h1>
            <ReviewsForm />
            <ReviewList />
        </>
    )
}

export default Home
