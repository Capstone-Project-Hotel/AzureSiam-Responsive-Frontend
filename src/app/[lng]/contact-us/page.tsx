import Image from 'next/image'
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'

import { useTranslation } from "../../i18n";
export default  async function Home({ params: { lng } }: { params: { lng: any } }) {
  const iconStyle = { color: '#2A4D69' };
  
  const { t } = await  useTranslation(lng);
  return (
    <main>
      <Topbar/>
      <div className="flex flex-col bg-white h-[72vh] text-center">
        <p className="text-h1 mt-[1vw] mb-[1vw] w-[100vw] mobile:text-h1-mobile" style={{ color: '#2A4D69' }}>
          Contact Us
        </p>
        <p className="text-h3 mb-[1vw] w-[100vw] mobile:text-h3-mobile">
          AzureSiam Hotel
        </p>
        <p className="text-h4 w-[100vw] mobile:text-h4-mobile">
          37/13 Soi Leabklongprapa, Cheangwattana Rd, Pakkred Laksi, Don Muang / Impact, Bangkok, Thailand 11120
        </p>
        <div className='flex flex-row items-center justify-center w-[100vw] mt-[1vw]'>
          <div className='flex flex-row items-center mr-[2vw]'>
            <PhoneOutlined style={iconStyle} />
            <div className='ml-[1vw]'>
              <p className='text-h4 mobile:text-h4-mobile'>
                090-999-9999
              </p>
            </div>
          </div>
          <div className='flex flex-row items-center'>
            <MailOutlined style={iconStyle} />
            <div className='ml-[1vw]'>
              <p className='text-h4 mobile:text-h4-mobile'>
                azuresiam@hotelservice.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-[1.5vw] items-center justify-center">
          <img src={"https://via.placeholder.com/800x300"} alt="Google Map Mock" className="w-[55vw] h-[19vw]" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
