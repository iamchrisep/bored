import React from 'react';

const Radio = ({value, checked, handleChange}) => {
    return (
        <>
            <input
                type="radio"
                id={value}
                name="types"
                value={value}
                checked={checked}
                onChange={handleChange}
                className="hidden"
            />
            <label
                htmlFor={value}
                className={`inline-flex items-center justify-between w-full px-4 py-2 text-neutral-500 bg-white border-2 border-neutral-200 rounded-3xl cursor-pointer hover:text-neutral-600 hover:bg-neutral-100 hover:border-neutral-300 ${checked && '!border-black text-black'}`}
            >
                <div className="block">
                    <div className="w-full">{value}</div>
                </div>
            </label>
        </>
    );
};

export default Radio;
