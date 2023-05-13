import React from 'react';

const Error = ({text}) => {
    return (
        <div
            className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-200"
            role="alert">
            <i className="bi bi-info-circle-fill flex-shrink-0 inline w-6 h-6 mr-2" />
            <span className="sr-only">Info</span>
            <div className="font-bold">
                {text}
            </div>
        </div>
    );
};

export default Error;
