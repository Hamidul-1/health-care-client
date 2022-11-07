import React from 'react';
import image1 from '../../assects/images/Ellipse 1.png';
import image2 from '../../assects/images/Ellipse 1 (1).png';
import vactor from '../../assects/images/Vector.png';

const Patients = () => {
    return (
        <div className='bg-slate-200 px-20 py-24'>
            <div className='container mx-auto'>
                <div className='pb-28'>
                    <div className='text-center'>
                        <h1 className='text-5xl text-primary font-bold mb-5'>We served over 5000+ <br /> Patients</h1>
                        <p className='text-base text-primary'>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt <br /> molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                    <div class="card lg:max-w-lg bg-base-100 shadow-xl px-4 pt-10">
                        <div className='flex justify-around items-center '>
                            <img src={image1} alt="" />
                            <div>
                                <h1 className='text-base text-primary font-bold'>Nice Environment!</h1>
                                <p>Partho Sarothi</p>
                            </div>
                        </div>
                        <div className='text-base card-body'>
                            <p>They provide great service facility consectetur adipisicing elit.Itaque rem, praesentium, iure, ipsum magnam deleniti a veleos adipisci suscipt fugit placeat.</p>
                        </div>
                        <div className='flex justify-end mb-[-30px]'>
                            <img src={vactor} alt="" />
                        </div>
                    </div>

                    <div class="card lg:max-w-lg bg-base-100 shadow-xl px-4 pt-10">
                        <div className='flex justify-around items-center '>
                            <img src={image2} alt="" />
                            <div>
                                <h1 className='text-base text-primary font-bold'>Nice Environment!</h1>
                                <p>Partho Sarothi</p>
                            </div>
                        </div>
                        <div className='text-base card-body'>
                            <p>They provide great service facility consectetur adipisicing elit.Itaque rem, praesentium, iure, ipsum magnam deleniti a veleos adipisci suscipt fugit placeat.</p>
                        </div>
                        <div className='flex justify-end mb-[-30px]'>
                            <img src={vactor} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patients;