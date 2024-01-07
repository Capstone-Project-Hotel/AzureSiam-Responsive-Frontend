"use client";

import Filter from "@/components/Filter";
import SummaryCard from "@/components/SummaryCard";
import { useParams } from "next/navigation";

import dayjs from "dayjs";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
dayjs().format();

import useStore from "@/hooks/useStore";
import { useEffect, useState } from "react";

const mockRoomInformation = {
  roomName: "Standard Room",
  maxGuest: 2,
  bedType: "King",
  roomSize: 30,
  roomPrice: 2000,
  roomImage: "https://via.placeholder.com/300",
  roomAmenities: [
    "TV",
    "Air Conditioner",
    "Refrigerator",
    "Hair Dryer",
    "Water Heater",
  ],
  roomDetail:
    "Unwind in a room that balances simplicity with functionality. Our Standard Studio Rooms are equipped with all the essentials for a comfortable stay, including a plush bed that promises a restful night's sleep. The sleek furnishings and efficient layout maximize space, providing a relaxing environment for you to recharge after a day of exploration or work.",
};

export default function SearchResultPage() {
  const params = useParams();

  const { bookingDetail, setBookingDetail } = useStore();

  console.log(params.bookingDetail);

  // Destructuring the object into individual variables
  // const { startDate, endDate, adults, childrens, codePromo } = paramsObject;
  const decodedParams = decodeURIComponent(params.bookingDetail as string);

  // Splitting the string into key-value pairs
  const keyValuePairs = decodedParams.split("&");

  // Creating an object with key-value pairs
  const paramsObject: Record<string, string> = {};
  keyValuePairs.forEach((pair) => {
    const [key, value] = pair.split("=");
    paramsObject[key] = value;
  });

  // console.log(paramsObject)

  const { startDate, endDate, adults, childrens, codePromo } = paramsObject;

  useEffect(() => {
    const updatedBookingDetail: BookingDetail = {
        startDate: startDate,
        endDate: endDate,
        adultNumber: parseInt(adults),
        childrenNumber: parseInt(childrens),
        codePromotion: codePromo,
        standardRoomNumber: 0,
        deluxeRoomNumber: 0,
        familyRoomNumber: 0,
        executiveRoomNumber: 0,
        juniorRoomNumber: 0,
        packageOne: false,
        packageTwo: false,
    };
    setBookingDetail(updatedBookingDetail);

    // If you have any cleanup logic, you can include it in a return statement
    // This will be executed when the component unmounts or when the dependency array changes.
    return () => {
      // Cleanup logic, if needed
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  console.log(dayjs(bookingDetail.startDate, "YYYY-MM-DD"));
  console.log(bookingDetail.adultNumber);

  // console.log(adults)

  return (
    <div>
      <div className="z-50 fixed top-0">
        <Topbar />
      </div>
      <div className="mt-[10vh]">
        <Filter
          startDate={startDate}
          endDate={endDate}
          adults={parseInt(adults)}
          childrens={parseInt(childrens)}
          codePromo={codePromo}
        />
      </div>
      <p>{bookingDetail.standardRoomNumber}</p>
      <div className="w-[509px] mobile:w-[330px] fixed mobile:right-0 right-[200px] top-[400px]">
        <SummaryCard
          page="search-result"
          startDate={startDate}
          endDate={endDate}
          adults={parseInt(adults)}
          childrens={parseInt(childrens)}
          codePromo={codePromo}
        />
      </div>

      <div className="flex flex-col space-y-10 mt-10 ml-10">
        <RoomCard
          roomName={mockRoomInformation.roomName}
          maxGuest={mockRoomInformation.maxGuest}
          bedType={mockRoomInformation.bedType}
          roomSize={mockRoomInformation.roomSize}
          roomPrice={mockRoomInformation.roomPrice}
          roomImage={mockRoomInformation.roomImage}
          roomAmenities={mockRoomInformation.roomAmenities}
          roomDetail={mockRoomInformation.roomDetail}
          roomType={"standard"}
        />
        <RoomCard
          roomName={mockRoomInformation.roomName}
          maxGuest={mockRoomInformation.maxGuest}
          bedType={mockRoomInformation.bedType}
          roomSize={mockRoomInformation.roomSize}
          roomPrice={mockRoomInformation.roomPrice}
          roomImage={mockRoomInformation.roomImage}
          roomAmenities={mockRoomInformation.roomAmenities}
          roomDetail={mockRoomInformation.roomDetail}
          roomType={"standard"}
        />
        <RoomCard
          roomName={mockRoomInformation.roomName}
          maxGuest={mockRoomInformation.maxGuest}
          bedType={mockRoomInformation.bedType}
          roomSize={mockRoomInformation.roomSize}
          roomPrice={mockRoomInformation.roomPrice}
          roomImage={mockRoomInformation.roomImage}
          roomAmenities={mockRoomInformation.roomAmenities}
          roomDetail={mockRoomInformation.roomDetail}
          roomType={"standard"}
        />
        <RoomCard
          roomName={mockRoomInformation.roomName}
          maxGuest={mockRoomInformation.maxGuest}
          bedType={mockRoomInformation.bedType}
          roomSize={mockRoomInformation.roomSize}
          roomPrice={mockRoomInformation.roomPrice}
          roomImage={mockRoomInformation.roomImage}
          roomAmenities={mockRoomInformation.roomAmenities}
          roomDetail={mockRoomInformation.roomDetail}
          roomType={"standard"}
        />
        <RoomCard
          roomName={mockRoomInformation.roomName}
          maxGuest={mockRoomInformation.maxGuest}
          bedType={mockRoomInformation.bedType}
          roomSize={mockRoomInformation.roomSize}
          roomPrice={mockRoomInformation.roomPrice}
          roomImage={mockRoomInformation.roomImage}
          roomAmenities={mockRoomInformation.roomAmenities}
          roomDetail={mockRoomInformation.roomDetail}
          roomType={"standard"}
        />
      </div>

      <div className="mt-[600px]">
        <Footer />
      </div>
    </div>
  );
}
