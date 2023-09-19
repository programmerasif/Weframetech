
const Progressbr = ({ skillLevel}) => {
    const progressBarClasses = 'w-full h-5 bg-gray-300 rounded-md'; 
    const progressClasses = 'h-full bg-green-500 rounded-md'; 
  

    return (
      <div className={progressBarClasses}>
        <div className={progressClasses} style={{ width: `${skillLevel}%` }}></div>
      </div>
    );
  };


export default Progressbr;