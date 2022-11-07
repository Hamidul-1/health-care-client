import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-200 px-20 py-24'>
            <div className='container mx-auto'>
                <footer class="footer">
                    <div>
                        <h1 className='text-3xl font-bold'>HEALTH CARE</h1>
                        <p>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis <br/> ad eos obcaecati tenetur veritatis eveniet distinctio <br/> possimus.</p>
                    </div>
                    <div>
                        <span class="text-primary font-bold">Department</span>
                        <a class="link link-hover">Surgery</a>
                        <a class="link link-hover">Women’s Health</a>
                        <a class="link link-hover">Radiology</a>
                        <a class="link link-hover">Cardiology</a>
                        <a class="link link-hover">Medicine</a>
                    </div>
                    <div>
                        <span class="text-primary font-bold">Support</span>
                        <a class="link link-hover">Terms & Conditions</a>
                        <a class="link link-hover">Privacy Policy</a>
                        <a class="link link-hover">Company Support</a>
                        <a class="link link-hover">FAQ</a>
                        <a class="link link-hover">Comapny Licence</a>
                    </div>
                    <div>
                        <span class="text-primary font-bold">Get In Touch</span>
                        <a class="link link-hover">Support Available for 24/7</a>
                        <a class="link link-hover"><b>support@healthcare.com</b></a>
                        <a class="link link-hover">Mon to Fri : 08:30-18:00</a>
                        <a class="link link-hover"><b>+1 234-5678-901</b></a>
                    </div>
                    
                    
                </footer>
                <hr className='my-8 h-px bg-gray-500 border-0 dark:bg-gray-700'/>
                <p className=''>Copyright© 2022,Designed & Developed by <b className='text-primary font-bold'>Top IT Ltd</b></p>
            </div>

        </div>
    );
};

export default Footer;