import Image from 'next/image';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbr = () => {
    return (
        <div>
            <div className='flex justify-around items-center bg-[#15132B] h-[120px]'>
                <div className=''>
                <label className="relative block w-full text-center">
                     <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                         <Image src='/search.png' alt='search icon' width={24} height={24}></Image>
                     </span>
                     <input className="placeholder:italic bg-[#211A75] placeholder:text-slate-400 block  w-[490px] rounded-full py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                </label>
                </div>
                <div className='flex justify-center items-center gap-14'>
                    <div className='text-[#6418C3] underline'>OTHER MENUE</div>
                    <div className='flex justify-center items-center gap-7'>
                        <div className='relative'>
                            <Image alt='bell' src="/bell.png" width={30} height={30}></Image>
                            <span className='absolute -top-3 -right-2 bg-[#5ECFFF] rounded-full px-2'>12</span>
                        </div>
                        <div className='relative'>
                            <Image alt='bell' src="/Video_Lesson.png" width={30} height={30}></Image>
                            <span className='absolute -top-3 -right-2 bg-[#5ECFFF] rounded-full px-2'>5</span>
                        </div>
                        <div className='relative'>
                            <Image alt='bell' src="/checkbox.png" width={30} height={30}></Image>
                            <span className='absolute -top-3 -right-2 bg-[#5ECFFF] rounded-full px-2'>2</span>
                        </div>
                        <div className='relative'>
                            <Image alt='bell' src="/office.png" width={30} height={30}></Image>
                            <span className='absolute -top-3 -right-2 bg-[#E328AF] rounded-full px-2 text-sm'>!</span>
                        </div>
                    </div>
                    <div>
                        
                    <div className='flex justify-center items-center bg-[#211A75] px-6 py-3 rounded-full gap-3 font-bold'>
                        <Image alt='flag' src="/united-states.png" height={25} width={25}></Image>
                        <span>England</span>
                        
                    </div>
                    </div>

                </div>
                <div>Bye</div>
            </div>
        </div>
    );
};

export default Navbr;