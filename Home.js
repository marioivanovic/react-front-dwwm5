import React from 'react'
import UserProfile from '../userProfile/UserProfile';
import UserDisplay from '../userDisplay/UserDisplay';

import './home.css'
function Home() {
    return (
        <>
            <h1>Homepage !</h1>
            <UserProfile />
            <UserDisplay />
        </>
    )
}

export default Home
