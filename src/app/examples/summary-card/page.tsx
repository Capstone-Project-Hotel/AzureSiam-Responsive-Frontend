import SummaryCard from "@/components/SummaryCard";
import {
  CalendarOutlined,
  UserOutlined,
  PlusCircleFilled,
  MinusCircleFilled,
  DeleteFilled,
} from "@ant-design/icons";

export default function SummaryCardUsage() {
  return (
    <div className="pt-20">
      {/* <SummaryCard page={"search-result"}/> */}
      <SummaryCard page={"reservation-and-guest-detail"} />
      {/* <SummaryCard page={"summary-booking-detail"}/> */}
      {/* <SummaryCard page={"booking-confirmation"}/> */}
    </div>
  );
}
