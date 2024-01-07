"use client";
import React, { useState } from 'react';
import { Divider,Button } from 'antd';


export default function RoomCard( information: {roomName: string, maxGuest: number, bedType: string, roomSize: number, roomPrice: number, roomImage: string, roomAmenities: string[] , roomDetail: string}) {
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBookNowClick = () => {
    console.log('Book Now clicked');
  };

  return (
    <div
      className={`flex flex-col w-[58vw] rounded-lg outline outline-1 outline-gray-450 
      `}
      style={{ backgroundColor: '#E7EFF6', color: 'black' }}
    >
      <p className="text-[20px] font-sans font-bold m-[2vw] w-[100vw]">
        {information.roomName}
      </p>
      <div className="flex flex-row ml-[2vw] mb-[2vw]">
        {/* mock image */}
        <img src={information.roomImage} alt="room" className="h-[15vw]" />
        {/* room description */}
        <text className="text-[16px] font-sans ml-[2vw] mr-[2vw]">
          Maximum guest: {information.maxGuest} <br />
          Size: {information.roomSize} m2 <br />
          Bed type: {information.bedType} <br />
          Amenities: {information.roomAmenities.map((n) => ' • ' + n)} <br />
          {isExpanded && (
            <div className='mt-[1vw]'>
              {/* More detailed information */}
              <text className="text-[16px] font-sans ml-[2vw] mr-[2vw]">
                {information.roomDetail}
              </text>
            </div>
          )}
          {/* Toggle button */}
          <button onClick={toggleExpansion} className='mt-[1vw] float-right' style={{ color: '#4B86B4' }}>
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
          <Divider />
          <text className="text-[16px] font-sans mr-[2vw]">
            Price: {information.roomPrice} THB
          </text>
          <Button
            className='float-right'
            style={{ marginLeft: '3.125vw', backgroundColor: 'white', borderRadius: '8px' }}
            onClick={handleBookNowClick}
          >
            Book Now
          </Button>
          {/* <Button type="primary">
            Primary
          </Button> */}
        </text>
      </div>
    </div>
  );
}