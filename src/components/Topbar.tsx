"use client";
import React, { useState } from "react";
import { BlockOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button, Select } from "antd";
import DownOutlined from "@ant-design/icons/DownOutlined";
import Link from "next/link";

interface TopbarProps {
  lng: string;
  options: any[];
  handleIntlChange: (value: string) => void;
  currency: string;
  listquotes: any[];
  handleExChange: (value: string) => void;
}

export default function Topbar({
  lng,
  options,
  handleIntlChange,
  currency,
  listquotes,
  handleExChange,
}: TopbarProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [selectedCurrency, setSelectedCurrency] = useState("THB");

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    // Implement language change logic
    console.log("Language changed to", language);
  };

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
    // Implement currency change logic
    console.log("Currency changed to", currency);
  };

  return (
    <div
      className="sticky top-0 flex flex-row h-[10vh] w-[100vw] px-[4.16vw] items-center justify-between"
      style={{ backgroundColor: "#2A4D69", color: "white" }}
    >
      <div className="flex flex-row items-center">
        <BlockOutlined style={{ fontSize: "5vw", color: "white" }} />
        <Link href="/" className="text-h2 font-sans mobile:text-h2-mobile">
          AzureSiam
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row">
          <Select
            defaultValue={lng}
            options={options}
            onChange={handleIntlChange}
            style={{ width: "100px" }}
          />
          <Select
            defaultValue={currency}
            options={listquotes}
            onChange={handleExChange}
            style={{ width: "100px" }}
          />
        </div>
      </div>
    </div>
  );
}
