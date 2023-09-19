
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';


const Dashboard = () => {

   
    return (
        <div className='relative '>
            <div className='w-[345px] bg-[#15132B] px-10 text-white absolute shadow-md'>
            <h5 className='text-center h-[90px]  flex justify-between items-center '><span>Weframetech </span> <Image src="/hamburgermenu.png" alt='menue' height={46} width={46} ></Image> </h5>
            <div className=' text-[#C7C7C7]'>
            <h5 className='mb-6'>MAIN MENU</h5>
            <div className='flex flex-col justify-start items-start gap-3'>
            <h5 className='flex justify-start items-center gap-6'><Image src="/dashboard.png" alt='icon' width={28} height={28}></Image> <span>Dashboard</span> </h5>
            <h5 className='flex justify-between items-center gap-6'>
                <div className='flex justify-between  gap-[82px]'>
                <div className='flex justify-start items-center gap-6'>
                <Image src="/email.png" alt='icon' width={28} height={28}></Image> <span>Email</span>    
                </div> 
                <div className='flex justify-center items-center gap-[15px]'>  <Image src="/count.png" alt='icon' height={24} width={24}></Image> <Image src="/chevron.png" alt='icon' width={28} height={28}></Image></div>
                </div>
           </h5>
            <h5 className='flex justify-start items-center gap-6'><Image src="/comment.png" alt='icon' width={28} height={28}></Image> <span>Chat</span> </h5>

            <h5 className='flex justify-start items-center gap-[109px]'>
                <div className='flex justify-start items-center gap-6'><Image src="/thumbnail.png" alt='icon' width={28} height={28}></Image> <span>Kanban</span></div> 
                <Image src="/ic_chevron.png" alt='icon' width={28} height={28}></Image>
            </h5>
            <h5 className='flex justify-start items-center gap-[62px]'>
                <div className='flex justify-start items-center gap-6'><Image src="/contact.png" alt='icon' width={28} height={28}></Image> <span>Contact</span></div> 
               <span className='w-[63px] h-[35px] bg-[#E328AF] rounded-full flex justify-center items-center font-semibold'>New</span>
            </h5>

            <h5 className='flex justify-start items-center gap-6'><Image src="/calendar-silhouette.png" alt='icon' width={28} height={28}></Image> <span>Calender</span> </h5>

            <h5 className='flex justify-start items-center gap-[109px]'>
                <div className='flex justify-start items-center gap-6'><Image src="/invoice.png" alt='icon' width={28} height={28}></Image> <span>Course</span></div> 
                <Image src="/ic_chevron.png" alt='icon' width={28} height={28}></Image>
            </h5>

            <h5 className='flex justify-start items-center gap-6'><Image src="/online-shopping.png" alt='icon' width={28} height={28}></Image> <span>Shop</span> </h5>

            <h5 className='flex justify-start items-center gap-[100px]'>
                <div className='flex justify-start items-center gap-6'><Image src="/invoice.png" alt='icon' width={28} height={28}></Image> <span>Inovices</span></div> 
                <Image src="/ic_chevron.png" alt='icon' width={28} height={28}></Image>
            </h5>
            <h5 className='flex justify-start items-center gap-6'><Image src="/setting.png" alt='icon' width={28} height={28}></Image> <span>Setting</span> </h5>

            <Image src="/banner.png" height={203} width={245} alt='bgImage' className='mt-[117px] mb-[10px]'></Image>
            </div>
            </div>
        </div>
       
        </div>

      
    );
};

export default Dashboard;