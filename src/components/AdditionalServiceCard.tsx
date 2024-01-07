"use client";
import React, { useState } from 'react';
import { Button } from 'antd';

export default function AdditionalServiceCard() {
    const [isAdded, setIsAdded] = useState(false);

    const handleBookNowClick = () => {
        setIsAdded(!isAdded);
        if (isAdded) console.log('Removed');
        else console.log('Added');
    };

    return (
        <div className='flex flex-col w-[16vw] h-auto outline outline-1 outline-gray-450'>
            <img src={"https://via.placeholder.com/240x150"} className="w-full" />
            <div className='flex flex-col w-full h-auto p-[1vw]'>
                <p className='text-h5 mobile:text-h5-mobile'>
                    Transportation [ Package ]
                </p>
                <p className='text-description'>
                    {/* Hide on mobile */}
                    <span className="mobile:hidden">1 Meal / Day / Person</span>
                </p>
                <div className='flex flex-row w-full items-center justify-between'>
                    <p className='text-body mobile:text-body-mobile'>
                        THB 200
                    </p>
                    <Button
                        style={{ backgroundColor: 'white', borderRadius: '8px' }}
                        onClick={handleBookNowClick}
                    >
                        {isAdded ? 'Remove' : 'Add'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
