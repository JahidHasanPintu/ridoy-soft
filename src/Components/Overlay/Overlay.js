import React from 'react';
import './Overlay.css'
const Overlay = () => {
    return (
        <div>
            <section className="bg-red-200 text-white relative ">
                  <div className="min-h-screen hero-image bg-right-bottom bg-cover flex back-img" >
                    <div className="relative container mx-auto p-4 flex items-end z-10">
                      <div>
                        <div className="content float-left py-40 px-8 my-10">
                          <div className="heading mb-3 text-2xl md:text-4xl">Convert you ideas into a great product!</div>
                          <div className="heading mb-3 text-2xl md:text-4xl">Convert you ideas into a great product!</div>
                          <div className="text leading-normal hidden sm:block">Helping Women Meet All of their Health Care Needs</div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </section>
        </div>
    );
};

export default Overlay;