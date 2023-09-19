import Image from 'next/image';
import React from 'react';
import people from '../../../public/people.png'
import clock from '../../../public/clock.png'
import dots from '../../../public/icVert.png'
const Done = () => {
    return (
        <div>
            <div className='flex flex-col'>

<div>
            <h5 className='flex justify-center items-center gap-32 text-[20px] font-bold'>{`Done (3)`} <Image src="/btnAddone.png" width={50} height={50} alt='icon'></Image> </h5>

            <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#FF4A55]"></div>
              <h1 className="text-sm text-[#FF4A55]">Importent</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
            Action Button needed for Google Maps visits.
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

            <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#38E25D]"></div>
              <h1 className="text-sm text-[#38E25D]">Instructor Meeting</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
            Update new instructor photos.
            </h1>
          </div>
          <div className="w-[279px] h-[7px] rounded-lg mb-4 bg-[#1E1C3A]">
            <div className="w-[107px] h-[7px] rounded-lg bg-[#38E25D]"></div>
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
              <div className="w-3 h-3 rounded-full bg-[#E328AF]"></div>
              <h1 className="text-sm text-[#E328AF]">Database</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
            Review/correct yellow belt techniques.
            </h1>
          </div>
          <div className="w-[279px] h-[7px] rounded-lg mb-4 bg-[#1E1C3A]">
            <div className="w-[107px] h-[7px] rounded-lg bg-[#E328AF]"></div>
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

       </div>
        </div>
    );
};

export default Done;