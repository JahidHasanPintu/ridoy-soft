import React from 'react';

const Steps = () => {
    return (
        <div>
            <section className="p-6 bg-slate-50  mb-10">
                <div className="container mx-auto">
                    <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase">How we work</span>
                    <h2 className="text-5xl font-bold text-center ">Our working procedure is simple</h2>
                    <div className="grid gap-6 my-16 lg:grid-cols-3">
                        <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-200">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-cyan-300 text-gray-900">1</div>
                            <p className="text-2xl font-semibold">
                                <b>Developing </b>an effective strategy for better product. 
                            </p>
                        </div>
                        <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-200">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-cyan-300 text-gray-900">2</div>
                            <p className="text-2xl font-semibold">
                                <b>Coding </b>we start coding after proper planning then make clean code 
                            </p>
                        </div>
                        <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-200">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-cyan-300 text-gray-900">3</div>
                            <p className="text-2xl font-semibold">
                                <b>Testing </b>We provide automated testing and after production support
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Steps;