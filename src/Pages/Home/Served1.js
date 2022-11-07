import React from 'react';

const Served1 = ({serve}) => {
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl px-8 pt-10">
                <div className='flex justify-around items-center'>
                    <img src={serve.img} alt="" />
                    <h1 className='text-base text-primary font-bold'>Laboratory services</h1>
                </div>
                <div className='text-base card-body'>
                    <p>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
            </div>

        </div>
    );
};

export default Served1;