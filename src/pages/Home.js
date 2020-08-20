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
            <div className="home__heading">
                <h1>Find what's Right For You,<br/>
                    We Provide the best Offers In and Out.
                </h1>

                <p>Take our help to find the best job offers with ease.
                    <br/>
                    Login to join us,build you're career.
                </p>
            </div>
        </div>
    );
}

export default Home;
