import React from 'react';
import FaqSection from '../../components/faq';
import HeaderArea from '../../components/header';
import HeroArea from '../../components/heroArea';
import LiveFarms from '../../components/liveFarms';

function HomePage(props) {
    return (
        <div>
       
          <HeroArea/>  
          <LiveFarms/>
          <FaqSection/>
        </div>
    );
}

export default HomePage;