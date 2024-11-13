import React from 'react';
import Abouts from '../../../Components/About/page'
import  Details  from '../../../Components/Details/page';
import StrategicGoals from '@/Components/StrategicGoals/page';
import Certification from '@/Components/Certifiation/page';

const About = () => {
    return (
        <div>   
                <div className='py-12 '>
                <StrategicGoals/>
                <Certification />
                </div>
                <Abouts/>
                 <div className='py-12'>
                 <Details />
                 </div>
        </div>
    );
}

export default About;
