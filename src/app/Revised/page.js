import Image from 'next/image';
import React from 'react';

const Revised = () => {
    return (
        <div>
            <h5 className='flex justify-center items-center gap-32 text-[20px] font-bold'>{`Done (3)`} <Image src="/btnAddone.png" width={50} height={50} alt='icon'></Image> </h5> 

            <div className='bg-[#211A75] mt-5 rounded-md p-10 '>
                <div>
                <span className='flex justify-center items-center border-dashed border-2 px-10 py-5 rounded-md border-[#7879F1] bg-[#15132B] text-[#7879F1]'>More Card Here</span>
                </div>
            </div>
        </div>
    );
};

export default Revised;