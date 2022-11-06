import React from 'react';

import Appoinments from './Appoinments';
import Banner from './Banner';
import PersonalCare from './PersonalCare';
import Success from './Success';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Appoinments></Appoinments>
            <PersonalCare></PersonalCare>
            <Success></Success>
        </div>
    );
};

export default Home;