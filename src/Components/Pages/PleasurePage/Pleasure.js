import React from 'react';
import AboutOurGoods from '../../AboutOurGoods/AboutOurGoods';
import ChooseCoffee from '../../СhooseСoffee/СhooseCoffee';
import './PleasurePage.scss';

const PleasurePage = ({chooseCoffee}) => {
	return (
		<>
			<header className='pleasure'>
				<h1 className="coffee__title title title-fz40">
				For your pleasure
				</h1>
			</header>
			<AboutOurGoods />
			<ChooseCoffee chooseCoffee={chooseCoffee} />
		</>
	);
};

export default PleasurePage;