"use client";

import Image from "next/image";
import HistoryCard from "@/components/HistoryCard";
import { addDays } from "date-fns";
import { useState } from "react";
import OtherCard from "@/components/OtherCard";
import dynamic from "next/dynamic";

const CustomDateRange = dynamic(() => import("@/components/CustomDateRange"), {
  ssr: false,
});

export default function Home() {
  const [state, setState] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
  });
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem",
        padding: "5rem 0",
      }}
    >
      <div>
        <div>Start Date : {state.startDate?.toDateString() || "-"}</div>
        <div>End Date : {state.endDate?.toDateString() || "-"}</div>
      </div>

      <h1>Calendar (Including lowest price, Ant)</h1>
      <CustomDateRange
        onDatesChange={(dates: any) => {
          console.log(dates);

          setState({
            startDate: dates.startDate,
            endDate: dates.endDate,
          });
        }}
        disabledDates={[
          addDays(new Date(), 10),
          addDays(new Date(), 14),
          new Date("2024-01-02"),
        ]}
      />

      <h1>Available Calendar (Ant)</h1>
      <CustomDateRange
        onDatesChange={(dates: any) => {
          console.log(dates);

          setState({
            startDate: dates.startDate,
            endDate: dates.endDate,
          });
        }}
        disabledDates={[
          addDays(new Date(), 10),
          addDays(new Date(), 14),
          new Date("2024-01-02"),
        ]}
        size="small"
      />

      <h1>Landing History Card (Ant)</h1>
      <HistoryCard />

      <h1>Other Card (Ant)</h1>
      <OtherCard
        src="https://cdn.discordapp.com/attachments/457166097230069773/1182365438810796123/image.png?ex=65846e9f&is=6571f99f&hm=66b8054ff0749c91f6c4ab515ef7df15dd6a8a1180f74d0f073a66574cf8f637&"
        title="Standard Room"
        description="Standard rooms offer cost-effective comfort with a bed, private bathroom, and essential furniture for solo or couple travelers."
      />
    </div>
  );
}
