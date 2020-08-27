import React from 'react';
import './Home.css';
import bg_web from '../video/bg_web.mp4';
import { createBrowserHistory as history } from 'history';
import Contact from './Contact.js';
import About from './About.js';


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
                <h1>Find what's Right For You,<br />
                    We Provide the best Offers In and Out.
                </h1>

                <p>Take our help to find the best job offers with ease.
                    <br />
                    Login to join us,build you're career.
                </p>
            </div>
            <button type="submit" class="btn btn-primary" onClick={() => history().push('/SignUp')}>Start Here</button>
            <div className='contact'>
            </div>
            <Contact/>
        </div>

    );
}

export default Home;


