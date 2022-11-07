import React from 'react';
import image1 from '../../assects/images/image 7.png';
import image2 from '../../assects/images/image 8.png';
import image3 from '../../assects/images/image 9.png';
import image4 from '../../assects/images/image 10.png';
import image5 from '../../assects/images/image 12.png';

const Support = () => {
    return (
        <div className='px-20 py-24'>
            <div className='container mx-auto'>
                <div className='pb-28'>
                    <div className='text-center'>
                        <h1 className='text-5xl text-primary font-bold mb-5'>Partners who support us</h1>
                        <p className='text-base text-primary pb-14'>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt <br/> molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                    </div>
                    <div className='flex justify-center text-center'>
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                        <img src={image4} alt="" />
                        <img src={image5} alt="" />
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;