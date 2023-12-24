"use client";

import Image from "next/image";
import HistoryCard from "@/components/HistoryCard";
import { addDays } from "date-fns";
import { useState } from "react";
import OtherCard from "@/components/OtherCard";
import dynamic from "next/dynamic";
import { Card, Carousel } from "antd";
import styled from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import LandingTopbar from "@/components/LandingTopbar";

const { Meta } = Card;

const CustomDateRange = dynamic(() => import("@/components/CustomDateRange"), {
  ssr: false,
});

const ContentStyle = styled.div<{ src: string }>`
  height: 543px;
  width: 100%;
  background-image: ${(p) => `url(${p.src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 394px) {
    height: 150px;
  }
`;

const Home = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 394,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    // Page Container
    <div>
      <div className="z-50 fixed top-0">
        <LandingTopbar />
      </div>
    <div className="flex justify-center p-0 m-0 mt-[86px]">
      {/* Main Container */}
      <div className="w-[1440px] mobile:w-full flex flex-col gap-20 mobile:gap-10 items-center pb-20">
        {/* Hotel Name Container */}
        <div
          style={{
            backgroundImage:
              'url("https://cdn.discordapp.com/attachments/457166097230069773/1186379702336753684/coverImage.jpg?ex=65930932&is=65809432&hm=efec0670074a80e0fc1ce6438a2272023f4fcf5fd383d4dfeb9813a8d25c2427&")',
            backgroundPosition: "center",
          }}
          className="p-20 flex items-end h-[822px] w-full mobile:h-[331px] mobile:p-5"
        >
          <div className="text-white">
            <div className="text-h1 mobile:text-h1-mobile font-bold">
              AzureSiam Hotel and Spa
            </div>
            <div className="text-h2 mobile:text-h2-mobile">
              Make your holiday memorable
            </div>
          </div>
        </div>

        {/* History Container */}
        <div className="w-full flex justify-center">
          <HistoryCard />
        </div>

        {/* Room Type Container */}
        <div className="w-full px-[80px] mobile:px-[25px]">
          <div className="text-h1 mobile:text-h2-mobile font-bold">
            Room Type
          </div>

          <Slider {...settings}>
            <OtherCard
              title="Standard Room"
              description="Standard rooms offer cost-effective comfort with a bed, private bathroom, and essential furniture for solo or couple travelers."
              src="https://cdn.discordapp.com/attachments/457166097230069773/1186386766119305258/cover.jpg?ex=65930fc7&is=65809ac7&hm=81597f4a64012d760e9c97c217db3cae2617d4f37183b609a89429cc3562fd42&"
            />
            <OtherCard
              title="Deluxe Room"
              description="Deluxe rooms provide extra space, enhanced furnishings, and luxury amenities for heightened comfort and relaxation."
              src="https://cdn.discordapp.com/attachments/457166097230069773/1186387436901781634/cover_1.jpg?ex=65931066&is=65809b66&hm=f75c101fa0d7768bac471cc46a3c94a94b5a1737567af3c91951c95abfc4ec9b&"
            />
            <OtherCard
              title="Family Room"
              description="Family rooms, designed for convenience, offer extra sleeping space with bunk beds or pull-out sofas for comfortable family stays."
              src="https://cdn.discordapp.com/attachments/457166097230069773/1186387586516791326/cover_2.jpg?ex=6593108a&is=65809b8a&hm=44468b0913ab9e438ce166d2c49366e3833e42e84669ffff7b38eb770aac7c1c&"
            />
            <OtherCard
              title="Family Room"
              description="Family rooms, designed for convenience, offer extra sleeping space with bunk beds or pull-out sofas for comfortable family stays."
              src="https://cdn.discordapp.com/attachments/457166097230069773/1186387586516791326/cover_2.jpg?ex=6593108a&is=65809b8a&hm=44468b0913ab9e438ce166d2c49366e3833e42e84669ffff7b38eb770aac7c1c&"
            />
            <OtherCard
              title="Family Room"
              description="Family rooms, designed for convenience, offer extra sleeping space with bunk beds or pull-out sofas for comfortable family stays."
              src="https://cdn.discordapp.com/attachments/457166097230069773/1186387586516791326/cover_2.jpg?ex=6593108a&is=65809b8a&hm=44468b0913ab9e438ce166d2c49366e3833e42e84669ffff7b38eb770aac7c1c&"
            />
          </Slider>
        </div>

        {/* Spa Container */}
        <div className="w-full">
          <StyledCard
            className="border-r-0"
            cover={
              <img
                className="w-full h-[611px]"
                alt="example"
                src="https://cdn.discordapp.com/attachments/457166097230069773/1186388457875050618/image_22.jpg?ex=6593115a&is=65809c5a&hm=cf867db65fccb6562c196f0bea586dc9020607a9cd118e60f915961630861461&"
              />
            }
          >
            <Meta
              title="TranquilHaven Spa"
              description="AzureSiam Spa: A holistic haven for mind, body, and soul. Our skilled therapists offer tailored treatments for ultimate relaxation. Enjoy state-of-the-art facilities, hydrotherapy, and a stylish lounge with herbal teas. Your oasis of comfort at AzureSiam Spa."
            />
          </StyledCard>
        </div>

        {/* Fitness Container */}
        <div className="w-full">
          <StyledCard
            cover={
              <img
                alt="example"
                src="https://cdn.discordapp.com/attachments/457166097230069773/1186536405954998322/image_22_1.jpg?ex=65939b23&is=65812623&hm=51c97a045a70919c4ca3cbd6b1f023311523f8a0c7399532f14f427478e44b06&"
              />
            }
          >
            <Meta
              title="Indoor Gym"
              description="Elevate your stay with our state-of-the-art indoor gym facility. Whether you're a fitness enthusiast or looking to maintain your workout routine while traveling, our hotel provides a well-equipped gym for your convenience. Enjoy a range of cardio and strength training equipment in a comfortable and accessible space, ensuring you stay active and energized during your stay. With our commitment to your well-being, you can make the most of your time at the hotel by staying fit and healthy in our modern indoor gym."
            />
          </StyledCard>
        </div>

        {/* Promotions Container */}
        <div id="con" className="w-full px-[80px] mobile:px-[25px]">
          <div className="text-h1 mobile:text-h2-mobile font-bold">
            Promotions
          </div>

          <Slider {...settings}>
            <OtherCard
              title="50% Sale"
              description="Indulge in luxury for 50% less! Limited-time offer for stylish stays, elevate your travel without breaking the bank."
              src="https://cdn.discordapp.com/attachments/457166097230069773/1186562459033686056/image_14.jpg?ex=6593b367&is=65813e67&hm=7c031f253b7dfe592350d4690bb6d92951b739eb2871256db8fc2479304db7a0&"
            />
            <OtherCard
              title="Monday Sale"
              description="Transform Mondays with exclusive hotel discounts for a premium stay, perfect for business or leisure."
              src="https://cdn.discordapp.com/attachments/457166097230069773/1186562459331477626/cover_3.jpg?ex=6593b367&is=65813e67&hm=4585291084bf482c14175380a43ab8d406802a060167473d38bab221b79a71e0&"
            />
            <OtherCard
              title="Friday Sale"
              description="Start your weekend right with Friday Sale—exclusive discounts for a perfect blend of comfort and savings."
              src="https://cdn.discordapp.com/attachments/457166097230069773/1186562459604090920/cover_4.jpg?ex=6593b367&is=65813e67&hm=069041e55fe6d46f3a85f69c7600a40a3334b8feac9e86b19cd7068bb9a0e284&"
            />
          </Slider>
        </div>

        {/* Activity Schedule   Container */}
        <div id="con" className="w-full px-[80px] mobile:px-[25px]">
          <div className="text-h1 mobile:text-h2-mobile font-bold">
            Activity Schedule
          </div>

          <Slider {...settings}>
            <OtherCard
              title="Swimming Pool"
              description="Versatile pool activities—from leisurely swims to family fun and workouts—offer refreshing relaxation and social enjoyment."
              src="https://cdn.discordapp.com/attachments/457166097230069773/1186562753062785054/cover_5.jpg?ex=6593b3ad&is=65813ead&hm=5c9c2e3e9039f4b15c27f8ddd0f5fb7b5f45a8cc3b2f0c81cfc52c6cd0490c7a&"
            />
            <OtherCard
              title="Meditation"
              description="Meditation fosters mindfulness, reduces stress, and enhances well-being—essential for daily life challenges and mental clarity."
              src="https://cdn.discordapp.com/attachments/457166097230069773/1186562753389936750/cover_6.jpg?ex=6593b3ad&is=65813ead&hm=a9c5cb9631e12ed98d51d1f96c0bcfc87c18ea3642d48c742b35fe2ef32d94d4&"
            />
            <OtherCard
              title="Rock Climbing"
              description="Rock climbing merges physical challenge with mental focus, creating a moving meditation for unique mindfulness."
              src="https://cdn.discordapp.com/attachments/457166097230069773/1186562753759039508/cover_7.jpg?ex=6593b3ad&is=65813ead&hm=5633be70c54972883cda392c9079e407c231622e3d304fc2f56c15bc3cf8dcaf&"
            />
          </Slider>
        </div>

        {/* Gallery Container */}
        <div className="w-full px-[80px] mobile:px-[25px]">
          <div className="text-h1 mobile:text-h2-mobile font-bold mb-5">
            Nearby Attraction
          </div>
          <div className="w-[1060px] mobile:w-[330px] mx-auto">
            <Carousel dotPosition="right" autoplay>
              <div>
                <ContentStyle src="https://cdn.discordapp.com/attachments/457166097230069773/1186565137671409726/image_28.jpg?ex=6593b5e6&is=658140e6&hm=c439cc34a78e17e8d3f1c886941ad3dd92f40b5e1a9df0f87aef5dc8b6d49517&" />
              </div>
              <div>
                <ContentStyle src="https://cdn.discordapp.com/attachments/457166097230069773/1186565137671409726/image_28.jpg?ex=6593b5e6&is=658140e6&hm=c439cc34a78e17e8d3f1c886941ad3dd92f40b5e1a9df0f87aef5dc8b6d49517&" />
              </div>
              <div>
                <ContentStyle src="https://cdn.discordapp.com/attachments/457166097230069773/1186565137671409726/image_28.jpg?ex=6593b5e6&is=658140e6&hm=c439cc34a78e17e8d3f1c886941ad3dd92f40b5e1a9df0f87aef5dc8b6d49517&" />
              </div>
              <div>
                <ContentStyle src="https://cdn.discordapp.com/attachments/457166097230069773/1186565137671409726/image_28.jpg?ex=6593b5e6&is=658140e6&hm=c439cc34a78e17e8d3f1c886941ad3dd92f40b5e1a9df0f87aef5dc8b6d49517&" />
              </div>
            </Carousel>
          </div>
        </div>

        {/* Nearby Attraction Container */}
        <div id="con" className="w-full px-[80px] mobile:px-[25px]">
          <div className="text-h1 mobile:text-h2-mobile font-bold">
            Nearby Attraction
          </div>

          <Slider {...settings}>
            <OtherCard
              title="Siam Paragon"
              description="Siam Paragon features specialty stores, dining, a multiplex, Sea Life Bangkok, art gallery, opera hall, bowling, and karaoke."
              src="https://cdn.discordapp.com/attachments/457166097230069773/1186563062191357963/cover_8.jpg?ex=6593b3f7&is=65813ef7&hm=e26fe4168c65d44ce4ba29ab2c2e1711997210e092255fa87d811a2a819743bf&"
            />
            <OtherCard
              title="Samyan Mitrtown"
              description="Bangkok's Samyan Mitrtown is a ฿9 billion mixed-use complex, including a mall, office tower, residences, and hotel."
              src="https://cdn.discordapp.com/attachments/457166097230069773/1186563062510137374/cover_9.jpg?ex=6593b3f7&is=65813ef7&hm=37e1d1821914e1abaeb65fff72f7ee8777f76d4849725bc19bcd1c35d1c499e8&"
            />
            <OtherCard
              title="Central World"
              description="CentralWorld, Bangkok, ranks ninth globally, featuring a shopping mall, hotel, and office tower with extensive space."
              src="https://cdn.discordapp.com/attachments/457166097230069773/1186563062765994074/cover_10.jpg?ex=6593b3f7&is=65813ef7&hm=f5f92e930efdb887607c71c735b500194e2c94122db327962c261c387538292b&"
            />
          </Slider>
        </div>
      </div>
    </div>
    <div>
      {/* <Footer/> */}
    </div>
    </div>
  );
};

const StyledCard = styled(Card)`
  margin: 1px;
  padding: 0;
  max-width: 100%;
  height: 760px;
  border: 0px;
  border-radius: 0px !important;
  img {
    border-radius: 0px !important;
    height: 611px;
  }
  .ant-card-meta-title {
    font-size: 30px;
    font-weight: bold;
  }
  .ant-card-meta-description {
    font-size: 14px;
  }

  @media screen and (max-width: 393px) {
    max-width: 393px;
    height: 267px;

    img {
      width: 393px;
      height: 193px;
    }
    .ant-card-meta-title {
      font-size: 12px;
    }
    .ant-card-meta-description {
      font-size: 6px;
    }
  }
`;

export default Home;
