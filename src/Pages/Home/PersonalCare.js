import React from 'react';
import Ractangle6 from '../../assects/images/Rectangle 6.png';
import Ractangle7 from '../../assects/images/Rectangle 7.png';
import Ractangle5 from '../../assects/images/Rectangle 5.png';

const PersonalCare = () => {
    return (
        <div className="container mx-auto my-24">
            <div className='flex justify-center items-center'>
                <div class="px-6">
                    <img class="pb-6" src={Ractangle6} alt="" />
                    <img class="pt-6" src={Ractangle7} alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <div class="flex justify-center items-center px-6">
                        <img class="w-full" src={Ractangle5} alt="pic" />
                    </div>
                    <div class="flex-col justify-center items-center px-6 w-1/2">
                        <p class="text-5xl text-primary pb-2 ">Personal care & healthy living</p>
                        <p class="text-base ">We provide best leading medicle service Nulla
                            perferendis veniam deleniti ipsum official dolors
                            repellat laudantium obcaecati neque.</p>
                        <button class="btn btn-primary text-white text-base w-78">Services  ❯</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalCare;