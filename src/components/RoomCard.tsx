"use client";
import React, { useState } from "react";
import { Divider, Button } from "antd";
import useStore from "@/hooks/useStore";

export default function RoomCard({
  roomName,
  maxGuest,
  bedType,
  roomSize,
  roomPrice,
  roomImage,
  roomAmenities,
  roomDetail,
  roomType,
  t,
}: {
  roomName: string;
  maxGuest: number;
  bedType: string;
  roomSize: number;
  roomPrice: number;
  roomImage: string;
  roomAmenities: string[];
  roomDetail: string;
  roomType: string;
  t: any;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { bookingDetail, setBookingDetail, exchangeRate, currency } =
    useStore();

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
    // console.log(updatedBookingDetail);

    // Set the updated bookingDetail
    setBookingDetail(updatedBookingDetail);
  };

  return (
    <div
      className={`flex flex-col w-[58vw] rounded-lg outline outline-1 outline-gray-450 
      `}
      style={{ backgroundColor: "#E7EFF6", color: "black" }}
    >
      <p className="text-h4 font-bold m-[2vw] w-[100vw] mobile:text-h4-mobile">
        {roomName}
      </p>
      <div className="flex flex-row ml-[2vw] mb-[2vw]">
        {/* mock image */}
        <img src={roomImage} alt="room" className="h-[15vw]" />
        {/* room description */}
        <text className="text-h5 ml-[2vw] mr-[2vw]  mobile:text-h5-mobile">
          {t("maximum_guest")}: {maxGuest} <br />
          {t("size")}: {roomSize} m2 <br />
          {t("bed_type")}: {bedType} <br />
          {t("amenities")}: {roomAmenities.map((n) => " • " + n)} <br />
          {isExpanded && (
            <div className="mt-[1vw]">
              {/* More detailed information */}
              <text className="text-h5 ml-[2vw] mr-[2vw]  mobile:text-h5-mobile">
                {roomDetail}
              </text>
            </div>
          )}
          {/* Toggle button */}
          <button
            onClick={toggleExpansion}
            className="mt-[1vw] float-right"
            style={{ color: "#4B86B4" }}
          >
            {isExpanded ? t("show_less") : t("show_more")}
          </button>
          <Divider />
          <div className="float-right">
            <text className="text-h5 mr-[2vw] font-bold mobile:text-h5-mobile">
              {currency}{" "}
              {new Intl.NumberFormat("th-TH", {
                style: "decimal",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(roomPrice * exchangeRate)}
            </text>
            <Button type="primary" onClick={() => handleBookNowClick(roomType)}>
              {t("book_now")}
            </Button>
          </div>
        </text>
      </div>
    </div>
  );
}
