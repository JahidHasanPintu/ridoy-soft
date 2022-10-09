import React from 'react';

const Career = () => {
    return (
        <div>
            <section className="py-6 dark:bg-violet-400 dark:text-gray-900">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                    <h1 className="text-5xl font-bold leading-none text-center">Choose Ridoy Soft Career</h1>
                    <p className="pt-2 pb-8 text-xl font-medium text-center">Eum omnis itaque harum at quae sequi unde similique alias asperiores totam. Ex cumque maxime harum doloremque, tempore nam fugiat aspernatur rerum ipsa unde est modi commodi molestias maiores eveniet eius esse asperiores neque dicta ea quisquam? Excepturi sapiente officiis explicabo ab?</p>
                    <button className="px-8 py-3 text-lg font-semibold rounded bg-gray-800 text-white">Learn more</button>
                </div>
            </section>
            <section className="py-6 bg-slate-50 text-gray-900">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">Are you React developer? We are looking for junior react dev</h1>
                <button className="px-8 py-3 text-lg font-semibold rounded bg-gray-900 text-white">Apply </button>
            </div>
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">Are you Laravel developer? We are looking for junior Laravel dev</h1>
                <button className="px-8 py-3 text-lg font-semibold rounded bg-gray-900 text-white">Apply </button>
            </div>
            </section>
        </div>
    );
};

export default Career;