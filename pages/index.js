
import Image from 'next/image'
import { gsap } from "gsap";
import { useRef,useState,useEffect} from 'react';
import { Search, Menu2 } from 'tabler-icons-react';
import {TweenMax,TimelineLite,Power3,Expo} from 'gsap';
export default function Home() {
  const imageItem=useRef()
  const tl= new TimelineLite({delay:1})
  const tl2= new TimelineLite({delay:1})

  const images={
    image1:'/../public/01.png',
    image2:'/../public/02.png'
  }
  const [src,setSrc]=useState(images.image1)
  const [isHover,setIsHover]=useState(false);
  let isRendered=false
  console.log('h')
  useEffect(()=>{
    console.log(isRendered)
    if(!isRendered){
    tl2.fromTo("#h1",{x:-100,opacity:0,delay:2},{x:0,opacity:1})
    tl2.fromTo('h3',{y:100,opacity:0,delay:1},{y:0,opacity:1})
   TweenMax.to('.first',1.5,{
    delay:.5,
    ease:Expo.easeInOut,
    top:'-100%'
   })
   TweenMax.to('.second',1.5,{
    delay:.7,
    top:'-100%',
    ease:Expo.easeInOut,
   })
   TweenMax.to('.third',1.5,{
    delay:.9,
    top:'-100%',
    ease:Expo.easeInOut
   })
  }
    console.log('render1')
},[])
const Hover=()=>{
  if(isHover && src==images.image1){
         setSrc(images.image2);
     }else{
     if(isHover && src==images.image2){
       setSrc(images.image1);
   }
       else {
        setSrc(images.image1);
       }
      }};
  useEffect(()=>{
    console.log(isRendered)
     if(!isRendered){
    tl.fromTo(".imageItem",{x:-20,opacity:0},{x:0,opacity:1})
  console.log(isRendered)}
  isRendered=true
  console.log(isRendered)
  setTimeout(Hover,1000)
  }
  ,[isHover,src])
  const distraction=useRef();
  return (
    <div className=' h-[100%]'>
    <div className='first absolute w-[33.3%] h-[100%] top-0 z-50	bg-yellow-300 '></div>
    <div className='second first absolute w-[33.3%] h-[100%] top-0 z-50	bg-yellow-300 left-[33.3%]'></div>
    <div className='third first absolute w-[33.3%] h-[100%] top-0 z-50	bg-yellow-300 left-[66.6%] '></div>
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
    <div className=' flex rotate-[-90deg] relative bottom-36 text-md left-[-38rem] '>
    <p className='tracking-widest'>facbook</p>
    <p className='pl-28 tracking-widest'>instagram</p>
    <p className='pl-28 tracking-widest'>twiter</p>
  </div>
  <div className='rotate-[-90deg] max-w-[70%]  absolute top-[-3.5rem] left-[-6rem]'>
    <h1 id='h1' className="text-[6rem] font-bold after:content-['DUALITY'] after:-z-10 
    after:absolute after:left-[-2rem] tracking-[-.6rem] after:tracking-normal 
    after:top-6 after:text-[8rem] after:text-yellow-300 opacity-0">TONI & GUY</h1>
    <h3  className='text-4xl font-semibold opacity-0'>COLLECTION 2017</h3>
     <h3  className='text-4xl font-semibold opacity-0'>DUALITY</h3>
   <div className='max-w-[25%] mt-6'>
     <p className=' text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer.</p></div>
  </div>
  <div className=' right-8 absolute bottom-[-32rem] rotate-[-90deg]'>
    <Image src='/../public/sponsor-logo.png' width='190' height='160'/>
    <p className='rotate-[270deg] absolute font-semibold top-16 left-[-4rem]  tracking-[0.1rem]'>OFICIAL SPONSOR</p>
  </div>
   <div ref={imageItem} className='absolute top-[0.9rem] left-[36rem]' onMouseOver={()=>{isRendered=true ;setIsHover(true)}} onMouseLeave={()=>setIsHover(false)} ref={distraction}> 
   <Image className='imageItem' src={src} width='490' height='640' />
   </div>
   </div>
   </div>
  )
}
