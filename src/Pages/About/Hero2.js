import React from 'react';
import Rectangle1 from '../../assects/images/Rectangle 13.png';
import Rectangle2 from '../../assects/images/Rectangle 14.png';
import Rectangle3 from '../../assects/images/Rectangle 15.png';
import Rectangle4 from '../../assects/images/Rectangle 16.png';

const Hero2 = () => {
    return (
        <div className='container mx-auto'>

            <div class="hero min-h-screen bg-base-100 px-20 py-24">
                <div class="hero-content flex">
                    <div className='w-full'>
                        <h1 className='text-primary font-bold text-6xl'>Personal care <br /> for your healthy <br /> living</h1>
                    </div>
                    <div className='mx-5'>
                        <p className='mb-7 text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, libero delectus</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, libero delectus</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12'>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={Rectangle1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-primary font-bold card-title">Healthcare for Kids</h2>
                        <p className='text-base'>Voluptate aperiam esse possimus<br /> maxime repellendus, nihil quod <br /> accusantium.</p>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={Rectangle2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-primary font-bold card-title">Medical Counseling</h2>
                        <p className='text-base'>Voluptate aperiam esse possimus<br /> maxime repellendus, nihil quod <br /> accusantium.</p>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={Rectangle3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-primary font-bold card-title">Modern Equipments</h2>
                        <p className='text-base'>Voluptate aperiam esse possimus<br /> maxime repellendus, nihil quod <br /> accusantium.</p>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={Rectangle4} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-primary font-bold card-title">Qualified Doctors</h2>
                        <p className='text-base'>Voluptate aperiam esse possimus<br /> maxime repellendus, nihil quod <br /> accusantium.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;