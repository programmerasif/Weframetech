import Done from '@/app/Done/page';
import Revised from '@/app/Revised/page';
import Todo from '@/app/Todo/page';
import InProgres from '@/app/highlightBr/Progress/page';
import Progres from '@/app/highlightBr/Progress/page';
import React from 'react';

const TaskManagementBox = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 justify-center items-start gap-5 '>
            <div>
                <Todo />
            </div>
            <div>
               <InProgres />
            </div>
            <div>
                <Done />
            </div>
            <div>
                <Revised />
            </div>
        </div>
    );
};

export default TaskManagementBox;