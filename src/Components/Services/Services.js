import React from 'react';
import iphone from '../../assets/Iphone-mockup.png';

const Services = () => {
    return (
        <div className='App'>
            <div className='flex justify-center'>
            <div className="max-w-md text-center ">
                <h1 className="text-5xl font-bold">What we offer</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
            </div>
            </div>
            <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-items-center items-center">
                <div>
                    <div className="grid grid-rows-4 grid-flow-col gap-4 text-right w-80">
                        <div>
                        <div>
                           
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
                            <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                        </div>
                        </div>
                        <div>
                            
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
                            <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                        </div>
                        <div>
                        <div>
                            
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
                            <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                <img src={iphone} className="hidden lg:block xl:block mb-5" />
                </div>
                
                <div>
                <div className="grid grid-rows-4 grid-flow-col gap-4 text-left w-80">
                        <div>
                        <div>
                           
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
                            <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                        </div>
                        </div>
                        <div>
                            
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
                            <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                        </div>
                        <div>
                        <div>
                           
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
                            <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;