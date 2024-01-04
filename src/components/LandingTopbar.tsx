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
    <div className="sticky top-0 flex flex-row h-[10vh] w-[100vw] px-[4.16vw] items-center" style={{ backgroundColor: '#2A4D69', color: 'white' }}>
      <BlockOutlined style={{ fontSize: '8vh', color: 'white' }} />
      <div className="flex flex-row items-center">
        <Link href="/" className="text-[30px] font-sans">AzureSiam</Link>
        <p className="text-[16px] ml-[9.375vw] font-sans">Room</p>
        <p className="text-[16px] ml-[5vw] font-sans">Facilities & Services</p>
        <p className="text-[16px] ml-[5vw] font-sans">Activities</p>
        <p className="text-[16px] ml-[5vw] font-sans">Gallery</p>
        <p className="text-[16px] ml-[5vw] font-sans">Promotion</p>

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
