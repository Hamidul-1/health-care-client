import React from 'react';
import image1 from '../../assects/images/Rectangle 2.png'
import image2 from '../../assects/images/Rectangle 3.png'
import image3 from '../../assects/images/Rectangle 4.png'

const Appoinments = () => {
    return (
        <div>
            <div className="container mx-auto px-4 my-28">
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2'>
                    <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-2">
                        <div class="card-body">
                            <img class="w-32" src={image1} alt="Shoes" />
                            <h2 class="card-title">24 Houra Services</h2>
                            <p class="text-base font-bold">Online Appointment</p>
                            <p class="text-base">Get all time support for emergency. We have
                                introduced the principle of family medicine.</p>
                            <button class="btn btn-primary text-white text-base w-52">Make Appoinment</button>
                        </div>
                    </div>
                    <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-2">
                        <div class="card-body text-base">
                            <img class="w-32" src={image2} alt="Shoes" />
                            <p class="text-base">Timing Schedule</p>
                            <p class="text-base font-bold">Working Hours</p>
                            <div class="flex">
                                <p class="text-left">Sun-Wed :</p>
                                <p class="text-right">08:00-17:00</p>
                            </div>
                            <hr />
                            <div class="flex">
                                <p class="text-left">Thu-Fri :</p>
                                <p class="text-right">09:00-17:00</p>
                            </div>
                            <hr />
                            <div class="flex">
                                <p class="text-left">Sat-Sun :</p>
                                <p class="text-right">10:00-17:00</p>
                            </div>
                        </div>
                    </div>
                    <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-2">
                        <div class="card-body text-base">
                            <img class="w-32" src={image3} alt="Shoes" />
                            <p>Emergency Cases</p>
                            <p class="font-bold">(+88) 01718-925964</p>
                            <p>Get all time support for emergency. We have
                                introduced the principle of family medicine.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinments;