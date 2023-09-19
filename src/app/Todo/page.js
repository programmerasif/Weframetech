import Image from 'next/image';
import React from 'react';
import people from '../../../public/people.png'
import clock from '../../../public/clock.png'
import dots from '../../../public/icVert.png'

const Todo = () => {
    return (
       <div className='flex flex-col'>

      <div>
            <h5 className='flex justify-center items-center gap-32 text-[20px] font-bold mb-1'>{`To-Do List(24)`} <Image src="/btnAdd.png" width={65} height={65} alt='icon'></Image> </h5>

            <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5 mr-0">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#FFAB2D]"></div>
              <h1 className="text-sm text-[#FFAB2D]">Importent</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
            Create sign up sheet for holiday student/parent conferences.
            </h1>
          </div>
          <div className="w-[279px] h-[7px] rounded-lg mb-4 bg-[#1E1C3A]">
            <div className="w-[107px] h-[7px] rounded-lg bg-[#FFAB2D]"></div>
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

        <div className='mr-0 me-0 m-0'>

            <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#E328AF]"></div>
              <h1 className="text-sm text-[#E328AF]">Instructor Meeting</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
            Plan holiday demonstration program. Create outline.
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

        <div>

            <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#38E25D]"></div>
              <h1 className="text-sm text-[#38E25D]">Database</h1>
            </div>
            <div>
              <Image src={dots} alt="dots" />
            </div>
          </div>
          <div className="mb-6">
            <h1>
            Determine how many boards need to be ordered for testing and demo.
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

       </div>
    );
};

export default Todo;