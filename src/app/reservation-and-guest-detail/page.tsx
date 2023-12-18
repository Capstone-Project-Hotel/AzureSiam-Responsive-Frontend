"use client";

import React, { useEffect, useMemo, useState } from "react";
import { DatePicker, DatePickerProps, Input, Select } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import Link from "next/link";
import useStore from "@/hooks/useStore";
import { Country, State, City } from "country-state-city";
// import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Cleave from "cleave.js/react";

import dynamic from "next/dynamic";

const PhoneInput = dynamic(() => import("react-phone-number-input"), {
  ssr: false,
});

interface Guest {
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  zipCode: string;
  address: string;
  id: string;
  idType: string;
}

interface PaymentDetail {
  cardHolderName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
}

const emptyGuest: Guest = {
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  birthDate: "",
  email: "",
  phoneNumber: "",
  country: "",
  city: "",
  zipCode: "",
  address: "",
  id: "",
  idType: "",
};

const idTypeToid = {
  id: "National ID",
  passportNumber: "Passport Number",
  drivingLicence: "Driving Licence",
};

const cardTypeToCardImg = {
  amex: "https://cdn.discordapp.com/attachments/457166097230069773/1186233714523512852/vinnytsia-ukraine-september-6-2023-600nw-2358048941.webp?ex=6592813c&is=65800c3c&hm=b37ff0d726d6a4b7c5994550407f23d9a6401cfb3fa44696c5425531b322b02d&",
  visa: "https://swissuplabs.com/wordpress/wp-content/uploads/2016/04/free-icons-visa.png",
  mastercard:
    "https://swissuplabs.com/wordpress/wp-content/uploads/2016/04/free-icons-mastercard.png",
  discover:
    "https://swissuplabs.com/wordpress/wp-content/uploads/2016/04/free-icons-discover.png",
};

const ReservationAndGuestDetail: React.FC = () => {
  const {
    guests,
    setGuests,
    paymentDetail,
    setPaymentDetail,
    specialReq,
    setSpecialReq,
    cardType,
    setCardType,
  } = useStore();
  const [isCheckedPDPA, setIsCheckedPDPA] = useState<boolean>(false);
  const [isDisabledConfirm, setIsDisabledConfirm] = useState<boolean>(false);

  const handleInputChange = (index: number, value: string, name: string) => {
    const updatedGuests = [...guests];
    updatedGuests[index] = { ...updatedGuests[index], [name]: value };
    setGuests(updatedGuests);
    isDisabledConfirmF(updatedGuests, paymentDetail);
  };

  const handlePaymentInputChange = (e: any) => {
    setPaymentDetail({ ...paymentDetail, [e.target.name]: e.target.value });
    isDisabledConfirmF(guests, {
      ...paymentDetail,
      [e.target.name]: e.target.value,
    });
  };
  const handleExpDateChange: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    setPaymentDetail({ ...paymentDetail, expDate: dateString });
    isDisabledConfirmF(guests, { ...paymentDetail, expDate: dateString });
  };

  useEffect(() => {
    isDisabledConfirmF(guests, paymentDetail);
  }, [isCheckedPDPA, guests.length]);

  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    setIsCheckedPDPA(e.target.checked);
  };

  const isDisabledConfirmF = (aguests: Guest[], payment: PaymentDetail) => {
    const fieldsToCheck = [
      "firstName",
      "lastName",
      "gender",
      "birthDate",
      "email",
      "phoneNumber",
      "country",
      "city",
      "zipCode",
      "address",
      "id",
      "idType",
      "cardHolderName",
      "cardNumber",
      "expDate",
      "cvv",
    ];
    const fieldsToCheckPayment = [
      "cardHolderName",
      "cardNumber",
      "expDate",
      "cvv",
    ];
    for (let i = 0; i < aguests.length; i++) {
      for (const field of fieldsToCheck) {
        if ((aguests[i] as any)[field] == "") {
          setIsDisabledConfirm(true);
          return;
        }
      }
    }

    for (const field of fieldsToCheckPayment) {
      if ((payment as any)[field] == "") {
        setIsDisabledConfirm(true);
        return;
      }
    }

    setIsDisabledConfirm(false);
  };

  const onCreditCardTypeChanged = (type: string) => {
    setCardType(type);
  };

  return (
    // Page Container
    <div className="flex justify-center">
      {/* Main Container */}
      <div className="w-[1440px] mobile:w-[330px] flex flex-wrap justify-center gap-10 py-10">
        {/* Left Container */}
        <div className="w-[729px] mobile:w-[330px] flex flex-col gap-10">
          {/* Back to search result Container */}
          <div className="flex items-center gap-5">
            <Link href="/search-result">
              <LeftOutlined className="text-[36px] mobile:text-[25px]" />
            </Link>
            <div className="text-h2 mobile:text-h2-mobile">
              Re-select your room for booking
            </div>
          </div>

          {/* Additional Services Container */}
          <div>
            <div className="text-h2 mobile:text-h2-mobile font-bold">
              Additional Services
            </div>
          </div>

          {/* Guest Detail Container */}
          <div>
            {/* Guest Detail */}
            <div className="text-h2 mobile:text-h2-mobile font-bold">
              Guest Detail
            </div>

            {/* Guest Detail - Input Container */}
            {guests.map((guest, index) => {
              return (
                <GuestDetailInputContainer
                  key={index}
                  handleInputChange={handleInputChange}
                  index={index}
                  guest={guest}
                  guests={guests}
                  setGuests={setGuests}
                />
              );
            })}

            {/* Add Guest */}
            <div
              className="text-primary text-description mobile:text-h3-mobile cursor-pointer"
              onClick={() => setGuests([...guests, emptyGuest])}
            >
              + <span className="underline">Add Guest</span>
            </div>
          </div>

          {/* Payment Detail Container */}
          <div>
            {/* Payment Detail */}
            <div className="text-h2 mobile:text-h2-mobile font-bold mb-2">
              Payment Detail
            </div>

            {/* Payment Detail - Input Container */}
            <div className="flex flex-col gap-2">
              {/* Row 1 */}
              <div className="flex flex-wrap justify-between gap-2">
                {/* Card Holder Name */}
                <div className="w-[343px]">
                  <div className="text-description mobile:text-h3-mobile">
                    Card Holder Name <span className="text-red-600">*</span>
                  </div>
                  <Input
                    className="w-full"
                    placeholder="Card Holder Name"
                    name="cardHolderName"
                    value={paymentDetail.cardHolderName}
                    onChange={handlePaymentInputChange}
                  />
                </div>

                {/* Card Number */}
                <div className="w-[343px]">
                  <div className="text-description mobile:text-h3-mobile flex justify-between items-center">
                    <div>
                      Card Number <span className="text-red-600">*</span>
                    </div>
                    <div className="flex">
                      <img
                        src={cardTypeToCardImg.visa}
                        alt="cardType"
                        style={{
                          height: "17px",
                          width: "40px",
                          objectFit: "cover",
                          filter:
                            cardType === "visa" ? "none" : "grayscale(100%)",
                        }}
                      />
                      <img
                        src={cardTypeToCardImg.mastercard}
                        alt="cardType"
                        style={{
                          height: "17px",
                          width: "40px",
                          objectFit: "cover",
                          filter:
                            cardType === "mastercard"
                              ? "none"
                              : "grayscale(100%)",
                        }}
                      />
                      <img
                        src={cardTypeToCardImg.amex}
                        alt="cardType"
                        style={{
                          height: "17px",
                          width: "40px",
                          objectFit: "cover",
                          filter:
                            cardType === "amex" ? "none" : "grayscale(100%)",
                        }}
                      />
                      <img
                        src={cardTypeToCardImg.discover}
                        alt="cardType"
                        style={{
                          height: "17px",
                          width: "40px",
                          objectFit: "cover",
                          filter:
                            cardType === "discover"
                              ? "none"
                              : "grayscale(100%)",
                        }}
                      />
                    </div>
                  </div>
                  <Cleave
                    placeholder="Enter credit card number"
                    options={{
                      creditCard: true,
                      onCreditCardTypeChanged,
                    }}
                    name="cardNumber"
                    value={paymentDetail.cardNumber}
                    onChange={handlePaymentInputChange}
                    className="ant-input css-dev-only-do-not-override-6j9yrn w-full css-dev-only-do-not-override-6j9yrn"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap justify-between gap-2">
                {/* Exp Date */}
                <div className="w-[343px]">
                  <div className="text-description mobile:text-h3-mobile">
                    Exp Date <span className="text-red-600">*</span>
                  </div>
                  <DatePicker
                    className="w-full"
                    placeholder="Select Exp Date"
                    onChange={handleExpDateChange}
                  />
                </div>

                {/* CVV */}
                <div className="w-[343px]">
                  <div className="text-description mobile:text-h3-mobile">
                    CVV <span className="text-red-600">*</span>
                  </div>
                  <Input
                    className="w-full"
                    placeholder="CVV"
                    name="cvv"
                    value={paymentDetail.cvv}
                    onChange={handlePaymentInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* PDPA */}
          <div className="flex text-description mobile:text-h3-mobile">
            <Checkbox onChange={onCheckboxChange}>
              I have read and agreed to the Terms & Conditions and Privacy
              Policy.
            </Checkbox>
          </div>

          {/* Special Request Container */}
          <div>
            <div className="text-h2 mobile:text-h2-mobile font-bold">
              Special Request
            </div>
            <div className="w-full">
              <TextArea
                className="w-full"
                rows={2}
                placeholder="Special Request"
                onChange={(e) => setSpecialReq(e.target.value)}
                value={specialReq}
              />
            </div>
          </div>

          {/* Cancellation Policy Container */}
          <div>
            <div className="text-h2 mobile:text-h2-mobile font-bold">
              Cancellation Policy
            </div>
            <div className="w-full text-description mobile:text-h3-mobile">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt a
              fuga iure temporibus, non commodi quasi maxime! Eum, cupiditate
              facilis?
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="w-[509px] mobile:w-[330px]">
          summary box
          <button
            onClick={() => alert(isDisabledConfirm || !isCheckedPDPA)}
            disabled={isDisabledConfirm || !isCheckedPDPA}
          >
            Button
          </button>
          <Link href={"/booking-confirmation"}>Link</Link>
        </div>
      </div>
    </div>
  );
};

export default ReservationAndGuestDetail;

interface GuestDetailInputContainerProps {
  handleInputChange: (index: number, value: string, name: string) => void;
  index: number;
  guest: Guest;
  guests: Guest[];
  setGuests: (guests: Guest[]) => void;
}

const GuestDetailInputContainer: React.FC<GuestDetailInputContainerProps> = ({
  handleInputChange,
  index,
  guest,
  guests,
  setGuests,
}) => {
  const [countryCode, setCountryCode] = useState("");
  const [city, setCity] = useState<any[]>([]);

  useEffect(() => {
    const s: any[] = State.getStatesOfCountry(countryCode).map(
      (country: any) => {
        return {
          value: country.name,
          label: country.name,
          group: "city",
        };
      }
    );
    setCity(s);
  }, [countryCode]);
  const [value, setValue] = useState();

  const handleChange = (e: any, fieldNames?: any) => {
    if (fieldNames) {
      handleInputChange(index, fieldNames.value, fieldNames.group);
      if (fieldNames.group === "country") {
        setCountryCode(fieldNames.countryCode);
      }
    } else {
      handleInputChange(index, e.target.value, e.target.name);
    }
  };

  const handleBirthDateChange: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    handleInputChange(index, dateString, "birthDate");
  };

  return (
    <div className="flex flex-col gap-2 my-2">
      {/* Row 1 */}
      <div className="flex flex-wrap justify-between gap-2">
        {/* First Name */}
        <div className="w-[212px]">
          <div className="text-description mobile:text-h3-mobile">
            First Name <span className="text-red-600">*</span>
          </div>
          <Input
            className="w-full"
            placeholder="First Name"
            name="firstName"
            value={guest.firstName}
            onChange={handleChange}
          />
        </div>

        {/* Middle Name */}
        <div className="w-[212px]">
          <div className="text-description mobile:text-h3-mobile">
            Middle Name
          </div>
          <Input
            className="w-full"
            placeholder="Middle Name"
            name="middleName"
            value={guest.middleName}
            onChange={handleChange}
          />
        </div>

        {/* Last Name */}
        <div className="w-[212px]">
          <div className="text-description mobile:text-h3-mobile">
            Last Name <span className="text-red-600">*</span>
          </div>
          <Input
            className="w-full"
            placeholder="Last Name"
            name="lastName"
            value={guest.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap justify-between gap-2">
        {/* Gender */}
        <div className="w-[343px]">
          <div className="text-description mobile:text-h3-mobile">
            Gender <span className="text-red-600">*</span>
          </div>
          <Select
            className="w-full"
            placeholder="Select Gender"
            options={[
              { value: "male", label: "Male", group: "gender" },
              { value: "female", label: "Female", group: "gender" },
            ]}
            onChange={handleChange}
          />
        </div>

        {/* Birth Date */}
        <div className="w-[343px]">
          <div className="text-description mobile:text-h3-mobile">
            Birth Date <span className="text-red-600">*</span>
          </div>
          <DatePicker
            className="w-full"
            placeholder="Select Birth Date"
            onChange={handleBirthDateChange}
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-wrap justify-between gap-2">
        {/* Email */}
        <div className="w-[343px]">
          <div className="text-description mobile:text-h3-mobile">
            Email <span className="text-red-600">*</span>
          </div>
          <Input
            className="w-full"
            placeholder="Email"
            name="email"
            value={guest.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone Number */}
        <div className="w-[343px]">
          <div className="text-description mobile:text-h3-mobile">
            Phone Number <span className="text-red-600">*</span>
          </div>
          <div className="flex">
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              name="phoneNumber"
              value={guest.phoneNumber}
              onChange={(value) => {
                if (value) handleInputChange(index, value, "phoneNumber");
              }}
              className="ant-input css-dev-only-do-not-override-6j9yrn w-full css-dev-only-do-not-override-6j9yrn"
            />
            {/* <Input
              className="w-full h-[32px]"
              placeholder="Phone Number"
              name="phoneNumber"
              value={guest.phoneNumber}
              onChange={handleChange}
            /> */}
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="flex flex-wrap justify-between gap-2">
        {/* Country */}
        <div className="w-[212px]">
          <div className="text-description mobile:text-h3-mobile">
            Country <span className="text-red-600">*</span>
          </div>
          <Select
            className="w-full"
            placeholder="Select Country"
            options={Country.getAllCountries().map((country: any) => {
              return {
                value: country.name,
                countryCode: country.isoCode,
                label: country.name,
                group: "country",
              };
            })}
            onChange={handleChange}
          />
        </div>

        {/* City */}
        <div className="w-[212px]">
          <div className="text-description mobile:text-h3-mobile">
            City <span className="text-red-600">*</span>
          </div>
          <Select
            className="w-full"
            placeholder="Select City"
            options={city}
            onChange={handleChange}
          />
        </div>

        {/* Zip code */}
        <div className="w-[212px]">
          <div className="text-description mobile:text-h3-mobile">
            Zip code <span className="text-red-600">*</span>
          </div>
          {/* <Select
            className="w-full"
            placeholder="Select Zip code"
            options={[
              { value: "male", label: "Male", group: "zipCode" },
              { value: "female", label: "Female", group: "zipCode" },
            ]}
            onChange={handleChange}
          /> */}
          <Input
            className="w-full"
            placeholder="Zip code"
            name="zipCode"
            value={guest.zipCode}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Row 5 */}
      <div className="flex flex-wrap justify-between gap-2">
        {/* Address  */}
        <div className="w-full">
          <div className="text-description mobile:text-h3-mobile">
            Address <span className="text-red-600">*</span>
          </div>
          <TextArea
            className="w-full"
            rows={2}
            placeholder="Address"
            name="address"
            value={guest.address}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Row 6 */}
      <div className="flex flex-wrap justify-between gap-2">
        {/* ID , Passport Number , Driving Licence */}
        <div className="w-full">
          <div className="text-description mobile:text-h3-mobile">
            ID , Passport Number , Driving Licence{" "}
            <span className="text-red-600">*</span>
          </div>
          <div className="flex justify-between flex-wrap gap-1">
            <div className="w-[212px]">
              <Select
                className="w-full"
                placeholder="Select"
                options={[
                  { value: "id", label: "National ID", group: "idType" },
                  {
                    value: "passportNumber",
                    label: "Passport Number",
                    group: "idType",
                  },
                  {
                    value: "drivingLicence",
                    label: "Driving Licence",
                    group: "idType",
                  },
                ]}
                onChange={handleChange}
              />
            </div>
            <div className="w-[470px]">
              <Input
                className="w-full"
                placeholder={
                  guest["idType"]
                    ? (idTypeToid as any)[guest["idType"]]
                    : "Number"
                }
                name="id"
                value={guest.id}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Remove Guest */}
      {index > 0 && (
        <div
          className="text-red-700 text-description mobile:text-h3-mobile cursor-pointer"
          onClick={() =>
            setGuests([...guests.slice(0, index), ...guests.slice(index + 1)])
          }
        >
          - <span className="underline">Remove Guest</span>
        </div>
      )}

      {/* HR Line */}
      <hr className="my-2" />
    </div>
  );
};
