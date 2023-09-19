import React from 'react';
import Navbr from '../navebr/page';
import HighlightBr from '../highlightBr/page';
import TaskManagementBox from './TaskManagementBox/page';

const Container = () => {
    return (
        <div className='bg-[#0D0B21] h-full flex flex-col gap-8 mb-5'>
            <Navbr />
            <div className='lg:px-12 px-3 mt-32'>
            <HighlightBr />
            <TaskManagementBox />
            </div>

        </div>
    );
};

export default Container;