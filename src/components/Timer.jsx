import useTimer from '../hooks/useTimer';

const getDateTomorrow = () => {
    const currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    return `${month}, ${day}, ${year}`;
}

const Timer = () => {
    const { days, hours, minutes, seconds } = useTimer(getDateTomorrow());
    
    return (
        <div className='flex items-center sm:justify-center xl:justify-start gap-2 sm:gap-5'>
            <p className='text-5xl font-medium text-center p-5 border-4 border-gray-800 rounded w-28'> { days.toString().padStart(2, '0') }</p><span className='text-xl'>:</span>
            <p className='text-5xl font-medium text-center p-5 border-4 border-gray-800 rounded w-28'> { hours.toString().padStart(2, '0') }</p><span className='text-xl'>:</span>
            <p className='text-5xl font-medium text-center p-5 border-4 border-gray-800 rounded w-28'> { minutes.toString().padStart(2, '0') }</p><span className='text-xl'>:</span>
            <p className='text-5xl font-medium text-center p-5 border-4 border-gray-800 rounded w-28'> { seconds.toString().padStart(2, '0') }</p>
        </div>
    )
}

export default Timer