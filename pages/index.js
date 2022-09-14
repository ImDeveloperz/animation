
import Image from 'next/image'
import { gsap } from "gsap";
import { Search, Menu2 } from 'tabler-icons-react';
export default function Home() {
  return (
   <div className='relative'>
     <div className='text-red flex justify-between p-8'>
      <Menu2
        size={25}
        strokeWidth={1.5}
        color={'black'}
      />
      <div className='flex'>
        <p className='pr-8'>Eng</p>
        <Search
          size={20}
          strokeWidth={1.5}
          color={'black'}
        />
      </div>
    </div>
    <div className=' flex rotate-[-90deg] relative bottom-36 text-md left-[-36rem] '>
    <p className='tracking-widest'>facbook</p>
    <p className='pl-28 tracking-widest'>instagram</p>
    <p className='pl-28 tracking-widest'>twiter</p>
  </div>
  <div className='rotate-[-90deg] max-w-[70%]  absolute top-[-2rem] left-[-4rem]'>
    <h1 className="text-[6rem] font-bold after:content-['DUALITY'] after:-z-10 after:absolute after:left-[-6rem] tracking-[-.6rem] after:tracking-normal after:top-8 after:text-[8rem] after:text-yellow-400">TONI & GUY</h1>
    <h3 className='text-4xl font-semibold '>COLLECTION 2017</h3>
     <h3 className='text-4xl font-semibold'>DUALITY</h3>
   <div className='max-w-[25%] mt-6'>
     <p classNmae=' text-[2px] tracking-[-0.4rem]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took .</p></div>
  </div>
  <div className=' right-8 absolute bottom-[-32rem] rotate-[-90deg]'>
    <Image src='/../public/sponsor-logo.png' width='190' height='160'/>
    <p className='rotate-[270deg] absolute font-semibold top-16 left-[-4rem]  tracking-[0.1rem]'>OFICIAL SPONSOR</p>
  </div>
   </div>
  )
}
