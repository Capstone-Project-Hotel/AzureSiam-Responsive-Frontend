"use client";
import { Checkbox, Select, DatePicker, InputNumber, Input } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import dayjs from 'dayjs';
dayjs().format()

export default function Filter({
  startDate,
  endDate,
  adults,
  childrens,
  codePromo,
}: {
  startDate: string;
  endDate: string;
  adults: number;
  childrens: number;
  codePromo: string;
}) {
  const { RangePicker } = DatePicker;
  const CheckboxGroup = Checkbox.Group;

  const roomTypeOptions = [
    { label: "Standard", value: "standard" },
    { label: "Deluxe", value: "deluxe" },
    { label: "Family", value: "family" },
    { label: "Executive", value: "executive" },
    { label: "Junior", value: "junior" },
  ];

  const roomFeatureOptions = [
    { label: "City View", value: "city-view" },
    { label: "Adaptable Bathroom", value: "adaptable-bathroom" },
    { label: "Luggage Storage", value: "luggage-storage" },
    { label: "Jacuzzi", value: "jacuzzi" },
    { label: "Balcony", value: "balcony" },
  ];


  return (
    <div className="w-full flex-row bg-secondary pt-3 pb-3">
      <div className="my-[20px] ml-10">
        <p className="text-white text-h3  font-bold">Booking Detail</p>
        <div className="flex justify-around">
          <RangePicker defaultValue={[dayjs(startDate, "YYYY-MM-DD"),dayjs(endDate, "YYYY-MM-DD")]} style={{zIndex: 0}}/>
          <div className="flex">
            <p className="ml-2 mr-2 text-white text-h4 font-bold">Adult</p>
            <InputNumber defaultValue={adults} />
          </div>
          <div className="flex">
            <p className="ml-2 mr-2 text-white text-h4 font-bold">Childern</p>
            <InputNumber defaultValue={childrens} />
          </div>
          <div className="flex">
            <p className="ml-2 mr-2 text-white text-h4 font-bold">
              Code Promotion
            </p>
            <Input
              placeholder="example"
              style={{ width: 200 }}
              value={codePromo}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between ml-10 mr-10 my-2">
        <div>
          <p className="text-white text-h3 font-bold">Room Type</p>
          <div className="grid grid-cols-3 gap-2">
            <Checkbox>
              <p className="text-white text-h5">Standard</p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5">Deluxe</p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5">Family</p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5">Executive</p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5">Junior</p>
            </Checkbox>
          </div>
        </div>
        <div>
          <p className="text-white text-h3  font-bold">Room Feature</p>
          <div className="grid grid-cols-3 gap-2">
            <Checkbox>
              {" "}
              <p className="text-white text-h5">City View</p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5">Adaptable Bathroom</p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5">Luggage Storage</p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5">Jacuzzi</p>
            </Checkbox>
            <Checkbox>
              <p className="text-white text-h5">Balcony</p>
            </Checkbox>
          </div>
        </div>

        <div>
          <p className="text-white text-h3  font-bold">Price</p>
          <Select
            defaultValue="Any price is acceptable"
            style={{ width: 200 }}
            options={[
              {
                value: "Any price is acceptable",
                label: "Any price is acceptable",
              },
              {
                value: "Not exceeding THB 2,000",
                label: "Not exceeding THB 2,000",
              },
              {
                value: "Not exceeding THB 3,500",
                label: "Not exceeding THB 3,500",
              },
              {
                value: "Not exceeding THB 5,000",
                label: "Not exceeding THB 5,000",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
