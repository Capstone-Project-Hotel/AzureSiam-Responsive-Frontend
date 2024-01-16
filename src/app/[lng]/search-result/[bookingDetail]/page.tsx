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
    bedType: t("single_bed"),
    roomSize: 16,
    roomPrice: 1200,
    roomImage: "https://via.placeholder.com/300",
    roomAmenities: [
      t("television"),
      t("air_conditioner"),
      t("mini_fridge"),
      t("hairdryer"),
      t("wireless_internet"),
      t("desk"),
      t("cable"),
      t("non_smoking"),
    ],
    roomDetail:
      t("standard_room_desc"),
    roomType: "standard",
    show: showStandard,
  };

  const mockDeluxeRoomInformation = {
    roomName: t("dlx_title"),
    maxGuest: 2,
    bedType:  t("twin_bed"),
    roomSize: 20,
    roomPrice: 1800,
    roomImage: "https://via.placeholder.com/300",
    roomAmenities: [
      t("television"),
      t("air_conditioner"),
      t("mini_fridge"),
      t("hairdryer"),
      t("wireless_internet"),
      t("desk"),
      t("cable"),
      t("balcony"),
      t("non_smoking"),
    ],
    roomDetail:
      t("deluxe_room_desc"),
    roomType: "deluxe",
    show: showDeluxe,
  };

  const mockFamilyRoomInformation = {
    roomName: t("fml_title"),
    maxGuest: 4,
    bedType: t("double_bed"),
    roomSize: 28,
    roomPrice: 2200,
    roomImage: "https://via.placeholder.com/300",
    roomAmenities: [
      t("television"),
      t("air_conditioner"),
      t("compact_fridge"),
      t("hairdryer"),
      t("wireless_internet"),
      t("desk"),
      t("cable"),
      t("balcony"),
      t("non_smoking"),
    ],
    roomDetail:
      t("family_room_desc"),
    roomType: "family",
    show: showFamily,
  };

  const mockSuiteRoomInformation = {
    roomName: t("s_title"),
    maxGuest: 2,
    bedType: t("queen_bed"),
    roomSize: 30,
    roomPrice: 2500,
    roomImage: "https://via.placeholder.com/300",
    roomAmenities: [
      t("television"),
      t("air_conditioner"),
      t("mini_fridge"),
      t("hairdryer"),
      t("wireless_internet"),
      t("non_smoking"),
      t("desk"),
      t("jacuzzi"),
      t("cable"),
      t("balcony"),
      t("parlor"),
      t("dinner"),
    ],
    roomDetail:
      t("suite_room_desc"),
    roomType: "suite",
    show: showSuite,
  };

  const mockExecutiveRoomInformation = {
    roomName: t("ex_title"),
    maxGuest: 4,
    bedType: t("king_bed"),
    roomSize: 40,
    roomPrice: 3000,
    roomImage: "https://via.placeholder.com/300",
    roomAmenities: [
      t("television"),
      t("air_conditioner"),
      t("mini_fridge"),
      t("hairdryer"),
      t("wireless_internet"),
      t("non_smoking"),
      t("desk"),
      t("jacuzzi"),
      t("cable"),
      t("balcony"),
      t("parlor"),
      t("dinner"),
    ],
    roomDetail:
      t("executive_room_desc"),
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
