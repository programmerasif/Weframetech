import React from 'react';
import Image from 'next/image';
import people from '../../../../public/people.png'
import clock from '../../../../public/clock.png'
import dots from '../../../../public/icVert.png'
const InProgres = () => {
    return (
        <div>
            <h5 className='flex justify-center items-center gap-32 text-[20px] font-bold mb-5'>{`In progress (2)`} <Image src="/btnAddone.png" width={50} height={50} alt='icon'></Image> </h5>

            <div className='flex flex-col'>

        <div>

            <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#5ECFFF]"></div>
              <h1 className="text-sm text-[#5ECFFF]">Video</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
            Payment gateway needs reauthorization.
            </h1>
          </div>
          <div className="w-[279px] h-[7px] rounded-lg mb-4 bg-[#1E1C3A]">
            <div className="w-[107px] h-[7px] rounded-lg bg-[#5ECFFF]"></div>
          </div>
          <div className="flex justify-between items-center">
            <Image src={people} alt="people" />
            <div className="flex gap-3 items-center">
              <Image src={clock} alt="clock" />
              <h3>Due in 4 days</h3>
            </div>
          </div>
        </div>
        </div>

        <div>

            <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#FF4A55]"></div>
              <h1 className="text-sm text-[#FF4A55]">BUGS FIXING</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
            Payment gateway needs reauthorization.
            </h1>
          </div>
          <div className="w-[279px] h-[7px] rounded-lg mb-4 bg-[#1E1C3A]">
            <div className="w-[107px] h-[7px] rounded-lg bg-[#FF4A55]"></div>
          </div>
          <div className="flex justify-between items-center">
            <Image src={people} alt="people" />
            <div className="flex gap-3 items-center">
              <Image src={clock} alt="clock" />
              <h3>Due in 4 days</h3>
            </div>
          </div>
        </div>
        </div>

        <div>
        </div>

       </div>
        </div>
    );
};

export default InProgres;