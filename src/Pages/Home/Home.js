import React from 'react';

import Appoinments from './Appoinments';
import Banner from './Banner';
import PersonalCare from './PersonalCare';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Appoinments></Appoinments>
            <PersonalCare></PersonalCare>
        </div>
    );
};

export default Home;