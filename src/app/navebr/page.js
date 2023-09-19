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
                <div>Hi</div>
                <div>Bye</div>
            </div>
        </div>
    );
};

export default Navbr;