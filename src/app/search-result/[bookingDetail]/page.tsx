"use client"

import Filter from '@/components/Filter';
import SummaryCard from '@/components/SummaryCard';
import { useParams } from 'next/navigation'

import dayjs from 'dayjs';
import Topbar from '@/components/Topbar';
import Footer from '@/components/Footer';
dayjs().format()

export default function SearchResultPage() {

    const params = useParams()

    console.log(params.bookingDetail)

// Destructuring the object into individual variables
// const { startDate, endDate, adults, childrens, codePromo } = paramsObject;
const decodedParams = decodeURIComponent(params.bookingDetail as string);

// Splitting the string into key-value pairs
const keyValuePairs = decodedParams.split('&');

// Creating an object with key-value pairs
const paramsObject: Record<string, string> = {};
keyValuePairs.forEach((pair) => {
  const [key, value] = pair.split('=');
  paramsObject[key] = value;
});

const { startDate, endDate, adults, childrens, codePromo } = paramsObject;

console.log(dayjs(startDate, "YYYY-MM-DD"))

    return <div>
      <Topbar/>
      <Filter startDate={startDate} endDate={endDate} adults={parseInt(adults)} childrens={parseInt(childrens)} codePromo={codePromo}/>
      <div className='w-[509px] mobile:w-[330px] fixed right-[200px] top-[400px]'>
      <SummaryCard page='search-result'/>
      </div>

      <div className='mt-[600px]'>
      <Footer/>
      </div>
    </div>
}
