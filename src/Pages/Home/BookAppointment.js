import React from 'react';
import image from '../../assects/images/Rectangle 5.png'

const BookAppointment = () => {
    return (
        <div>
            <div class="container mx-auto hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={image} class="max-w-sm rounded-lg shadow-2xl" />
                    </div>

                    <div className='px-2'>
                        <h1 class="text-5xl text-primary font-bold pb-2">Book appontment</h1>
                        <p className='pb-5'>Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit. Iste dolorum atque similique praesentium soluta.</p>

                        <div className='flex justify-between pb-9 '>
                            <select id="countries" class=" pl-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-5">
                                <option>Choose Department</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>

                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Select Doctors</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>

                        </div>
                        <div className='flex pb-9 '>
                            <input type="text" placeholder="DD/MM/YYYY" class="input input-bordered w-full bg-gray-100 bg-opacity-50" />
                            <input type="text" placeholder="Time" class="input input-bordered w-full bg-gray-100 bg-opacity-50" />

                        </div>
                        <div className='flex pb-9'>
                            <input type="text" placeholder="Full Name" class="input input-bordered w-full bg-gray-100 bg-opacity-50" />
                            <input type="text" placeholder="Phone Number" class="input input-bordered w-full bg-gray-100 bg-opacity-50" />
                        </div>

                        <div className='pb-9'>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message"></textarea>

                        </div>
                        <button class="btn btn-primary text-white text-base w-52">Make Appoinment ❯</button>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default BookAppointment;