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
import { useTranslation } from "@/app/i18n/client";

export default function SearchResultPage({
  params: { lng },
}: {
  params: { lng: any };
}) {
  const { t } = useTranslation(lng);
  const [showStandard, setShowStandard] = useState(true);
  const [showDeluxe, setShowDeluxe] = useState(true);
  const [showFamily, setShowFamily] = useState(true);
  const [showSuite, setShowSuite] = useState(true);
  const [showExecutive, setShowExecutive] = useState(true);
  const mockStandardRoomInformation = {
    roomName: t("std_title"),
    maxGuest: 1,
    bedType: "Single Bed",
    roomSize: 12,
    roomPrice: 1200,
    roomImage: "https://via.placeholder.com/300",
    roomAmenities: [
      "TV",
      "Air Conditioner",
      "Refrigerator",
      "Hair Dryer",
      "Water Heater",
    ],
    roomDetail:
      "The room is designed to meet fundamental criteria for comfort, functionality, and aesthetics. This room is equipped with essential amenities necessary for a comfortable stay or specific purposes, ensuring a standardized level of quality. It may feature standard furniture, basic technology, and necessary facilities, making it suitable for a wide range of users or purposes. Whether it's a hotel room, office space, or residential area",
    roomType: "standard",
    show: showStandard,
  };

  const mockDeluxeRoomInformation = {
    roomName: t("dlx_title"),
    maxGuest: 2,
    bedType: "Double Bed",
    roomSize: 30,
    roomPrice: 1800,
    roomImage: "https://via.placeholder.com/300",
    roomAmenities: [
      "TV",
      "Air Conditioner",
      "Refrigerator",
      "Hair Dryer",
      "Water Heater",
      "Private Bathroom with Bathtub",
      "Balcony",
    ],
    roomDetail:
      "An upgraded version of the standard room, the deluxe room offers more space and often features enhanced furnishings, better views, and additional amenities such as a balcony or a seating area. It provides a touch of luxury for guests looking for a bit more comfort.",
    roomType: "deluxe",
    show: showDeluxe,
  };

  const mockFamilyRoomInformation = {
    roomName: t("fml_title"),
    maxGuest: 4,
    bedType: "Double Bed",
    roomSize: 30,
    roomPrice: 2200,
    roomImage: "https://via.placeholder.com/300",
    roomAmenities: [
      "TV",
      "Air Conditioner",
      "Refrigerator",
      "Hair Dryer",
      "Water Heater",
      "Balcony",
    ],
    roomDetail:
      "Specifically designed for families, these rooms often feature extra sleeping space such as bunk beds or a pull-out sofa. Family rooms provide the convenience of staying together in one room while ensuring everyone has a comfortable place to sleep.",
    roomType: "family",
    show: showFamily,
  };

  const mockSuiteRoomInformation = {
    roomName: t("s_title"),
    maxGuest: 2,
    bedType: "Double Bed",
    roomSize: 30,
    roomPrice: 2500,
    roomImage: "https://via.placeholder.com/300",
    roomAmenities: [
      "TV",
      "Air Conditioner",
      "Refrigerator",
      "Hair Dryer",
      "Water Heater",
      "Balcony",
      "Jacuzzi",
      "Dinner Plan",
    ],
    roomDetail:
      "well-appointed and often more spacious accommodation options than standard rooms, designed to offer an enhanced level of comfort for guests seeking a little more space and luxury. It's a popular choice for both business and leisure travelers looking for a comfortable retreat with some additional amenities.",
    roomType: "suite",
    show: showSuite,
  };

  const mockExecutiveRoomInformation = {
    roomName: t("ex_title"),
    maxGuest: 4,
    bedType: "King Size Bed",
    roomSize: 30,
    roomPrice: 3000,
    roomImage: "https://via.placeholder.com/300",
    roomAmenities: [
      "TV",
      "Air Conditioner",
      "Refrigerator",
      "Hair Dryer",
      "Water Heater",
      "Balcony",
      "Parlor",
      "Dinner Plan",
    ],
    roomDetail:
      "luxurious and spacious accommodation options designed to cater to the needs of business travelers, VIPs, or guests seeking an elevated level of comfort and amenities. Typically located on higher floors for enhanced privacy and better views, the Executive Suite offers a sophisticated and upscale environment.",
    roomType: "executive",
    show: showExecutive,
  };

  const mockRoomInformation = [
    mockStandardRoomInformation,
    mockDeluxeRoomInformation,
    mockFamilyRoomInformation,
    mockSuiteRoomInformation,
    mockExecutiveRoomInformation,
  ];
  const params = useParams();

  const { bookingDetail, setBookingDetail } = useStore();

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
    useStore.persist.rehydrate();
  }, []);
  useEffect(() => {
    const updatedBookingDetail: BookingDetail = {
      ...bookingDetail,
      startDate: startDate,
      endDate: endDate,
      adultNumber: parseInt(adults),
      childrenNumber: parseInt(childrens),
      codePromotion: codePromo,
    };
    setBookingDetail(updatedBookingDetail);
    return () => {};
  }, []);

  let reducedRate = 1;

  if (codePromo === "valid001") {
    reducedRate = 0.8;
  }

  return (
    <div>
      <div className="z-50 w-[100vw] fixed top-0">
        <Topbar lng={lng} />
      </div>
      <div className="mt-[10vh] mobile:mt-[50px]">
        <Filter
          t={t}
          showStandard
          showDeluxe
          showFamily
          showSuite
          showExecutive
          setShowStandard={setShowStandard}
        />
      </div>

      <div className="absolute mobile:static right-[30px] top-[375px] mobile:ml-[70px] mobile:mt-10">
        <SummaryCard page="search-result" isDisabledConfirm={false} t={t} />
      </div>

      <div className="flex flex-col space-y-10 mt-10 ml-10 mobile:ml-[80px]">
        {mockRoomInformation.map((room, index) =>
          room.show === true ? (
            <RoomCard
              key={index}
              roomName={room.roomName}
              maxGuest={room.maxGuest}
              bedType={room.bedType}
              roomSize={room.roomSize}
              roomPrice={room.roomPrice * reducedRate}
              roomImage={room.roomImage}
              roomAmenities={room.roomAmenities}
              roomDetail={room.roomDetail}
              roomType={room.roomType}
              t={t}
            />
          ) : null
        )}
      </div>

      <div className="mt-[200px] mobile:mt-[50px]">
        <Footer t={t} />
      </div>
    </div>
  );
}
