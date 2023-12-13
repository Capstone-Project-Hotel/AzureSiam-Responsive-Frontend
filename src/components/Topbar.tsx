"use client";
import React, { useState } from 'react';
import { BlockOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button } from 'antd';
import DownOutlined from '@ant-design/icons/DownOutlined';

export default function Topbar() {
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
    // Implement Book Now logic
  };

  return (
    <div className="sticky top-0 flex flex-row h-[10vh] w-[100vw] px-[4.16vw] items-center" style={{ backgroundColor: '#2A4D69', color: 'white' }}>
      <BlockOutlined style={{ fontSize: '8vh', color: 'white' }} />
      <div className="flex flex-row items-center">
        <p className="text-[30px]">AzureSiam</p>
        <p className="text-[16px] ml-[9.375vw]">Room</p>
        <p className="text-[16px] ml-[5vw]">Facilities & Services</p>
        <p className="text-[16px] ml-[5vw]">Activities</p>
        <p className="text-[16px] ml-[5vw]">Gallery</p>
        <p className="text-[16px] ml-[5vw]">Promotion</p>
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
