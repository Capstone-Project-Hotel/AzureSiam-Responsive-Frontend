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
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
dayjs().format();

import { useRouter } from "next/navigation";
export default function Filter({
  t,
  showStandard,
  showDeluxe,
  showFamily,
  showSuite,
  showExecutive,
  setShowStandard,
}: {
  t: any;
  showStandard: boolean;
  showDeluxe: boolean;
  showFamily: boolean;
  showSuite: boolean;
  showExecutive: boolean;
  setShowStandard: Dispatch<SetStateAction<boolean>>;
}) {
  const { RangePicker } = DatePicker;
  const CheckboxGroup = Checkbox.Group;

  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const { bookingDetail, setBookingDetail, currency, exchangeRate } =
    useStore();

  const router = useRouter();

  return (
    <div className="w-full flex-row bg-secondary pt-3 pb-3">
      <div className="my-[20px] ml-10">
        <p className="text-white text-h3 font-bold mobile:text-h3-mobile">
          {t("booking_detail")}
        </p>
        <div className="flex justify-around mobile:flex-wrap mobile:space-y-3 mobile:space-x-3 mobile:justify-normal">
          <RangePicker
            value={[
              dayjs(bookingDetail.startDate, "DD-MM-YYYY"),
              dayjs(bookingDetail.endDate, "DD-MM-YYYY"),
            ]}
            format={["DD-MM-YYYY"]}
            style={{ zIndex: 0 }}
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
                router.replace(
                  `/search-result/startDate=${startDate}&endDate=${endDate}&adults=${bookingDetail.adultNumber}&childrens=${bookingDetail.childrenNumber}&codePromo=${bookingDetail.codePromotion}`
                );
              }
            }}
          />
          <div className="flex">
            <p className="ml-2 mr-2 text-white text-h4 font-bold mobile:text-h4-mobile">
              {t("adults")}
            </p>
            <InputNumber
              style={{ width: "50px" }}
              value={bookingDetail.adultNumber}
              onChange={(e: number | null) => {
                if (e != null) {
                  let updatedAdultNumber = e;
                  if (updatedAdultNumber < 1) {
                    updatedAdultNumber = 1;
                  }
                  const updatedBookingDetail = {
                    ...bookingDetail,
                    adultNumber: updatedAdultNumber,
                  };
                  setBookingDetail(updatedBookingDetail);
                  router.replace(
                    `/search-result/startDate=${bookingDetail.startDate}&endDate=${bookingDetail.endDate}&adults=${updatedAdultNumber}&childrens=${bookingDetail.childrenNumber}&codePromo=${bookingDetail.codePromotion}`
                  );
                }
              }}
            />
          </div>
          <div className="flex">
            <p className="ml-2 mr-2 text-white text-h4 font-bold mobile:text-h4-mobile">
              {t("children")}
            </p>
            <InputNumber
              style={{ width: "50px" }}
              value={bookingDetail.childrenNumber}
              onChange={(e: number | null) => {
                if (e != null) {
                  const updatedChidrenNumber = e;

                  const updatedBookingDetail = {
                    ...bookingDetail,
                    childrenNumber: updatedChidrenNumber,
                  };

                  setBookingDetail(updatedBookingDetail);

                  router.replace(
                    `/search-result/startDate=${bookingDetail.startDate}&endDate=${bookingDetail.endDate}&adults=${bookingDetail.adultNumber}&childrens=${updatedChidrenNumber}&codePromo=${bookingDetail.codePromotion}`
                  );
                }
              }}
            />
          </div>
          <div className="flex">
            <p className="ml-2 mr-2 text-white text-h4 font-bold mobile:text-h4-mobile">
              {t("code")}
            </p>
            <Input
              placeholder="example"
              style={{ width: 100 }}
              value={bookingDetail.codePromotion}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const updatedCodePromotion = e.target.value;
                console.log(updatedCodePromotion.length);

                if (updatedCodePromotion.length <= 8) {
                  const updatedBookingDetail = {
                    ...bookingDetail,
                    codePromotion: updatedCodePromotion,
                  };

                  setBookingDetail(updatedBookingDetail);

                  router.replace(
                    `/search-result/startDate=${bookingDetail.startDate}&endDate=${bookingDetail.endDate}&adults=${bookingDetail.adultNumber}&childrens=${bookingDetail.childrenNumber}&codePromo=${updatedCodePromotion}`
                  );
                } else {
                  // Prevent the default behavior when character count exceeds
                  e.preventDefault();
                }
              }}
            />
            {bookingDetail.codePromotion === "valid001" ? (
              <div className="flex">
                <i className="pi pi-check text-green-500 text-2xl mobile:text-sm"></i>
                <p className="ml-2 mr-2 text-white text-h4 font-bold mobile:text-h4-mobile">
                  Discount 20%
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex justify-between ml-10 mr-10 my-2 mobile:flex-col">
        <div>
          <p className="text-white text-h3 font-bold mobile:text-h3-mobile">
            {t("room_type")}
          </p>
          <div className="grid grid-cols-3 gap-2">
            <Checkbox
              checked={showStandard}
              onClick={(e) => {
                // console.log(updateValue);
                setShowStandard(!showStandard);
                console.log(showStandard);
              }}
              // onChange={(e) => {
              //   const updateValue = !e.target.value;
              //   console.log(updateValue);
              //   setShowStandard(false);
              //   console.log(showStandard);
              // }}
            >
              <p className="text-white text-h5 mobile:text-h5-mobile">
                {t("std_title")}
              </p>
            </Checkbox>
            <Checkbox checked={showDeluxe}>
              <p className="text-white text-h5 mobile:text-h5-mobile">
                {t("dlx_title")}
              </p>
            </Checkbox>
            <Checkbox checked={showFamily}>
              <p className="text-white text-h5 mobile:text-h5-mobile">
                {t("fml_title")}
              </p>
            </Checkbox>
            <Checkbox checked={showSuite}>
              <p className="text-white text-h5 mobile:text-h5-mobile">
                {t("s_title")}
              </p>
            </Checkbox>
            <Checkbox checked={showExecutive}>
              <p className="text-white text-h5 mobile:text-h5-mobile">
                {t("ex_title")}
              </p>
            </Checkbox>
          </div>
        </div>
        <div>
          <p className="text-white text-h3 font-bold mobile:text-h3-mobile">
            {t("room_feature")}
          </p>
          <div className="grid grid-cols-3 gap-2">
            <Checkbox>
              <p className="text-white text-h5 mobile:text-h5-mobile">
                {t("city_view")}
              </p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5 mobile:text-h5-mobile">
                {t("dinner")}
              </p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5 mobile:text-h5-mobile">
                {t("jacuzzi")}
              </p>
            </Checkbox>
          </div>
        </div>

        <div>
          <p className="text-white text-h3 font-bold mobile:text-h3-mobile">
            {t("price")}
          </p>
          <Select
            defaultValue={t("price_default")}
            style={{ width: 220 }}
            className="price-select"
            options={[
              {
                value: "Any price is acceptable",
                label: t("price_default"),
              },
              {
                value: "Not exceeding THB 1,500",
                label:
                  t("price_not_exceeding") +
                  " " +
                  currency +
                  " " +
                  (1500 * exchangeRate).toPrecision(4).toString(),
              },
              {
                value: "Not exceeding THB 2,000",
                label:
                  t("price_not_exceeding") +
                  " " +
                  currency +
                  " " +
                  (2000 * exchangeRate).toPrecision(4).toString(),
              },
              {
                value: "Not exceeding THB 2,500",
                label:
                  t("price_not_exceeding") +
                  " " +
                  currency +
                  " " +
                  (2500 * exchangeRate).toPrecision(4).toString(),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
