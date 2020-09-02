import React from 'react';
import './Home.css';
import bg_web from '../video/bg_web.mp4';
import { Card } from "react-bootstrap";
import network from '../img/network.jpg';
import idea from '../img/idea.jpg';
import part from '../img/pat.jpeg';
import lancing from '../img/lancing.jpg';

const Home = () => {
    return (

        <div>
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
                <button type="submit" className="button">Start Here</button>
                <div className='contact'>
                </div>
                <div className="home__head">
                    <h1>We provide solutions to grow your business</h1>
                    <div>
                        <div className="first__line">
                            <p>Our team has expertise in marketing, financial advise, customer support, etc.
                    In addition to our</p>
                        </div>
                        <div className="second__line">
                            <p>knowledge in all these perspective it is our
                     passion that drives us to serve our clients right.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Card">
                <Card style={{ width: '18rem' }} className="Card__one" Box boxShadow={3}>
                    <Card.Img variant="top" src={network} />
                    <Card.Body>
                        <Card.Title>Networking</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="Card__two">
                    <Card.Img variant="top" src={idea} />
                    <Card.Body>
                        <Card.Title>High Benefits</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="Card__three">
                    <Card.Img variant="top" src={part} />
                    <Card.Body>
                        <Card.Title>Partnership</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <img src={lancing} alt="" className="img__bg" />
                <div className="Consultancy">
                    <h1>Consultancy</h1>
                    <p>
                    Business tacticts and essentials communication <br/> skill in colloqial language allows our 
                    team to <br/> work with the locals <br/> in any part of the country this is one of the
                    <br/> major reasons 
                    for our success in business. 
                    </p>
                </div>
                <div className="Analytics">
                    <h1>Analytic Support</h1>
                    <p>We provide a detailed analysis of the business <br/> model of our client's business and make them <br/>
                         understand how their business works and how 
                         <br/>it can be tweaked to yeild better results. <br/>
                          This helps us to benchmark our support and solutions  <br/> for our clients. 
                    </p>
                </div>
                <div className="Optimization">
                    <h1>Optimization</h1>
                    <p>We provide services that allow our clients business to yeild greater profit and also make optimum use
                         of resources available, we also help to optimize existing business models and allow our clients to grow
                          their market.</p>
                </div>
                <div className="Credibility">
                    <h1>Credibility</h1>
                    <p>We verify Freelancers, publish their feedback scores and 
					    All-Time Transaction Data to help you identify time-tested professionals 
                        across the globe.We frequently check and update profiles to ensure genuine 
                        freelancers.We also focus on providing secure transction by verfying bank account 
                        details of freelancers
					</p>
                </div>
            </div>
            <div className="home__brand">
                <h1>Some of the best brands that trust our service</h1>
            </div>
        </div>
    );
}


export default Home;


