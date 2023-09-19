import React from 'react';
import Image from 'next/image';
const InProgres = () => {
    return (
        <div>
            <h5 className='flex justify-center items-center gap-32 text-[20px] font-bold'>{`In progress (2)`} <Image src="/btnAddone.png" width={50} height={50} alt='icon'></Image> </h5>
        </div>
    );
};

export default InProgres;