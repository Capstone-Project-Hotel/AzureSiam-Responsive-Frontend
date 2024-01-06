import { BlockOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-row w-[100vw] h-[18vh] px-[4.16vw] items-center justify-between" style={{ backgroundColor: '#2A4D69', color: 'white', overflow: 'hidden' }}>
      <div className='flex flex-row items-center'>
        <BlockOutlined style={{ fontSize: '8vh', color: 'white' }} />
        <div className="flex flex-col px-[2.08vw]">
            <p className="text-h3 font-regular mobile:text-h3-mobile">AzureSiam Hotel and Spa, Bangkok</p>
            <p className="text-h5 font-regular mobile:text-h5-mobile">tel. +66-2414-5688</p>
            <p className="text-h5 font-regular mobile:text-h5-mobile">azuresiam@hotelservice.com</p>
            <p className="text-h5 font-regular mobile:text-h5-mobile">254 Phayathai RoadPathumwan, Bangkok 10330</p>
        </div>
      </div>
      <Link href="/contact-us"><p className="text-h5  font-regular ml-[2.08vw] mobile:text-h3-mobile"><br/><br/><br/>Contact Us</p></Link>
    </div>
  )
}
