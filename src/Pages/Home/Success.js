import React from 'react';
import background from '../../assects/images/Rectangle 8.png';

const Success = () => {

    return (
        <div class="container mx-auto carousel w-full py-28">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={background} class="w-full" />
                <div class="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div>
                        <div className='flex justify-around items-center'>
                            <div>
                                <div className='flex'>
                                    <h1 className='text-9xl text-white'>58</h1>
                                    <p className='text-sm text-white'>k</p>
                                </div>
                                <p className='text-2xl text-white'>Happy People</p>
                            </div>
                            <div>
                                <div className='flex'>
                                    <h1 className='text-9xl text-white'>70</h1>
                                </div>
                                <p className='text-2xl text-white'>Surgery Completed</p>
                            </div>
                            <div>
                                <div className='flex'>
                                    <h1 className='text-9xl text-white'>40</h1>
                                </div>
                                <p className='text-2xl text-white'>Expert Doctors</p>
                            </div>
                            <div>
                                <div className='flex'>
                                    <h1 className='text-9xl text-white'>20</h1>
                                </div>
                                <p className='text-2xl text-white'>Worldwide Branch</p>
                            </div>
                        </div>
                        {/* <div class="stats stats-vertical lg:stats-horizontal shadow">

                            <div class="stat">
                                <div class="stat-title">Downloads</div>
                                <div class="stat-value">31K</div>
                                <div class="stat-desc">Jan 1st - Feb 1st</div>
                            </div>

                            <div class="stat">
                                <div class="stat-title">New Users</div>
                                <div class="stat-value">4,200</div>
                                <div class="stat-desc">↗︎ 400 (22%)</div>
                            </div>

                            <div class="stat">
                                <div class="stat-title">New Registers</div>
                                <div class="stat-value">1,200</div>
                                <div class="stat-desc">↘︎ 90 (14%)</div>
                            </div>

                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;