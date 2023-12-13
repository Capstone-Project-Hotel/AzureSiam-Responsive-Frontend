"use client";
import React, { useState } from 'react';
import { BlockOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button } from 'antd';
import DownOutlined from '@ant-design/icons/DownOutlined';
import Link from 'next/link';



export default function Topbar() {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [selectedCurrency, setSelectedCurrency] = useState('THB');

  const handleLanguageChange = (language:string) => {
    setSelectedLanguage(language);
    // Implement language change logic
    console.log('Language changed to', language);
    };

  const handleCurrencyChange = (currency:string) => {
    setSelectedCurrency(currency);
    // Implement currency change logic
    console.log('Currency changed to', currency);
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

  const currencyMenu = (
    <Menu style={{ backgroundColor: 'white' }}>
      <Menu.Item key="THB" onClick={() => handleCurrencyChange('THB')}>
        <span style={{ fontSize: '14px' }}>THB</span>
      </Menu.Item>
      <Menu.Item key="USD" onClick={() => handleCurrencyChange('USD')}>
        <span style={{ fontSize: '14px' }}>USD</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="sticky top-20 flex flex-row h-[10vh] w-[100vw] px-[4.16vw] items-center" style={{ backgroundColor: '#2A4D69', color: 'white' }}>
      <BlockOutlined style={{ fontSize: '8vh', color: 'white' }} />
      <div className="flex flex-row items-center">
        <Link href="/" className="text-[30px] font-sans">AzureSiam</Link>
        <div className="flex flex-row pl-[59.5vw]">
            <Dropdown overlay={languageMenu} placement="bottomLeft" arrow>
                <Button style={{ backgroundColor: 'white' }}>
                    {selectedLanguage === 'EN' ? 'English' : 'ไทย'} <DownOutlined />
                </Button>
            </Dropdown>
            <Dropdown overlay={currencyMenu} placement="bottomLeft" arrow>
                <Button style={{ marginLeft: '4.16vw', backgroundColor: 'white' }}>
                    {selectedCurrency === 'THB' ? 'THB' : 'USD'} <DownOutlined />
                </Button>
            </Dropdown>
        </div>
      </div>
    </div>
  );
}
