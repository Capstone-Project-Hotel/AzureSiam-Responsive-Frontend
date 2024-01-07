"use client";
import React, { useState } from 'react';
import { BlockOutlined } from '@ant-design/icons';
import { Anchor, Menu, Dropdown, Button } from 'antd';
import DownOutlined from '@ant-design/icons/DownOutlined';
import Link from 'next/link';

// const { Link } = Anchor;

export default function LandingTopbar() {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const handleLanguageChange = (language:string) => {
    setSelectedLanguage(language);
    // Implement language change logic
    console.log('Language changed to', language);
  };

  const languageMenu = (
    <Menu style={{ backgroundColor: 'white' }}>
      <Menu.Item key="EN" onClick={() => handleLanguageChange('EN')}>
        <span style={{ fontSize: '14px' }}>English</span>
      </Menu.Item>
      <Menu.Item key="TH" onClick={() => handleLanguageChange('TH')}>
        <span style={{ fontSize: '14px' }}>ไทย (Thai)</span>
      </Menu.Item>
    </Menu>
  );

  const handleBookNowClick = () => {
    console.log('Book Now clicked');
  };

  return (
    <div className="sticky top-0 flex flex-row h-[10vh] w-[100vw] px-[4.16vw] items-center justify-between" style={{ backgroundColor: '#2A4D69', color: 'white' }}>
      <div className="flex flex-row items-center">
        <BlockOutlined style={{ fontSize: '5vw', color: 'white' }} />
        <Link href="/" className="text-h2 font-sans mobile:text-h2-mobile">AzureSiam</Link>
      </div>
      <div className="flex flex-row  flex-wrap items-center">
        <p className="text-h5 ml-[5vw] font-sans mobile:text-h5-mobile">Room</p>
        <p className="text-h5 ml-[5vw] font-sans mobile:text-h5-mobile">Facilities & Services</p>
        <p className="text-h5 ml-[5vw] font-sans mobile:text-h5-mobile">Activities</p>
        <p className="text-h5 ml-[5vw] font-sans mobile:text-h5-mobile">Gallery</p>
        <p className="text-h5 ml-[5vw] font-sans mobile:text-h5-mobile">Promotion</p>

        {/* TODO: anchor hilight remove */}
        {/* <div className="flex flex-row items-center">
            <Anchor 
                direction="horizontal"
                style={{ marginLeft: '9.375vw' }}
            >
                <Link href="#room" title={<span style={{ color: 'white', fontSize: '16px' }}>Room</span>} />
                <Link href="#facilities" title={<span style={{ color: 'white', fontSize: '16px' }}>Facilities & Services</span>} />
                <Link href="#activities" title={<span style={{ color: 'white', fontSize: '16px' }}>Activities</span>} />
                <Link href="#gallery" title={<span style={{ color: 'white', fontSize: '16px' }}>Gallery</span>} />
                <Link href="#promotion" title={<span style={{ color: 'white', fontSize: '16px' }}>Promotion</span>} />
            </Anchor>
        </div> */}
      </div>
      <div className="flex flex-row items-center">
        <Dropdown overlay={languageMenu} placement="bottomLeft" arrow>
          <Button style={{ marginLeft: '6.25vw', backgroundColor: 'white' }}>
            {selectedLanguage === 'EN' ? 'English' : 'ไทย'} <DownOutlined />
          </Button>
        </Dropdown>
        <Button
          style={{ marginLeft: '3.125vw', backgroundColor: 'white', borderRadius: '8px' }}
          onClick={handleBookNowClick}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}
