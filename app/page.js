'use client';

import React, {useState, useCallback} from 'react';
import {filters, prices} from '@/constants';
import Loader from '@/components/Loader';
import Error from '@/components/Error';
import NoData from '@/components/NoData';
import Activity from '@/components/Activity';
import Radio from '@/components/Radio';
import Range from '@/components/Range';

export default function Home() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [selectedType, setSelectedType] = useState('any');
    const [selectedParticipants, setSelectedParticipants] = useState(0);
    const [selectedPrice, setSelectedPrice] = useState(0);

    const handleSubmit = useCallback(() => {
        setLoading(true);
        let api = 'https://www.boredapi.com/api/activity';
        if (selectedType !== 'any' || selectedParticipants !== 0 || selectedPrice !== 0) {
            api += `?`
        }
        if (selectedType !== 'any') {
            api += `&type=${selectedType}`;
        }
        if (selectedParticipants !== 0) {
            api += `&participants=${selectedParticipants}`;
        }
        if (selectedPrice !== 0) {
            const priceFactor = prices.find(p => p.id === selectedPrice).factor;
            api += `&minprice=0&maxprice=${priceFactor}`;
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
    }, [selectedType, selectedParticipants, selectedPrice]);

    const handleParticipantsChange = (e) => {
        setSelectedParticipants(Number(e.target.value));
    };

    const handlePriceChange = (e) => {
        setSelectedPrice(Number(e.target.value));
    };

    return (
        <div
            className="flex flex-col w-full lg:w-2/3 lg:flex-row gap-8 md:gap-16 p-8 md:p-16 bg-white border-2 border-black rounded-2xl"
        >
            <div className="flex flex-col lg:min-w-[25rem] lg:w-[25rem]">
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
                    <span className="font-bold">Type:</span>
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
                <div className="flex flex-col gap-4">
                    <span className="font-bold">Participants:</span>
                    <Range
                        id="participants"
                        min={0}
                        max={10}
                        step={1}
                        valueNames={filters.participants}
                        value={selectedParticipants}
                        handleChange={handleParticipantsChange}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <span className="font-bold">Max price:</span>
                    <Range
                        id="price"
                        min={0}
                        max={3}
                        step={1}
                        valueNames={filters.price}
                        value={selectedPrice}
                        handleChange={handlePriceChange}
                    />
                </div>
                <button
                    className="mt-8 submit"
                    onClick={handleSubmit}
                >
                    <span className="relative z-10">
                        Let&#39;s find!
                    </span>
                </button>
            </div>
        </div>
    );
}
