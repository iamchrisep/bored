'use client';

import React, {useState, useCallback} from 'react';
import Loader from '@/components/Loader';
import Error from '@/components/Error';
import NoData from '@/components/NoData';
import Activity from '@/components/Activity';
import {filters} from '@/constants';
import Radio from '@/components/Radio';

export default function Home() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [selectedType, setSelectedType] = useState('any');

    const handleSubmit = useCallback(() => {
        setLoading(true);
        let api = 'https://www.boredapi.com/api/activity';
        console.log(selectedType);
        if (selectedType !== 'any') {
            api += `?type=${selectedType}`;
        }
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [selectedType]);

    return (
        <div
            className="flex flex-col w-full lg:w-2/3 md:flex-row justify-center gap-8 md:gap-16 p-8 md:p-16 bg-white border-2 border-black rounded-2xl"
        >
            <div className="flex flex-col">
                {!data && (
                    <NoData/>
                )}
                {isLoading ? (
                    <Loader/>
                ) : data && (
                    <div className="flex flex-col gap-2">
                        {data.error && (
                            <Error text={data.error}/>
                        )}
                        <Activity activity={data}/>
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <span>Type:</span>
                    <ul className="flex flex-wrap items-center w-full gap-4 text-sm">
                        {filters.types.map((type) => (
                            <li key={type}>
                                <Radio
                                    value={type}
                                    checked={selectedType === type}
                                    handleChange={() => setSelectedType(type)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    className="submit"
                    onClick={handleSubmit}
                >
                    <span>
                        Let&#39;s find!
                    </span>
                </button>
            </div>
        </div>
    );
}
