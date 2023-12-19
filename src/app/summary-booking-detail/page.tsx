"use client";

import React from "react";
import useStore from "@/hooks/useStore";
import { gu } from "date-fns/locale";
import { redirect } from "next/navigation";
import SummaryCard from "@/components/SummaryCard";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { LeftOutlined } from "@ant-design/icons";
import Link from "next/link";
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

const idTypeToid = {
  id: "National ID",
  passportNumber: "Passport Number",
  drivingLicence: "Driving Licence",
};

const cardTypeToCardImg = {
  amex: "https://venturebeat.com/wp-content/uploads/2023/05/blue.jpg?fit=750%2C422&strip=all",
  visa: "https://swissuplabs.com/wordpress/wp-content/uploads/2016/04/free-icons-visa.png",
  mastercard:
    "https://swissuplabs.com/wordpress/wp-content/uploads/2016/04/free-icons-mastercard.png",
  discover:
    "https://swissuplabs.com/wordpress/wp-content/uploads/2016/04/free-icons-discover.png",
};

const additionalServiceCardExample = {
  one: "https://cdn.discordapp.com/attachments/1145653185059495958/1186614046435319858/image.png?ex=6593e372&is=65816e72&hm=18040f1611713df909861ded1d940efea35e3feb84d9db970596ef45c91344ed&",
  two: "https://cdn.discordapp.com/attachments/1145653185059495958/1186614215696470036/image.png?ex=6593e39b&is=65816e9b&hm=e1fb456b3182b9f712fa3c75d390b632e784a389159deae8bc1da9cf78781755&",
};

const BookingConfirmation: React.FC = () => {
  const { guests, paymentDetail, specialReq, cardType } = useStore();

  if (guests[0].firstName === "") {
    redirect("/");
  }

  return (
    // Page Container
    <div>
      <div className="z-50 fixed top-0">
        <Topbar />
      </div>
      <div className="flex justify-center mt-20">
        {/* Main Container */}
        <div className="w-[1440px] mobile:w-[330px] flex flex-wrap justify-center gap-10 py-10">
          {/* Left Container */}
          <div className="w-[729px] mobile:w-[330px] flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <Link href="/reservation-and-guest-detail">
                <LeftOutlined className="text-[36px] mobile:text-[25px]" />
              </Link>
              <div className="text-h2 mobile:text-h2-mobile">
                Modify your reservation details
              </div>
            </div>
            {/* Guest Detail Container */}
            <div>
              {/* Guest Detail */}
              <div className="text-h2 mobile:text-h2-mobile font-bold text-primary">
                Guest Detail
              </div>

              {/* Guest Detail - Input Container */}
              {guests.map((guest, index) => {
                return <GuestDetailInputContainer key={index} guest={guest} />;
              })}
            </div>

            {/* Payment Detail Container */}
            <div>
              {/* Payment Detail */}
              <div className="text-h2 mobile:text-h2-mobile font-bold text-primary mb-2">
                Payment Detail
              </div>

              {/* Payment Detail - Input Container */}
              <div className="flex flex-col gap-2">
                {/* Row 1 */}
                <div className="flex flex-wrap justify-between gap-2">
                  {/* Card Holder Name */}
                  <div className="w-full">
                    <div className="text-h5 mobile:text-h4-mobile">
                      Card Holder Name : {paymentDetail.cardHolderName}
                    </div>
                  </div>

                  {/* Card Number */}
                  <div className="w-full">
                    <div className="text-description mobile:text-h3-mobile flex gap-2 items-center">
                      <div className="text-h5 mobile:text-h4-mobile">
                        Card Number : {paymentDetail.cardNumber}
                      </div>
                      <div>
                        {cardType &&
                        Object.keys(cardTypeToCardImg).includes(cardType) ? (
                          <img
                            src={(cardTypeToCardImg as any)[cardType]}
                            alt="cardType"
                            style={{ height: "17px" }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-wrap justify-between gap-2">
                  {/* Exp Date */}
                  <div className="w-[343px]">
                    <div className="text-h5 mobile:text-h4-mobile">
                      Exp date : {paymentDetail.expDate}
                    </div>
                  </div>

                  {/* CVV */}
                  <div className="w-[343px]">
                    <div className="text-h5 mobile:text-h4-mobile">
                      CVV : {paymentDetail.cvv}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HR Line */}
            <hr className="my-2" />

            {/* Special Request Container */}
            <div>
              <div className="text-h2 mobile:text-h2-mobile font-bold text-primary">
                Special Request
              </div>
              <div className="w-full text-h5 mobile:text-h4-mobile">
                {specialReq === "" ? "-" : specialReq}
              </div>
            </div>
          </div>

          {/* Right Container */}
          <div className="w-[509px] mobile:w-[330px]">
            <SummaryCard page="summary-booking-detail" />
          </div>
        </div>
      </div>
      <div className="mt-[10px]">
        <Footer />
      </div>
    </div>
  );
};

export default BookingConfirmation;

interface GuestDetailInputContainerProps {
  guest: Guest;
}

const GuestDetailInputContainer: React.FC<GuestDetailInputContainerProps> = ({
  guest,
}) => {
  return (
    <div className="flex flex-col gap-2 my-2">
      {/* Row 1 */}
      <div className="flex flex-wrap mobile:gap-2">
        {/* First Name */}
        <div className="w-[243px]">
          <div className="text-h5 mobile:text-h4-mobile">
            First Name : {guest.firstName}
          </div>
        </div>

        {/* Middle Name */}
        <div className="w-[243px]">
          <div className="text-h5 mobile:text-h4-mobile">
            Middle Name : {guest.middleName === "" ? "-" : guest.middleName}
          </div>
        </div>

        {/* Last Name */}
        <div className="w-[243px]">
          <div className="text-h5 mobile:text-h4-mobile">
            Last Name : {guest.lastName}
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap mobile:gap-2">
        {/* Gender */}
        <div className="w-[243px]">
          <div className="text-h5 mobile:text-h4-mobile">
            Gender : {guest.gender}
          </div>
        </div>

        {/* Birth Date */}
        <div className="w-[243px]">
          <div className="text-h5 mobile:text-h4-mobile">
            Birth Date : {guest.birthDate}
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-wrap mobile:gap-2">
        {/* Email */}
        <div className="w-[243px]">
          <div className="text-h5 mobile:text-h4-mobile">
            Email : {guest.email}
          </div>
        </div>

        {/* Phone Number */}
        <div className="w-[243px]">
          <div className="text-h5 mobile:text-h4-mobile">
            Phone Nunber : {guest.phoneNumber}
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="flex flex-wrap mobile:gap-2">
        {/* Country */}
        <div className="w-[243px]">
          <div className="text-h5 mobile:text-h4-mobile">
            Country : {guest.country}
          </div>
        </div>

        {/* City */}
        <div className="w-[243px]">
          <div className="text-h5 mobile:text-h4-mobile">
            City : {guest.city}
          </div>
        </div>

        {/* Zip code */}
        <div className="w-[243px]">
          <div className="text-h5 mobile:text-h4-mobile">
            Zip Code : {guest.zipCode}
          </div>
        </div>
      </div>

      {/* Row 5 */}
      <div className="flex flex-wrap justify-between gap-2">
        {/* Address  */}
        <div className="w-full">
          <div className="text-h5 mobile:text-h4-mobile">
            Address : {guest.address}
          </div>
        </div>
      </div>

      {/* Row 6 */}
      <div className="flex flex-wrap justify-between gap-2">
        {/* ID , Passport Number , Driving Licence */}
        <div className="w-full">
          <div className="text-h5 mobile:text-h4-mobile">
            {(idTypeToid as any)[guest["idType"]] || "National ID"} : {guest.id}
          </div>
        </div>
      </div>

      {/* HR Line */}
      <hr className="my-2" />
    </div>
  );
};
