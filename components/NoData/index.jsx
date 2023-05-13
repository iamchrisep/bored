import React from 'react';

const NoData = () => {
    return (
        <div className="flex flex-col md:flex-row items-center font-bold text-lg md:text-xl">
            <span className="mb-4 md:mb-0 md:mr-6 text-center">Find something for yourself</span>
            <div className="md:-rotate-90">
                <i className="bi bi-arrow-down flex animate-bounce" />
            </div>
        </div>
    );
};

export default NoData;
