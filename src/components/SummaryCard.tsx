"use client";
import {
  CalendarOutlined,
  UserOutlined,
  PlusCircleFilled,
  MinusCircleFilled,
} from "@ant-design/icons";

import "primeicons/primeicons.css";
import useStore from "@/hooks/useStore";
import { InputNumber, Button } from "antd";
import Link from "next/link";

const RoomNumberInput = ({
  roomType,
  value,
  onChange,
}: {
  roomType: string;
  value: number;
  onChange: Function;
}) => {
  const handleDecrease = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    onChange(value + 1);
  };

  return (
    <div className="flex">
      <MinusCircleFilled
        className="text-[15px] mobile:text-[8px]"
        onClick={handleDecrease}
      />

      <InputNumber
        value={value}
        min={1}
        onChange={(newValue) => {
          const updatedValue = typeof newValue === "number" ? newValue : 1;
          onChange(updatedValue);
        }}
      />

      <PlusCircleFilled
        className="text-[15px] mobile:text-[8px]"
        onClick={handleIncrease}
      />
    </div>
  );
};

export default function SummaryCard({
  page,
  isDisabledConfirm,
}: // startDate,
// endDate,
// adults,
// childrens,
// codePromo,
{
  page: string;
  isDisabledConfirm: boolean;
  // startDate: string;
  // endDate: string;
  // adults: number;
  // childrens: number;
  // codePromo: string;
}) {
  const { bookingDetail, setBookingDetail } = useStore();

  // Calculate the difference in milliseconds
  const startDateFormat = new Date(bookingDetail.startDate);
  const endDateFormat = new Date(bookingDetail.endDate);
  const timeDifference = endDateFormat.getTime() - startDateFormat.getTime();

  // Convert the difference to days
  const dayDuration = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  // calculate price here

  let reducedRate = 1;

  if (bookingDetail.codePromotion === "valid001") {
    reducedRate = 0.8;
  }

  let subTotal =
    (1500 * bookingDetail.standardRoomNumber +
      1800 * bookingDetail.deluxeRoomNumber +
      2200 * bookingDetail.familyRoomNumber +
      2500 * bookingDetail.suiteRoomNumber +
      3000 * bookingDetail.executiveRoomNumber) *
    reducedRate;
  if (bookingDetail.packageOne === true) subTotal += 299 * reducedRate;
  if (bookingDetail.packageTwo === true) subTotal += 499 * reducedRate;

  const serviceCharge = subTotal / 10;
  const taxesAndFees = (subTotal / 100) * 7;

  return (
    <div className="border-solid border-[2px] border-black rounded-md w-[400px] h-auto p-5 bg-background mobile:w-[250px]">
      <div className="border-b-2">
        <div className="flex mt-[10px]">
          <CalendarOutlined style={{ fontSize: "30px", marginRight: "10px" }} />
          <div>
            <p className="text-h5 font-medium mobile:text-h5-mobile">
              {/* Sun, 19 Nov 23 – Tue, 21 Nov 23 */}
              {bookingDetail.startDate} - {bookingDetail.endDate}
            </p>
            <p className="text-body text-slate-400 mobile:text-h5-mobile">
              {/* 2 nights */}
              {dayDuration} night(s)
            </p>
          </div>
        </div>
        <div className="flex">
          <UserOutlined style={{ fontSize: "30px", marginRight: "10px" }} />
          <p className="text-h5 font-medium mobile:text-h5-mobile">
            {bookingDetail.adultNumber} adult(s) {bookingDetail.childrenNumber}{" "}
            children
          </p>
        </div>
      </div>
      {/* <div className="border-b-2"> */}
      {/* edit room */}
      {page === "search-result" ? (
        <div className="border-b-2">
          <p className="text-body text-slate-400 mobile:text-body-mobile">
            Edit room(s)
          </p>

          {bookingDetail.standardRoomNumber !== 0 ? (
            <div>
              <div className="flex justify-between">
                <p className="text-h5 font-bold mobile:text-h5-mobile">
                  Standard Room
                </p>
                <RoomNumberInput
                  roomType="Standard"
                  value={bookingDetail.standardRoomNumber}
                  onChange={(newValue: number) =>
                    setBookingDetail({
                      ...bookingDetail,
                      standardRoomNumber: newValue,
                    })
                  }
                />
              </div>
              <button
                className="flex"
                onClick={() => {
                  const updatedBookingDetail = {
                    ...bookingDetail,
                    standardRoomNumber: 0,
                  };
                  setBookingDetail(updatedBookingDetail);
                }}
              >
                <i className="pi pi-trash text-gray-400 mobile:text-[8px]"></i>
                <p className="text-description text-gray-400 mobile:text-body-mobile">
                  remove
                </p>
              </button>
              <div className="flex justify-between">
                <p className="text-body mobile:text-body-mobile">
                  Standard Room {bookingDetail.standardRoomNumber} room(s)
                </p>
                <p className="text-body text-slate-400 mobile:text-body-mobile">
                  THB{" "}
                  {new Intl.NumberFormat("th-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(
                    bookingDetail.standardRoomNumber * 1500 * reducedRate
                  )}
                </p>
              </div>
            </div>
          ) : null}
          {bookingDetail.deluxeRoomNumber !== 0 ? (
            <div>
              <div className="flex justify-between">
                <p className="text-h5 font-bold mobile:text-h5-mobile">
                  Deluxe Room
                </p>
                <RoomNumberInput
                  roomType="Deluxe"
                  value={bookingDetail.deluxeRoomNumber}
                  onChange={(newValue: number) =>
                    setBookingDetail({
                      ...bookingDetail,
                      deluxeRoomNumber: newValue,
                    })
                  }
                />
              </div>
              <button
                className="flex"
                onClick={() => {
                  const updatedBookingDetail = {
                    ...bookingDetail,
                    deluxeRoomNumber: 0,
                  };
                  setBookingDetail(updatedBookingDetail);
                }}
              >
                <i className="pi pi-trash text-gray-400 mobile:text-[8px]"></i>
                <p className="text-description text-gray-400 mobile:text-body-mobile">
                  remove
                </p>
              </button>
              <div className="flex justify-between">
                <p className="text-body mobile:text-body-mobile">
                  Deluxe Room {bookingDetail.deluxeRoomNumber} room(s)
                </p>
                <p className="text-body text-slate-400 mobile:text-body-mobile">
                  THB{" "}
                  {new Intl.NumberFormat("th-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(
                    bookingDetail.deluxeRoomNumber * 1800 * reducedRate
                  )}
                </p>
              </div>
            </div>
          ) : null}
          {bookingDetail.familyRoomNumber !== 0 ? (
            <div>
              <div className="flex justify-between">
                <p className="text-h5 font-bold">Family Room</p>
                <RoomNumberInput
                  roomType="Family"
                  value={bookingDetail.familyRoomNumber}
                  onChange={(newValue: number) =>
                    setBookingDetail({
                      ...bookingDetail,
                      familyRoomNumber: newValue,
                    })
                  }
                />
              </div>
              <button
                className="flex"
                onClick={() => {
                  const updatedBookingDetail = {
                    ...bookingDetail,
                    familyRoomNumber: 0,
                  };
                  setBookingDetail(updatedBookingDetail);
                }}
              >
                <i className="pi pi-trash text-gray-400"></i>
                <p className="text-gray-400">remove</p>
              </button>
              <div className="flex justify-between">
                <p className="text-body">
                  Family Room {bookingDetail.familyRoomNumber} room(s)
                </p>
                <p className="text-body text-slate-400">
                  THB{" "}
                  {new Intl.NumberFormat("th-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(
                    bookingDetail.familyRoomNumber * 2200 * reducedRate
                  )}
                </p>
              </div>
            </div>
          ) : null}
          {bookingDetail.suiteRoomNumber !== 0 ? (
            <div>
              <div className="flex justify-between">
                <p className="text-h5 font-bold">Suite Room</p>
                <RoomNumberInput
                  roomType="Suite"
                  value={bookingDetail.suiteRoomNumber}
                  onChange={(newValue: number) =>
                    setBookingDetail({
                      ...bookingDetail,
                      suiteRoomNumber: newValue,
                    })
                  }
                />
              </div>
              <button
                className="flex"
                onClick={() => {
                  const updatedBookingDetail = {
                    ...bookingDetail,
                    suiteRoomNumber: 0,
                  };
                  setBookingDetail(updatedBookingDetail);
                }}
              >
                <i className="pi pi-trash text-gray-400"></i>
                <p className="text-gray-400">remove</p>
              </button>
              <div className="flex justify-between">
                <p className="text-body">
                  Suite Room {bookingDetail.suiteRoomNumber} room(s)
                </p>
                <p className="text-body text-slate-400">
                  THB
                  {new Intl.NumberFormat("th-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(bookingDetail.suiteRoomNumber * 2500 * reducedRate)}
                </p>
              </div>
            </div>
          ) : null}
          {bookingDetail.executiveRoomNumber !== 0 ? (
            <div>
              <div className="flex justify-between">
                <p className="text-h5 font-bold">Executive Room</p>
                <RoomNumberInput
                  roomType="Executive"
                  value={bookingDetail.executiveRoomNumber}
                  onChange={(newValue: number) =>
                    setBookingDetail({
                      ...bookingDetail,
                      executiveRoomNumber: newValue,
                    })
                  }
                />
              </div>
              <button
                className="flex"
                onClick={() => {
                  const updatedBookingDetail = {
                    ...bookingDetail,
                    executiveRoomNumber: 0,
                  };
                  setBookingDetail(updatedBookingDetail);
                }}
              >
                <i className="pi pi-trash text-gray-400"></i>
                <p className="text-gray-400">remove</p>
              </button>
              <div className="flex justify-between">
                <p className="text-body">
                  Executive Room {bookingDetail.executiveRoomNumber} room(s)
                </p>
                <p className="text-body text-slate-400">
                  THB{" "}
                  {new Intl.NumberFormat("th-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(
                    bookingDetail.executiveRoomNumber * 3000 * reducedRate
                  )}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      ) : page === "reservation-and-guest-detail" ? (
        <div>
          <div className="border-t-2">
            {bookingDetail.standardRoomNumber !== 0 ? (
              <div className="flex justify-between">
                <p className="text-body mobile:text-body-mobile">
                  Standard Room {bookingDetail.standardRoomNumber} room(s)
                </p>
                <p className="text-body text-slate-400">
                  THB
                  {new Intl.NumberFormat("th-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(
                    bookingDetail.standardRoomNumber * 1500 * reducedRate
                  )}
                </p>
              </div>
            ) : null}
            {bookingDetail.deluxeRoomNumber !== 0 ? (
              <div className="flex justify-between">
                <p className="text-body">
                  Deluxe Room {bookingDetail.deluxeRoomNumber} room(s)
                </p>
                <p className="text-body text-slate-400">
                  THB
                  {new Intl.NumberFormat("th-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(
                    bookingDetail.deluxeRoomNumber * 1800 * reducedRate
                  )}
                </p>
              </div>
            ) : null}
            {bookingDetail.familyRoomNumber !== 0 ? (
              <div className="flex justify-between">
                <p className="text-body">
                  Family Room {bookingDetail.familyRoomNumber} room(s)
                </p>
                <p className="text-body text-slate-400">
                  THB
                  {new Intl.NumberFormat("th-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(
                    bookingDetail.familyRoomNumber * 2200 * reducedRate
                  )}
                </p>
              </div>
            ) : null}
            {bookingDetail.suiteRoomNumber !== 0 ? (
              <div className="flex justify-between">
                <p className="text-body">
                  Suite Room {bookingDetail.suiteRoomNumber} room(s)
                </p>
                <p className="text-body text-slate-400">
                  THB
                  {new Intl.NumberFormat("th-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(bookingDetail.suiteRoomNumber * 2500 * reducedRate)}
                </p>
              </div>
            ) : null}
            {bookingDetail.executiveRoomNumber !== 0 ? (
              <div className="flex justify-between">
                <p className="text-body">
                  Executive Room {bookingDetail.executiveRoomNumber} room(s)
                </p>
                <p className="text-body text-slate-400">
                  THB
                  {new Intl.NumberFormat("th-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(
                    bookingDetail.executiveRoomNumber * 3000 * reducedRate
                  )}
                </p>
              </div>
            ) : null}
          </div>
          <div className="border-t-2">
            <div className="my-2">
              <p className="text-body text-slate-400">
                Edit Additional Service(s)
              </p>
              {bookingDetail.packageOne ? (
                <div>
                  <div className="flex justify-between">
                    <div className="flex">
                      <p className="text-h5">Transportation [ Package 1 ]</p>
                    </div>
                  </div>
                  <button
                    className="flex"
                    onClick={() => {
                      const updatedBookingDetail = {
                        ...bookingDetail,
                        packageOne: false,
                      };
                      setBookingDetail(updatedBookingDetail);
                    }}
                  >
                    <i className="pi pi-trash text-gray-400"></i>
                    <p className="text-gray-400">remove</p>
                  </button>
                  <div className="flex justify-between">
                    <p className="text-body">Transportation [ Package 1 ]</p>
                    <p className="text-body text-slate-400">
                      THB
                      {new Intl.NumberFormat("th-TH", {
                        style: "currency",
                        currency: "THB",
                      }).format(299)}
                    </p>
                  </div>
                </div>
              ) : null}
              {bookingDetail.packageTwo ? (
                <div>
                  <div className="flex justify-between">
                    <div className="flex">
                      <p className="text-h5">Transportation [ Package 2 ]</p>
                      {/* <DeleteForeverIcon/> */}
                    </div>
                  </div>
                  <button
                    className="flex"
                    onClick={() => {
                      const updatedBookingDetail = {
                        ...bookingDetail,
                        packageTwo: false,
                      };
                      setBookingDetail(updatedBookingDetail);
                    }}
                  >
                    <i className="pi pi-trash text-gray-400"></i>
                    <p className="text-gray-400">remove</p>
                  </button>
                  <div className="flex justify-between">
                    <p className="text-body">Transportation [ Package 2 ]</p>
                    <p className="text-body text-slate-400">
                      THB
                      {new Intl.NumberFormat("th-TH", {
                        style: "currency",
                        currency: "THB",
                      }).format(499)}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* <div className="border-t-2"> */}
          <div className="my-1">
            {bookingDetail.standardRoomNumber !== 0 ? (
              <div className="flex justify-between">
                <p className="text-body">
                  Standard Room {bookingDetail.standardRoomNumber} room(s)
                </p>
                <p className="text-body text-slate-400">
                  THB
                  {new Intl.NumberFormat("th-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(
                    bookingDetail.standardRoomNumber * 1500 * reducedRate
                  )}
                </p>
              </div>
            ) : null}
            {bookingDetail.deluxeRoomNumber !== 0 ? (
              <div className="flex justify-between">
                <p className="text-body">
                  Deluxe Room {bookingDetail.deluxeRoomNumber} room(s)
                </p>
                <p className="text-body text-slate-400">
                  THB
                  {new Intl.NumberFormat("th-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(
                    bookingDetail.deluxeRoomNumber * 1800 * reducedRate
                  )}
                </p>
              </div>
            ) : null}
            {bookingDetail.familyRoomNumber !== 0 ? (
              <div className="flex justify-between">
                <p className="text-body">
                  Family Room {bookingDetail.familyRoomNumber} room(s)
                </p>
                <p className="text-body text-slate-400">
                  THB
                  {new Intl.NumberFormat("th-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(
                    bookingDetail.familyRoomNumber * 2200 * reducedRate
                  )}
                </p>
              </div>
            ) : null}
            {bookingDetail.suiteRoomNumber !== 0 ? (
              <div className="flex justify-between">
                <p className="text-body">
                  Suite Room {bookingDetail.suiteRoomNumber} room(s)
                </p>
                <p className="text-body text-slate-400">
                  THB
                  {new Intl.NumberFormat("th-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(bookingDetail.suiteRoomNumber * 2500 * reducedRate)}
                </p>
              </div>
            ) : null}
            {bookingDetail.executiveRoomNumber !== 0 ? (
              <div className="flex justify-between">
                <p className="text-body">
                  Executive Room {bookingDetail.executiveRoomNumber} room(s)
                </p>
                <p className="text-body text-slate-400">
                  THB
                  {new Intl.NumberFormat("th-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(
                    bookingDetail.executiveRoomNumber * 3000 * reducedRate
                  )}
                </p>
              </div>
            ) : null}
          </div>
          <div className="border-t-2 my-1">
            {bookingDetail.packageOne ? (
              <div>
                <div className="flex justify-between">
                  <p className="text-body">Transportation [ Package 1 ]</p>
                  <p className="text-body text-slate-400">
                    THB
                    {new Intl.NumberFormat("th-TH", {
                      style: "currency",
                      currency: "THB",
                    }).format(299)}
                  </p>
                </div>
              </div>
            ) : null}
            {bookingDetail.packageTwo ? (
              <div>
                <div className="flex justify-between">
                  <p className="text-body">Transportation [ Package 2 ]</p>
                  <p className="text-body text-slate-400">
                    THB
                    {new Intl.NumberFormat("th-TH", {
                      style: "currency",
                      currency: "THB",
                    }).format(499)}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
          {/* </div> */}
        </div>
      )}
      <div className="flex justify-between">
        <p className="text-body text-slate-400 mobile:text-body-mobile">
          Sub total
        </p>
        <p className="text-body text-slate-400 mobile:text-body-mobile">
          THB{" "}
          {new Intl.NumberFormat("th-TH", {
            style: "currency",
            currency: "THB",
          }).format(subTotal)}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-body text-slate-400 mobile:text-body-mobile">
          Service charge (10%)
        </p>
        <p className="text-body text-slate-400 mobile:text-body-mobile">
          THB{" "}
          {new Intl.NumberFormat("th-TH", {
            style: "currency",
            currency: "THB",
          }).format(serviceCharge)}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-body text-slate-400 mobile:text-body-mobile">
          Taxes + fees (7%)
        </p>
        <p className="text-body text-slate-400 mobile:text-body-mobile">
          THB{" "}
          {new Intl.NumberFormat("th-TH", {
            style: "currency",
            currency: "THB",
          }).format(taxesAndFees)}
        </p>
      </div>
      <p className="text-center text-h2 font-bold mt-[50px] mobile:text-h2-mobile">
        THB
        {new Intl.NumberFormat("th-TH", {
          style: "currency",
          currency: "THB",
        }).format(subTotal + serviceCharge + taxesAndFees)}{" "}
        Total
      </p>
      <div className="flex justify-center items-center \">
        {page === "search-result" ? (
          <Link href={"/reservation-and-guest-detail"}>
            <Button
              className={` ${
                bookingDetail.standardRoomNumber +
                  bookingDetail.deluxeRoomNumber * 2 +
                  bookingDetail.familyRoomNumber * 4 +
                  bookingDetail.suiteRoomNumber * 2 +
                  bookingDetail.executiveRoomNumber * 4 <
                bookingDetail.adultNumber + bookingDetail.childrenNumber
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              style={{ background: "#2A4D69", color: "white" }}
              disabled={
                bookingDetail.standardRoomNumber +
                  bookingDetail.deluxeRoomNumber * 2 +
                  bookingDetail.familyRoomNumber * 4 +
                  bookingDetail.suiteRoomNumber * 2 +
                  bookingDetail.executiveRoomNumber * 4 <
                bookingDetail.adultNumber + bookingDetail.childrenNumber
              }
            >
              <p>Confirm</p>
            </Button>
          </Link>
        ) : page === "reservation-and-guest-detail" ? (
          <Link href={"/summary-booking-detail"}>
            <Button
              className={` ${
                isDisabledConfirm || !bookingDetail.isCheckedPDPA
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              style={{ background: "#2A4D69", color: "white" }}
              disabled={isDisabledConfirm || !bookingDetail.isCheckedPDPA}
            >
              <p>Confirm</p>
            </Button>
          </Link>
        ) : page === "summary-booking-detail" ? (
          <Link href={"/booking-confirmation"}>
            <Button style={{ background: "#2A4D69", color: "white" }}>
              <p>Check Out</p>
            </Button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
