import React from 'react';

import Appoinments from './Appoinments';
import Banner from './Banner';
import BookAppointment from './BookAppointment';
import Patients from './Patients';
import PersonalCare from './PersonalCare';
import Served from './Served';
import Success from './Success';
import Support from './Support';

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
            <Support></Support>
        </div>
    );
};

export default Home;