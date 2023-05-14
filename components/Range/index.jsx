import React from 'react';

const Range = ({name, value, min, max, step, valueNames, handleChange}) => {
    return (
        <>
            <input
                id={name}
                type="range"
                min={min}
                max={max}
                value={value}
                step={step}
                onChange={handleChange}
                className="w-full h-2 bg-neutral-200 accent-black rounded-lg appearance-none cursor-pointer"
            />
            <div className="w-full flex justify-between text-xs px-2 text-neutral-500">
                {valueNames.map((valueName) => (
                    <div key={valueName} className="relative">|
                        <div className="absolute top-4 left-1/2 -translate-x-1/2">{valueName}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Range;
