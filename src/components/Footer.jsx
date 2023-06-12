import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-5 px-10 sm:px-40 xl:px-64 py-20 xl:py-10'>
            <p>&copy; 2023 www.thehigherbrotherhood.net - All Rights Reserved.</p>
            <div className='flex gap-3'>
                <a href="https://www.youtube.com/@alybrotherhood" target="_blank">
                    <svg className='w-10' height="100%" fillRule='evenodd' clipRule="evenodd" strokeLinejoin='round' strokeMiterlimit="2" viewBox="0 0 512 512" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M501.299,132.766c-5.888,-22.03 -23.234,-39.377 -45.264,-45.264c-39.932,-10.701 -200.037,-10.701 -200.037,-10.701c0,0 -160.105,0 -200.038,10.701c-22.025,5.887 -39.376,23.234 -45.264,45.264c-10.696,39.928 -10.696,123.236 -10.696,123.236c0,0 0,83.308 10.696,123.232c5.888,22.03 23.239,39.381 45.264,45.268c39.933,10.697 200.038,10.697 200.038,10.697c0,0 160.105,0 200.037,-10.697c22.03,-5.887 39.376,-23.238 45.264,-45.268c10.701,-39.924 10.701,-123.232 10.701,-123.232c0,0 0,-83.308 -10.701,-123.236Z" fill='#ed1f24' fillRule='nonzero' />
                            <path d="M204.796,332.803l133.018,-76.801l-133.018,-76.801l0,153.602Z" fill='#fff' fillRule='nonzero' />
                        </g>
                    </svg>
                </a>
                <a href="https://www.patreon.com/Alybrotherhood" target="_blank">
                    <svg className='w-10' viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <g fill='#fff'>
                            <path d="M23.75,9a8.25,8.25,0,1,1-8.26,8.26A8.26,8.26,0,0,1,23.75,9M9,31h4V9H9Z" />
                        </g>
                    </svg>
                </a>
                <a href="https://discord.com/invite/nn5bRWnnr5" target="_blank">
                    <svg className='w-10' viewBox="0 0 512 512" >
                        <circle cx="256" cy="256" fill="#7289da" r="256" />
                        <path d="M372.4,168.7c0,0-33.3-26.1-72.7-29.1l-3.5,7.1c35.6,8.7,51.9,21.2,69,36.5  c-29.4-15-58.5-29.1-109.1-29.1s-79.7,14.1-109.1,29.1c17.1-15.3,36.5-29.2,69-36.5l-3.5-7.1c-41.3,3.9-72.7,29.1-72.7,29.1  s-37.2,54-43.6,160c37.5,43.3,94.5,43.6,94.5,43.6l11.9-15.9c-20.2-7-43.1-19.6-62.8-42.3c23.5,17.8,59.1,36.4,116.4,36.4  s92.8-18.5,116.4-36.4c-19.7,22.7-42.6,35.3-62.8,42.3l11.9,15.9c0,0,57-0.3,94.5-43.6C409.6,222.7,372.4,168.7,372.4,168.7z   M208.7,299.6c-14.1,0-25.5-13-25.5-29.1s11.4-29.1,25.5-29.1c14.1,0,25.5,13,25.5,29.1S222.8,299.6,208.7,299.6z M303.3,299.6  c-14.1,0-25.5-13-25.5-29.1s11.4-29.1,25.5-29.1s25.5,13,25.5,29.1S317.3,299.6,303.3,299.6z" fill="#FFFFFF" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Footer
