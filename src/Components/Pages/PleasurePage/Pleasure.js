import React from 'react';
import AboutOurGoods from '../../AboutOurGoods/AboutOurGoods';
import ChooseCoffee from '../../СhooseСoffee/СhooseCoffee';
import AboutIt from '../../AboutIt/AboutIt';
import './PleasurePage.scss';

const PleasurePage = ({itemadd, onFilterChange,  chooseProducts, moreAbout, blockVisible, SetBlockVisible}) => {
	return (
		<>
			<header className='pleasure'>
				<h1 className="coffee__title title title-fz40">
				For your pleasure
				</h1>
			</header>
			<AboutOurGoods />
			<ChooseCoffee onFilterChange={onFilterChange} chooseProducts={chooseProducts} blockVisible={blockVisible} SetBlockVisible={SetBlockVisible}  />
			<AboutIt itemadd={itemadd} blockVisible={blockVisible} SetBlockVisible={SetBlockVisible} />
		</>
	);
};

export default PleasurePage;