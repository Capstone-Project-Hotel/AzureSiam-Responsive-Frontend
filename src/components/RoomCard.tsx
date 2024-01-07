"use client";
import React, { useState } from "react";
import { Divider, Button } from "antd";
import useStore from "@/hooks/useStore";

export default function RoomCard(information: {
  roomName: string;
  maxGuest: number;
  bedType: string;
  roomSize: number;
  roomPrice: number;
  roomImage: string;
  roomAmenities: string[];
  roomDetail: string;
  roomType: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { bookingDetail, setBookingDetail } = useStore();

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBookNowClick = (roomType: string) => {
  
    // Create the updatedBookingDetail object with the new room number
    const updatedBookingDetail = {
      ...bookingDetail,
      [`${roomType}RoomNumber`]: 1,
    };
// disable
    console.log(updatedBookingDetail)
  
    // Set the updated bookingDetail
    setBookingDetail(updatedBookingDetail);
  };
  return (
    <div
      className={`flex flex-col w-[58vw] rounded-lg outline outline-1 outline-gray-450 
      `}
      style={{ backgroundColor: "#E7EFF6", color: "black" }}
    >
      <p className="text-h4 font-sans font-bold m-[2vw] w-[100vw] mobile:text-h4-mobile">
        {information.roomName}
      </p>
      <div className="flex flex-row ml-[2vw] mb-[2vw]">
        {/* mock image */}
        <img src={information.roomImage} alt="room" className="h-[15vw]" />
        {/* room description */}
        <text className="text-h5 font-sans ml-[2vw] mr-[2vw]  mobile:text-h5-mobile">
          Maximum guest: {information.maxGuest} <br/>
          Size: {information.roomSize} m2 <br/>
          Bed type: {information.bedType} <br/>
          Amenities: {information.roomAmenities.map((n) => ' • ' + n)} <br/>
          {isExpanded && (
            <div className="mt-[1vw]">
              {/* More detailed information */}
              <text className="text-h5 font-sans ml-[2vw] mr-[2vw]  mobile:text-h5-mobile">
                {information.roomDetail}
              </text>
            </div>
          )}
          {/* Toggle button */}
          <button
            onClick={toggleExpansion}
            className="mt-[1vw] float-right"
            style={{ color: "#4B86B4" }}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
          <Divider />
          <text className="text-h5 font-sans mr-[2vw]  mobile:text-h5-mobile">
            Price: {information.roomPrice} THB
          </text>
          <Button
            className="float-right"
  type="primary"
            onClick={() => handleBookNowClick(information.roomType)}
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
