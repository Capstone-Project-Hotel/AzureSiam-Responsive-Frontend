"use client";
import {
  CalendarOutlined,
  UserOutlined,
  PlusCircleFilled,
  MinusCircleFilled,
} from "@ant-design/icons";

import "primeicons/primeicons.css";
import useStore from "@/hooks/useStore";

// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { InputNumber, Button } from "antd";
import Link from "next/link";

export default function SummaryCard({
  page,
}: // startDate,
// endDate,
// adults,
// childrens,
// codePromo,
{
  page: string;
  // startDate: string;
  // endDate: string;
  // adults: number;
  // childrens: number;
  // codePromo: string;
}) {
  // const [ standardRoomNumber , setStandardRoomNumber ] = useState(0)
  // const [ deluxeRoomNumber, setDeluxeRoomNumber ] = useState(0)
  // const [ familyRoomNumber, setFamilyRoomNumber ] = useState(0)
  // const [ executiveRoomNumber, setExecutiveRoomNumber ] = useState(0)
  // const [ juniorRoomNumber, setJuniorRoomNumber ] = useState(0)
  const { bookingDetail, setBookingDetail } = useStore();

  // Calculate the difference in milliseconds
  const startDateFormat = new Date("2024-01-11");
  const endDateFormat = new Date("2024-01-13");
  const timeDifference = endDateFormat.getTime() - startDateFormat.getTime();

  // Convert the difference to days
  const dayDuration = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  // calculate price here

  let reducedRate = 1;

  if (bookingDetail.codePromotion === "valid001") {
    reducedRate = 0.8;
  }

  const subTotal = 2000 * bookingDetail.standardRoomNumber * reducedRate;
  const serviceCharge = (subTotal / 10) * reducedRate;
  const taxesAndFees = (subTotal / 100) * 7 * reducedRate;

  return (
    <div className="border-solid border-[2px] border-gray-200 rounded-md w-[400px] h-[450px] p-5 bg-background">
      <div className="border-b-2">
        <div className="flex mt-[10px]">
          <CalendarOutlined style={{ fontSize: "30px", marginRight: "10px" }} />
          <div>
            <p className="text-h5 font-medium">
              {/* Sun, 19 Nov 23 – Tue, 21 Nov 23 */}
              {bookingDetail.startDate} - {bookingDetail.endDate}
            </p>
            <p className="text-body text-slate-400">
              {/* 2 nights */}
              {dayDuration} night(s)
            </p>
          </div>
        </div>
        <div className="flex">
          <UserOutlined style={{ fontSize: "30px", marginRight: "10px" }} />
          <p className="text-h5 font-medium">
            {bookingDetail.adultNumber} adult(s) {bookingDetail.childrenNumber}{" "}
            children
          </p>
        </div>
      </div>
      <div className="border-b-2">
        {/* edit room */}
        {page === "search-result" ? (
          <div className="">
            <p className="text-body text-slate-400">Edit room(s)</p>

            {bookingDetail.standardRoomNumber !== 0 ? (
              <div>
                <div className="flex justify-between">
                  <p className="text-h5 font-bold">Standard Room</p>
                  <div>
                    <MinusCircleFilled
                      onClick={() => {
                        let updatedStandardRoomNumber =
                          bookingDetail.standardRoomNumber;
                        if (bookingDetail.standardRoomNumber > 1) {
                          updatedStandardRoomNumber -= 1;
                        }
                        const updatedBookingDetail = {
                          ...bookingDetail,
                          standardRoomNumber: updatedStandardRoomNumber,
                        };
                        setBookingDetail(updatedBookingDetail);
                      }}
                    />
                    <InputNumber value={bookingDetail.standardRoomNumber} />
                    <PlusCircleFilled
                      onClick={() => {
                        const updatedStandardRoomNumber =
                          bookingDetail.standardRoomNumber + 1;
                        const updatedBookingDetail = {
                          ...bookingDetail,
                          standardRoomNumber: updatedStandardRoomNumber,
                        };
                        setBookingDetail(updatedBookingDetail);
                      }}
                    />
                  </div>
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
                  <i className="pi pi-trash text-gray-400"></i>
                  <p className="text-gray-400">remove</p>
                </button>
                <div className="flex justify-between">
                  <p className="text-body">
                    Standard Room {bookingDetail.standardRoomNumber} room(s)
                  </p>
                  <p className="text-body text-slate-400">
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
          </div>
        ) : null}
        {/* edit additional service() */}
        {page === "reservation-and-guest-detail" ? (
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
                      {/* <DeleteForeverIcon/> */}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-body">Transportation [ Package 1 ]</p>
                    <p className="text-body text-slate-400">THB 299.00</p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex justify-between">
        <p className="text-body text-slate-400">Sub total</p>
        <p className="text-body text-slate-400">
          THB{" "}
          {new Intl.NumberFormat("th-TH", {
            style: "currency",
            currency: "THB",
          }).format(subTotal)}
        </p>
      </div>

      <div className="flex justify-between">
        <p className="text-body text-slate-400">Service charge (10%)</p>
        <p className="text-body text-slate-400">
          THB{" "}
          {new Intl.NumberFormat("th-TH", {
            style: "currency",
            currency: "THB",
          }).format(serviceCharge)}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-body text-slate-400">Taxes + fees (7%) </p>
        <p className="text-body text-slate-400">
          THB{" "}
          {new Intl.NumberFormat("th-TH", {
            style: "currency",
            currency: "THB",
          }).format(taxesAndFees)}
        </p>
      </div>
      <p className="text-center text-h2 font-bold mt-[50px]">
        THB{" "}
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
                bookingDetail.standardRoomNumber < bookingDetail.adultNumber
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              style={{ background: "#2A4D69", color: "white" }}
              disabled={
                bookingDetail.standardRoomNumber < bookingDetail.adultNumber
              }
            >
              <p>Confirm</p>
            </Button>
          </Link>
        ) : page === "reservation-and-guest-detail" ? (
          <Link href={"/summary-booking-detail"}>
            <Button
              className={` ${
                !bookingDetail.packageOne ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{ background: "#2A4D69", color: "white" }}
              disabled={
                bookingDetail.standardRoomNumber < bookingDetail.adultNumber
              }
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
