import React from 'react';
import Navbr from '../navebr/page';
import HighlightBr from '../highlightBr/page';

const Container = () => {
    return (
        <div className='bg-[#0D0B21] h-[100vh] flex flex-col gap-8'>
            <Navbr />
            <div className='p-12'>
            <HighlightBr />
            </div>
        </div>
    );
};

export default Container;