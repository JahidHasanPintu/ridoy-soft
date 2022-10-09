import React from 'react';
import atom from '../../assets/icons/atom.png';
import conference from '../../assets/icons/conference.png';
import coin from '../../assets/icons/coin.png';
import './Features.css';

const Features = () => {
    return (
        <div>
             
             <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div className='flex fetsec'>
                            <img src={atom} alt="" />
                            <div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Innovative solutions</h3>
                            <p className="text-gray-500 dark:text-gray-400">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
                            </div>
                        </div>
                        <div className='flex fetsec'>
                            <img src={conference} alt="" />
                            <div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Experienced Team</h3>
                            <p className="text-gray-500 dark:text-gray-400">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
                            </div>
                        </div>
                        <div className='flex fetsec'>
                            <img src={coin} alt="" />
                            <div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Flexible Pricing</h3>
                            <p className="text-gray-500 dark:text-gray-400">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;