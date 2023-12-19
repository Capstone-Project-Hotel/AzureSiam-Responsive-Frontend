"use client";
import {
  CalendarOutlined,
  UserOutlined,
  PlusCircleFilled,
  MinusCircleFilled,
} from "@ant-design/icons";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { InputNumber, Button } from "antd";
import Link from "next/link";

export default function SummaryCard({ page }: { page: string }) {
  return (
    <div className="border-solid border-[2px] border-gray-200 rounded-md w-[400px] h-[450px] p-5 bg-background">
      <div className="border-b-2">
        <div className="flex mt-[10px]">
          <CalendarOutlined style={{ fontSize: "30px", marginRight: "10px" }} />
          <div>
            <p className="text-h5 font-medium">
              Sun, 19 Nov 23 – Tue, 21 Nov 23
            </p>
            <p className="text-body text-slate-400">2 nights</p>
          </div>
        </div>
        <div className="flex">
          <UserOutlined style={{ fontSize: "30px", marginRight: "10px" }} />
          <p className="text-h5 font-medium">2 adults</p>
        </div>
      </div>
      <div className="border-b-2">
        {/* edit room */}
        {page === "search-result" ? (
          <div className="my-20">
            <p className="text-body text-slate-400">Edit room(s)</p>
            <div className="flex justify-between">
              <div className="flex">
                <p className="text-h5 font-bold">Standard Room</p>
                <DeleteForeverIcon />
              </div>
              <div>
                <MinusCircleFilled />
                <InputNumber defaultValue={1} />
                <PlusCircleFilled />
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-body">Standard Room 1 room(s)</p>
              <p className="text-body text-slate-400">THB 1,500.00</p>
            </div>
          </div>
        ) : (
         <div className="my-2">
          <div className="flex justify-between">
            <p className="text-body">Standard Room 1 room(s)</p>
            <p className="text-body text-slate-400">THB 1,500.00</p>
          </div>
          </div>
        )}
  <div className="border-t-2">
        {/* edit additional service() */}
        {page === "reservation-and-guest-detail" ? (
          <div className="my-2">
            <p className="text-body text-slate-400">Edit Additional Service(s)</p>
            <div className="flex justify-between">
              <div className="flex">
                <p className="text-h5">Transportation [ Package 1 ]</p>
                <DeleteForeverIcon/>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-body">Transportation [ Package 1 ]</p>
              <p className="text-body text-slate-400">THB 299.00</p>
            </div>
          </div>
        ) : (
          <div className="my-1">
          <div className="flex justify-between">
            <p className="text-body">Transportation [ Package 1 ]</p>
            <p className="text-body text-slate-400">THB 299.00</p>
          </div>
          </div>
        )}
      </div>
      </div>
      <div className="flex justify-between">
        <p className="text-body text-slate-400">Sub total</p>
        <p className="text-body text-slate-400">THB 1,799.00</p>
      </div>

      <div className="flex justify-between">
        <p className="text-body text-slate-400">Service charge (10%)</p>
        <p className="text-body text-slate-400">THB 179.90</p>
      </div>
      <div className="flex justify-between">
        <p className="text-body text-slate-400">Taxes + fees (7%) </p>
        <p className="text-body text-slate-400">THB 125.93</p>
      </div>
      <p className="text-center text-h2 font-bold mt-[50px]">THB 2,104.83 Total</p>

      <div className="flex justify-center items-center \">
        { page === "summary-booking-detail" ? 
        (<Link href={"/booking-confirmation"}>
          <Button style={{ background: "#2A4D69", color: "white" }}>
              <p>Check Out</p>
          </Button>
        </Link>) :
        (<Link href={"/summary-booking-detail"}>
          <Button style={{ background: "#2A4D69", color: "white" }}>
            <p>Confirm</p>
          </Button>
        </Link>) }
      </div>
    </div>
  );
}
