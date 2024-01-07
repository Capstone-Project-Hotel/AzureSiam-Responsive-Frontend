"use client";
import React, { useState } from 'react';
import { Button } from 'antd';

export default function AdditionalServiceCard( information: {serviceName: string, unit: string, price: number, serviceImage: string}) {
    const [isAdded, setIsAdded] = useState(false);

    const handleBookNowClick = () => {
        setIsAdded(!isAdded);
        if (isAdded) console.log('Removed');
        else console.log('Added');
    };

    return (
        <div className='flex flex-col w-[16vw] h-auto outline outline-1 outline-gray-450'>
            <img src={information.serviceImage} className="w-full" />
            <div className='flex flex-col w-full h-auto p-[1vw]'>
                <p className='text-h5 mobile:text-h5-mobile'>
                    {information.serviceName}
                    {/* Transportation [ Package ] */}
                </p>
                <p className='text-description'>
                    <span className="mobile:hidden"> {information.unit} </span>
                    {/* <span className="mobile:hidden">1 Meal / Day / Person</span> */}
                </p>
                <div className='flex flex-row w-full items-center justify-between'>
                    <p className='text-body mobile:text-body-mobile'>
                        THB {information.price}
                        {/* THB 200 */}
                    </p>
                    <Button
                        type="primary"
                        size='small'
                        onClick={handleBookNowClick}
                    >
                        {isAdded ? 'Remove' : 'Add'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
