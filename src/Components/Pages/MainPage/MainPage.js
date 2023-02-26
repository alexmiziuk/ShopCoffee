import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import MainPromo from '../../MainPromo/MainPromo';
import OurBest from '../../OurBest/OurBest'

import './MainPage.scss';


const MainPage = ({bestCoffee}) => {
	return (
		<>
			<MainPromo />
			<AboutUs />
			<OurBest bestCoffee={bestCoffee} />
		</>
	);
};

export default MainPage;