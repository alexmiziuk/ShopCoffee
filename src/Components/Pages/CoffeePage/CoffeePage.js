import React from 'react';
import AboutOurBeans from '../../AboutOurBeans/AboutOurBeans';
import FilterCoffee from '../../FilterCoffee/FilterCoffee';
import СhooseCoffee from '../../СhooseСoffee/СhooseCoffee';
import AboutIt from '../../AboutIt/AboutIt';

import './CoffeePage.scss';

const CoffeePage = ({ moreAbout, onChainge, chooseProducts, errorMessage, setErrorMessage, inputValue, setInputValue,  setLocationFilter}) => {
	return (
		<>
			<header className='coffee'>
				<h1 className="coffee__title title title-fz40">
					Our Coffee
				</h1>
			</header>
			< AboutOurBeans />
			< FilterCoffee onChainge={onChainge} chooseProducts={chooseProducts} setErrorMessage={setErrorMessage} inputValue={inputValue} setInputValue={setInputValue} setLocationFilter={setLocationFilter} />
			{errorMessage ? (<div>{errorMessage}</div>) : (< СhooseCoffee chooseProducts={chooseProducts} />)}
			
			
			< AboutIt moreAbout={moreAbout} />


		</>
	);
};

export default CoffeePage;