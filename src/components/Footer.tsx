import { BlockOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-row w-[100vw] h-[18vh] px-[4.16vw] items-center " style={{ backgroundColor: '#2A4D69', color: 'white', overflow: 'hidden' }}>
      <BlockOutlined style={{ fontSize: '8vh', color: 'white' }} />
      <div className="flex flex-col px-[2.08vw] overflow-hidden">{/*fix overflow hidden*/}
        <p className="text-[24px] font-sans">AzureSiam Hotel and Spa, Bangkok</p>
        <p className="text-[16px] font-sans">tel. +66-2414-5688</p>
        <p className="text-[16px] font-sans">azuresiam@hotelservice.com</p>
        <p className="text-[16px] font-sans">254 Phayathai RoadPathumwan, Bangkok 10330</p>
      </div>
      <Link href="/"><p className="text-[16px] font-sans ml-[2.08vw] mt-[11vh]">Contact Us</p></Link>
    </div>
  )
}
