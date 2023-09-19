import Image from 'next/image';
import React from 'react';

const Done = () => {
    return (
        <div>
            <h5 className='flex justify-center items-center gap-32 text-[20px] font-bold'>{`Done (3)`} <Image src="/btnAddone.png" width={50} height={50} alt='icon'></Image> </h5>
        </div>
    );
};

export default Done;