import Image from 'next/image'
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'

export default function Home() {
  const iconStyle = { color: '#2A4D69' };

  return (
    <main>
      <Topbar/>
      <div className="flex flex-col bg-white h-[72vh] text-center">
        <p className="text-[38px] font-sans mt-[1vw] mb-[1vw] w-[100vw]" style={{ color: '#2A4D69' }}>
          Contact Us
        </p>
        <p className="text-[24px] font-sans mb-[1vw] w-[100vw]">
          AzureSiam Hotel
        </p>
        <p className="text-[20px] font-sans w-[100vw]">
          37/13 Soi Leabklongprapa, Cheangwattana Rd, Pakkred Laksi, Don Muang / Impact, Bangkok, Thailand 11120
        </p>
        <div className='flex flex-row items-center justify-center w-[100vw] mt-[1vw]'>
          <div className='flex flex-row items-center mr-[2vw]'>
            <PhoneOutlined style={iconStyle} />
            <div className='ml-[1vw]'>
              090-999-9999
            </div>
          </div>
          <div className='flex flex-row items-center'>
            <MailOutlined style={iconStyle} />
            <div className='ml-[1vw]'>
              azuresiam@hotelservice.com
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-[1vw] items-center justify-center">
          <img src={"https://via.placeholder.com/800x300"} alt="Google Map Mock" className="w-[55vw] h-[19vw]" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
