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
  // const [showStandard, setShowStandard] = useState(true);
  // const [showDeluxe, setShowDeluxe] = useState(true);
  // const [showFamily, setShowFamily] = useState(true);
  // const [showSuite, setShowSuite] = useState(true);
  // const [showExecutive, setShowExecutive] = useState(true);
  // const [showOnlyBalcony, setShowOnlyBalcony] = useState(false);
  // const [showOnlyDinnerPlan, setShowOnlyDinnerPlan] = useState(false);
  // const [showOnlyJacuzzi, setShowOnlyJacuzzi] = useState(false);
  const { bookingDetail, setBookingDetail } = useStore();
  const mockStandardRoomInformation = {
    roomName: t("std_title"),
    maxGuest: 1,
    bedType: t("single_bed"),
    roomSize: 16,
    roomPrice: 1200,
    roomImage:
      "https://cdn.discordapp.com/attachments/457166097230069773/1186386766119305258/cover.jpg?ex=65930fc7&is=65809ac7&hm=81597f4a64012d760e9c97c217db3cae2617d4f37183b609a89429cc3562fd42&",
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
    roomDetail: t("standard_room_desc"),
    roomType: "standard",
    show:
      bookingDetail.showStandard &&
      !bookingDetail.showOnlyBalcony &&
      !bookingDetail.showOnlyDinnerPlan &&
      !bookingDetail.showOnlyJacuzzi,
  };

  const mockDeluxeRoomInformation = {
    roomName: t("dlx_title"),
    maxGuest: 2,
    bedType: t("twin_bed"),
    roomSize: 20,
    roomPrice: 1800,
    roomImage:
      "https://cdn.discordapp.com/attachments/457166097230069773/1186387436901781634/cover_1.jpg?ex=65931066&is=65809b66&hm=f75c101fa0d7768bac471cc46a3c94a94b5a1737567af3c91951c95abfc4ec9b&",
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
    roomDetail: t("deluxe_room_desc"),
    roomType: "deluxe",
    show:
      bookingDetail.showDeluxe &&
      !bookingDetail.showOnlyDinnerPlan &&
      !bookingDetail.showOnlyJacuzzi,
  };

  const mockFamilyRoomInformation = {
    roomName: t("fml_title"),
    maxGuest: 4,
    bedType: t("double_bed"),
    roomSize: 28,
    roomPrice: 2200,
    roomImage:
      "https://cdn.discordapp.com/attachments/457166097230069773/1186387586516791326/cover_2.jpg?ex=6593108a&is=65809b8a&hm=44468b0913ab9e438ce166d2c49366e3833e42e84669ffff7b38eb770aac7c1c&",
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
    roomDetail: t("family_room_desc"),
    roomType: "family",
    show:
      bookingDetail.showFamily &&
      !bookingDetail.showOnlyDinnerPlan &&
      !bookingDetail.showOnlyJacuzzi,
  };

  const mockSuiteRoomInformation = {
    roomName: t("s_title"),
    maxGuest: 2,
    bedType: t("queen_bed"),
    roomSize: 30,
    roomPrice: 2500,
    roomImage:
      "https://cdn.discordapp.com/attachments/457166097230069773/1188826464708218920/image_41.jpg?ex=659befec&is=65897aec&hm=5a3d092015cc24fcd079f85b33341c508f33152ec6ea2e2c7b2c5796e4839e6a&",
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
    roomDetail: t("suite_room_desc"),
    roomType: "suite",
    show: bookingDetail.showSuite,
  };

  const mockExecutiveRoomInformation = {
    roomName: t("ex_title"),
    maxGuest: 4,
    bedType: t("king_bed"),
    roomSize: 40,
    roomPrice: 3000,
    roomImage:
      "https://cdn.discordapp.com/attachments/457166097230069773/1188826023228354650/image_40_1_1.jpg?ex=659bef83&is=65897a83&hm=6582bd0a8cc86db4a4146b452e6d4b139146174c8c42818f174afa5fbd7e6bc0&",
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
    roomDetail: t("executive_room_desc"),
    roomType: "executive",
    show: bookingDetail.showExecutive,
  };

  const mockRoomInformation = [
    mockStandardRoomInformation,
    mockDeluxeRoomInformation,
    mockFamilyRoomInformation,
    mockSuiteRoomInformation,
    mockExecutiveRoomInformation,
  ];
  const params = useParams();

  const decodedParams = decodeURIComponent(params.bookingDetail as string);

  // Splitting the string into key-value pairs
  const keyValuePairs = decodedParams.split("&");

  // Creating an object with key-value pairs
  const paramsObject: Record<string, string> = {};
  keyValuePairs.forEach((pair) => {
    const [key, value] = pair.split("=");
    paramsObject[key] = value;
  });

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
          // showStandard
          // showDeluxe
          // showFamily
          // showSuite
          // showExecutive
          // showOnlyBalcony
          // showOnlyDinnerPlan
          // showOnlyJacuzzi
          // setShowStandard={setShowStandard}
          // setShowDeluxe={setShowDeluxe}
          // setShowFamily={setShowFamily}
          // setShowSuite={setShowSuite}
          // setShowExectutive={setShowExecutive}
          // setShowOnlyBalcony={setShowOnlyBalcony}
          // setShowOnlyDinnerPlan={setShowOnlyDinnerPlan}
          // setShowOnlyJacuzzi={setShowOnlyJacuzzi}
        />
      </div>

      <div className="flex items-start">
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
        <div className="sticky mobile:static ml-10 mt-10 mobile:ml-[70px] mobile:mt-10">
          <SummaryCard page="search-result" isDisabledConfirm={false} t={t} />
        </div>
      </div>

      <div className="mt-[200px] mobile:mt-[50px]">
        <Footer t={t} />
      </div>
    </div>
  );
}
