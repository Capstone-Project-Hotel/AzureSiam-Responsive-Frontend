"use client";
import useStore from "@/hooks/useStore";
import { Checkbox, Select, DatePicker, InputNumber, Input } from "antd";

type RangeValue = Parameters<
  NonNullable<React.ComponentProps<typeof DatePicker.RangePicker>["onChange"]>
>[0];
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { format } from "date-fns";
import dayjs, { Dayjs } from "dayjs";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
dayjs().format();

export default function Filter({}: // startDate,
// endDate,
// adults,
// childrens,
// codePromo,
{
  // startDate: string;
  // endDate: string;
  // adults: number;
  // childrens: number;
  // codePromo: string;
}) {
  const { RangePicker } = DatePicker;
  const CheckboxGroup = Checkbox.Group;

  const roomTypeOptions = [
    { label: "Standard", value: "standard" },
    { label: "Deluxe", value: "deluxe" },
    { label: "Family", value: "family" },
    { label: "Executive", value: "executive" },
    { label: "Junior", value: "junior" },
  ];

  const roomFeatureOptions = [
    { label: "City View", value: "city-view" },
    { label: "Adaptable Bathroom", value: "adaptable-bathroom" },
    { label: "Luggage Storage", value: "luggage-storage" },
    { label: "Jacuzzi", value: "jacuzzi" },
    { label: "Balcony", value: "balcony" },
  ];

  const { bookingDetail, setBookingDetail } = useStore();
  const [changedBooking, setChangedBooking] = useState(false);

  return (
    <div className="w-full flex-row bg-secondary pt-3 pb-3">
      <div className="my-[20px] ml-10">
        <p className="text-white text-h3  font-bold">Booking Detail</p>
        <div className="flex justify-around">
          <RangePicker
            value={[
              dayjs(bookingDetail.startDate, "YYYY-MM-DD"),
              dayjs(bookingDetail.endDate, "YYYY-MM-DD"),
            ]}
            style={{ zIndex: 0 }}
            // onChange={(values: RangeValue<Dayjs>, formatString: [string, string]) => {
            //   if (values && values[0] && values[1]) {
            //       const [startDate, endDate] = values.map((date: Dayjs) =>
            //           date.format("YYYY-MM-DD")
            //       );

            //       const updatedBookingDetail = {
            //           ...bookingDetail,
            //           startDate,
            //           endDate,
            //       };

            //       setBookingDetail(updatedBookingDetail);
            //   }
            // }}
            onChange={(RangePicker, dateStrings: [string, string]) => {
              const [startDate, endDate] = dateStrings;

              if (startDate === "" && endDate === "") {
                console.log("clear value");
              } else {
                const updatedBookingDetail = {
                  ...bookingDetail,
                  startDate,
                  endDate,
                };
                setBookingDetail(updatedBookingDetail);
              }
            }}
          />
          <div className="flex">
            <p className="ml-2 mr-2 text-white text-h4 font-bold">Adult</p>
            <InputNumber
              value={bookingDetail.adultNumber}
              onChange={(e: number | null) => {
                if (e != null) {
                  const updatedAdultNumber = e; // Access the value correctly

                  const updatedBookingDetail = {
                    ...bookingDetail,
                    adultNumber: updatedAdultNumber,
                  };

                  // console.log(updatedAdultNumber);

                  setBookingDetail(updatedBookingDetail);
                }
              }}
            />
          </div>
          <div className="flex">
            <p className="ml-2 mr-2 text-white text-h4 font-bold">Childern</p>
            <InputNumber
              value={bookingDetail.childrenNumber}
              onChange={(e: number | null) => {
                if (e != null) {
                  const updatedChidrenNumber = e; // Access the value correctly

                  const updatedBookingDetail = {
                    ...bookingDetail,
                    childrenNumber: updatedChidrenNumber,
                  };

                  setBookingDetail(updatedBookingDetail);

                  // console.log(bookingDetail.adultNumber);
                }
              }}
            />
          </div>
          <div className="flex">
            <p className="ml-2 mr-2 text-white text-h4 font-bold">
              Code Promotion
            </p>
            <Input
              placeholder="example"
              style={{ width: 200 }}
              value={bookingDetail.codePromotion}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const updatedCodePromotion = e.target.value; // Access the value correctly

                const updatedBookingDetail = {
                  ...bookingDetail,
                  codePromotion: updatedCodePromotion,
                };

                setBookingDetail(updatedBookingDetail);
              }}
            />
            {bookingDetail.codePromotion === "valid001" ? (
              <div className="flex">
                <i className="pi pi-check text-green-500 text-2xl"></i>
                <p>Discount 20%</p>
              </div>
            ) : null}
          </div>
          <Link
            href={`/search-result/startDate=${bookingDetail.startDate}&endDate=${bookingDetail.endDate}&adults=${bookingDetail.adultNumber}&childrens=${bookingDetail.childrenNumber}&codePromo=${bookingDetail.codePromotion}`}
          >
            <button>Change Booking Detail</button>
          </Link>
        </div>
      </div>
      <div className="flex justify-between ml-10 mr-10 my-2">
        <div>
          <p className="text-white text-h3 font-bold">Room Type</p>
          <div className="grid grid-cols-3 gap-2">
            <Checkbox>
              <p className="text-white text-h5">Standard</p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5">Deluxe</p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5">Family</p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5">Executive</p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5">Junior</p>
            </Checkbox>
          </div>
        </div>
        <div>
          <p className="text-white text-h3  font-bold">Room Feature</p>
          <div className="grid grid-cols-3 gap-2">
            <Checkbox>
              <p className="text-white text-h5">City View</p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5">Jacuzzi</p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5">Balcony</p>
            </Checkbox>
          </div>
        </div>

        <div>
          <p className="text-white text-h3  font-bold">Price</p>
          <Select
            defaultValue="Any price is acceptable"
            style={{ width: 200 }}
            options={[
              {
                value: "Any price is acceptable",
                label: "Any price is acceptable",
              },
              {
                value: "Not exceeding THB 2,000",
                label: "Not exceeding THB 2,000",
              },
              {
                value: "Not exceeding THB 3,500",
                label: "Not exceeding THB 3,500",
              },
              {
                value: "Not exceeding THB 5,000",
                label: "Not exceeding THB 5,000",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
