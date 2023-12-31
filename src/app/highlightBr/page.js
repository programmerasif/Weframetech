import Image from 'next/image';
import React from 'react';
import Progressbr from '../progressBr/page';

const HighlightBr = () => {
    return (
        <div className='bg-[#15132B] flex gap-5 flex-col p-5 rounded-md mb-12'>
          <div className='flex flex-col lg:flex-row gap-5 justify-between'>
          <div>
          <h5 className='text-xm lg:text-2xl font-bold flex gap-4'><Image src="/btnback.png" width={35} height={35} alt='icon' ></Image> <span>School Novembor Task</span> </h5>
          <span className='text-[9px] lg:text-xs ms-10 lg:ms-[53px] text-[#A5A5A5]'>Created by Instructor Day on Septembor 19, 2023</span>
          
          </div>
          <div className='flex flex-row-reverse lg:flex-row justify-center items-center gap-3'>
            <div className='flex flex-col justify-end items-start lg:items-end'>
                <span className='lg:text-xl text-sm'>Centered Maritial Arts</span>
                <span className='text-sm text-[#7879F1]'>sunneyval,Ca</span>
            </div>
            <div> <Image alt='logo' src="/companyLogo.png" width={70} height={70}></Image> </div>
            <div></div>
          </div>
          </div>

          {/* secend contion */}
         <div className='flex lg:flex-row flex-col justify-between items-center gap-3'>

         <div className='ms-0 lg:ms-[53px] flex justify-start gap-5 items-start'>
            <Image alt='user' src="/user.png" width={70} height={40} ></Image>
            <div className='flex justify-center items-center gap-2 text-white bg-[#6418C3] text-xs lg:text-sm px-2 py-1 rounded-full'>
                <Image src="/add-friend.png" alt='img' width={20} height={20}></Image>  Invite People
            </div>
            <div className='hidden lg:flex justify-center items-center gap-2 text-white ring-1 ring-[#6418C3] text-sm px-2 py-1 rounded-full'>
                 Private
            </div>
            <div className='hidden lg:flex justify-center items-center gap-2 text-white bg-[#6418C3] text-sm px-2 py-1 rounded-full'>
                Edit
            </div>
            <div className='hidden lg:flex justify-center items-center gap-2 text-white ring-2 ring-[#6418C3] text-sm px-2 py-1 rounded-full'>
                <Image src="/chat.png" alt='img' width={20} height={20}></Image>  45 Comments
            </div>
          </div>
          <div className='flex justify-center gap-5 items-center '>
            <span className='text-xs lg:text-[16px]'>Total Progress 60%</span>
            {/* progress br */}
            <div className='w-[100px] lg:w-[258px] h-3 bg-[#1E1C3A] rounded-md'>
             <div className='h-full bg-[#6418C3] rounded-md' style={{ width: `${60}%` }}></div>
           </div>

          </div>
         </div>
        </div>
    );
};

export default HighlightBr;