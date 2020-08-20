import React from 'react';
import './Home.css';
import bg_web from '../video/bg_web.mp4';

function Home() {
    return (
        <div>
            <video className="video__bg"
                autoPlay
                loop
                muted
            >
                <source src={bg_web} type="video/mp4" />
            </video>
            <div class="header-overlay" className="home__heading">
                <h1>Welcome To Bluray</h1>
                <p>Find your dream job here.We help you create your better future.</p>
            </div>
        </div>
    );
}

export default Home;
