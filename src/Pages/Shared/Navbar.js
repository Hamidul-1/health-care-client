import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar bg-primary text-white px-12">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>1/4, Block-E, Sat-Mosjit Road, Mohammadpur Bus Stand, Dhaka</a></li>

                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-sm">supporthealthcare.com</a>
            </div>
            <div class="navbar-center hidden lg:flex text-sm">
                <ul class="menu menu-horizontal p-0">
                    <li><a>1/4, Block-E, Sat-Mosjit Road, Mohammadpur Bus Stand, Dhaka</a></li>

                </ul>
            </div>
            <div class="navbar-end text-sm">
                <p class="">Call Now: +880 1616-028947 </p>
            </div>
        </div>

        // <div class="navbar bg-primary text-white px-20 w-full">
        //     <div class="mx-auto px-4 text-sm flex-auto space-x-4">
        //         <div class="navbar-start">
        //             <p class=" ">supporthealthcare.com</p>
        //         </div>
        //         <div class="navbar-center px-8">
        //             <p>1/4, Block-E, Sat-Mosjit Road, Mohammadpur Bus Stand, Dhaka</p>
        //         </div>
        //         <div class="navbar-end">
        //             <p class="">Call Now: +880 1616-028947 </p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Navbar;