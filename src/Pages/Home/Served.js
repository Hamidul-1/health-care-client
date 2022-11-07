import React from 'react';
import img1 from '../../assects/images/image 1.png'
import img2 from '../../assects/images/image 2.png'
import img3 from '../../assects/images/image 3.png'
import img4 from '../../assects/images/image 4.png'
import img5 from '../../assects/images/image 5.png'
import img6 from '../../assects/images/image 6.png'
import Served1 from './Served1';

const Served = () => {
    const services = [
        {
            _id: 1,
            img: img2,
            name: 'Laboratory services',
            description: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.'
        },
        {
            _id: 2,
            img: img3,
            name: 'Heart Disease',
            description: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.'
        },
        {
            _id: 3,
            img: img5,
            name: 'Dental Care',
            description: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.'
        },
        {
            _id: 4,
            img: img1,
            name: 'Body Surgery',
            description: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.'
        },
        {
            _id: 5,
            img: img4,
            name: 'Neurology Sargery',
            description: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.'
        },
        {
            _id: 6,
            img: img6,
            name: 'Dental Care',
            description: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.'
        }
    ]
    return (
        <div className='bg-slate-200 px-20 py-36 mt-[-220px]'>
            <div className='container mx-auto'>
                <div className='pb-28'>
                    <div className='text-center'>
                        <h1 className='text-5xl text-primary mb-5'>We served over 5000+ <br /> Patients</h1>
                        <p className='text-base text-primary'>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt <br /> molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services.map(serve => <Served1
                            key={serve._id}
                            serve={serve}
                        ></Served1>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Served;