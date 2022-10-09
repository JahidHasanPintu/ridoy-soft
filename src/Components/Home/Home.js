import React from 'react';
import Blog from '../Blog/Blog';
import Brands from '../Brands/Brands';
import Features from '../Features/Features';
import Overlay from '../Overlay/Overlay';
import Services from '../Services/Services';
import Steps from '../Steps/Steps';
import Stats from './Stats/Stats';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            {/* Banner area  */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>


           <Features></Features>
            <Steps></Steps>

            <Services></Services>

            <Overlay></Overlay>
            <Stats></Stats>

            
            <Testimonials></Testimonials>
            <Brands></Brands>
            <Blog></Blog>
        </div>
    );
};

export default Home;