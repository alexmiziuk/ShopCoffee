import React from 'react';
import AboutOurBeans from '../../AboutOurBeans/AboutOurBeans';
import FilterCoffee from '../../FilterCoffee/FilterCoffee';
import СhooseCoffee from '../../СhooseСoffee/СhooseCoffee';
import AboutIt from '../../AboutIt/AboutIt';

import './CoffeePage.scss';

const CoffeePage = ({itemadd, onFilterChange, onChainge, chooseProducts, errorMessage, setErrorMessage, inputValue, setInputValue, setLocationFilter, blockVisible, SetBlockVisible}) => {
	return (
		<>
			<header className='coffee'>
				<h1 className="coffee__title title title-fz40">
					Our Coffee
				</h1>
			</header>
			{!blockVisible ? (< AboutOurBeans />) : (<div></div>)}
			{!blockVisible ? (< FilterCoffee onChainge={onChainge} chooseProducts={chooseProducts} setErrorMessage={setErrorMessage} inputValue={inputValue} setInputValue={setInputValue} setLocationFilter={setLocationFilter} />) : (<div></div>)}
			{errorMessage ? (<div>{errorMessage}</div>) : (< СhooseCoffee onFilterChange={onFilterChange} chooseProducts={chooseProducts} blockVisible={blockVisible} SetBlockVisible={SetBlockVisible} />)}
			<AboutIt itemadd={itemadd}  blockVisible={blockVisible} SetBlockVisible={SetBlockVisible} />
		</>
	);
};

export default CoffeePage;