import React from 'react';

const Activity = ({activity}) => {
    const priceName = (value) => {
        switch (true) {
            case (value < 0.4):
                return <span className="font-bold">cheap</span>;
            case (value < 0.6):
                return <span className="font-bold">average</span>;
            case (value <= 1):
                return <span className="font-bold">expensive</span>;
            default:
                return <i className="bi bi-infinity" />;

        }
    }
    const accessibilityPossible = (value) => {
        const possible = ((1 - value) * 100).toFixed();
        if (possible > 0) {
            return <span className="font-bold">{possible}%</span>;
        }
        return <i className="bi bi-infinity" />;
    }
    return (
        <>
            {activity.activity && (
                <>
                    <div className="mb-4 font-bold text-lg md:text-xl">
                        You can...
                    </div>
                    <div className="mb-8 ml-8 font-black text-xl md:text-2xl">
                        ...{activity.activity.toLowerCase()}
                    </div>
                </>
            )}
            {activity.type && (
                <div className="flex items-center gap-2">
                    <span>Type:</span>
                    <span className="font-bold">{activity.type}</span>
                </div>
            )}
            {activity.participants && (
                <div className="flex items-center gap-2">
                    <span>Participants:</span>
                    <span className="font-bold">{activity.participants}</span>
                </div>
            )}
            {(activity.price || activity.price === 0) && (
                <div className="flex items-center gap-2">
                    <span>Price range:</span>
                    {priceName(activity.price)}
                </div>
            )}
            {(activity.accessibility || activity.accessibility === 0) && (
                <div className="flex items-center gap-2">
                    <span>Accessibility:</span>
                    {accessibilityPossible(activity.accessibility)}
                </div>
            )}
            {activity.link && (
                <div className="flex gap-2">
                    <a
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold border-b-2 border-transparent hover:border-black"
                    >
                        Resource link
                    </a>
                </div>
            )}
        </>
    );
};

export default Activity;
