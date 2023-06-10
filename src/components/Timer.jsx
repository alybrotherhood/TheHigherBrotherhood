import useTimer from '../hooks/useTimer';

const Timer = () => {
    const { days, hours, minutes, seconds } = useTimer("June, 12, 2023");

    return (
        <div className='flex items-center sm:justify-center xl:justify-start gap-2 sm:gap-5'>
            <p className='text-3xl text-center p-5 border-2 border-gray-800 rounded w-20'> { days.toString().padStart(2, '0') }</p><span className='text-xl'>:</span>
            <p className='text-3xl text-center p-5 border-2 border-gray-800 rounded w-20'> { hours.toString().padStart(2, '0') }</p><span className='text-xl'>:</span>
            <p className='text-3xl text-center p-5 border-2 border-gray-800 rounded w-20'> { minutes.toString().padStart(2, '0') }</p><span className='text-xl'>:</span>
            <p className='text-3xl text-center p-5 border-2 border-gray-800 rounded w-20'> { seconds.toString().padStart(2, '0') }</p>
        </div>
    )
}

export default Timer