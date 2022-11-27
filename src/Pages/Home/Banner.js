import React from 'react';
import hero from '../../assects/images/Hero Img.png'

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={hero} alt="hero" class="w-full" />

                    <div class="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 ml-48 w-1/2">
                        <h1 class="text-left text-base mb-4 font-bold">TOTAL HEALTH CARE SOLUTION</h1>
                        
                        <h1 class="text-6xl text-blue-900 mb-3">Your Most Trusted <br/> Health Partnar</h1>
                        <p class="mb-3">A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam <br/> aperiam maiores sunt fugit, deserunt rem suscipit placeat.</p>
                        <button class="btn bg-red-600 text-white text-base">Make Appoinment ❯</button>
                        {/* <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;