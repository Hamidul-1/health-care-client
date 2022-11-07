import React from 'react';

import Appoinments from './Appoinments';
import Banner from './Banner';
import BookAppointment from './BookAppointment';
import Patients from './Patients';
import PersonalCare from './PersonalCare';
import Served from './Served';
import Success from './Success';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Appoinments></Appoinments>
            <PersonalCare></PersonalCare>
            <Success></Success>
            <Served></Served>
            <BookAppointment></BookAppointment>
            <Patients></Patients>
        </div>
    );
};

export default Home;