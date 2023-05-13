'use client';

import {useState, useCallback} from 'react';
import Loader from '@/components/Loader';
import Error from '@/components/Error';
import NoData from '@/components/NoData';
import Activity from '@/components/Activity';

export default function Home() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = useCallback(() => {
        setLoading(true);
        let api = 'http://www.boredapi.com/api/activity';
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div
            className="flex flex-col w-full md:flex-row md:w-auto justify-center gap-8 md:gap-16 p-8 md:p-16 bg-white border-2 border-black rounded-2xl"
        >
            <div className="flex flex-col w-full md:w-60 lg:w-80">
                {!data && (
                    <NoData />
                )}
                {isLoading ? (
                    <Loader/>
                ) : data && (
                    <div className="flex flex-col gap-2">
                        {data.error && (
                            <Error text={data.error}/>
                        )}
                        <Activity activity={data} />
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-4">
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
