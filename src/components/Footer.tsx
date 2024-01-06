import { BlockOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-row w-[100vw] h-[18vh] px-[4.16vw] items-center justify-between" style={{ backgroundColor: '#2A4D69', color: 'white', overflow: 'hidden' }}>
      <div className='flex flex-row'>
        <BlockOutlined style={{ fontSize: '8vh', color: 'white' }} />
        <div className="flex flex-col px-[2.08vw] overflow-hidden">{/*fix overflow hidden*/}
            <p className="text-h3 font-regular">AzureSiam Hotel and Spa, Bangkok</p>
            <p className="text-h5 font-regular">tel. +66-2414-5688</p>
            <p className="text-h5 font-regular">azuresiam@hotelservice.com</p>
            <p className="text-h5 font-regular">254 Phayathai RoadPathumwan, Bangkok 10330</p>
        </div>
      </div>
      <Link href="/"><p className="text-h5 font-regular ml-[2.08vw] mt-[11vh]">Contact Us</p></Link>
    </div>
  )
}
