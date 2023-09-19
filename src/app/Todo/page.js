import Image from 'next/image';
import React from 'react';

const Todo = () => {
    return (
        <div>
            <h5 className='flex justify-center items-center gap-32 text-[20px] font-bold'>{`To-Do List(24)`} <Image src="/btnAdd.png" width={65} height={65} alt='icon'></Image> </h5>

            <div className="bg-[#211A75] w-[339px] h-[229px] p-8 rounded-lg mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#E328AF]"></div>
              <h1 className="text-sm text-[#E328AF]">Instructor Meeting</h1>
            </div>
            <div>
              {/* <Image src={dots} alt="dots" /> */}
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
            {/* <Image src={people} alt="people" /> */}
            <div className="flex gap-3 items-center">
              {/* <Image src={clock} alt="clock" /> */}
              <h3>Due in 4 days</h3>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Todo;