import React from 'react';

import './FilterCoffee.scss'


const FilterCoffee = ({ onChainge, setErrorMessage, inputValue, chooseProducts  }) => {

	const inputTexttoFilter = (event) => {
		const filterValue = event.target.value;
		if (/^[A-Za-z\b]+$/.test(filterValue) || filterValue.length === 0) { // Проверяем, содержит ли значение только латинские буквы и пробелы, также приравниваем input к нулю по умолчанию
			onChainge(filterValue.toLowerCase());
			setErrorMessage('');
		} else {
			setErrorMessage('Enter the text in Latin (Введіть текст на латиниці)');
		}
		
	};





	return (
		<section className='filter'>
			<div className="filter__boxes">
				<div className="filter__box">
					<label className="filter__item text-fz14">
						Lookiing for
					</label>
					<input type="text" placeholder='start typing here...' value={inputValue} onChange={inputTexttoFilter} className="filter__input text text-fz12" />
				</div>
				<div className="filter__wrapper">
					<div className="filter__text  text-fz14">Or filter</div>
					<button value="Brazil" onClick={inputTexttoFilter} className="filter__button text text-fz12">Brazil</button>
					<button value="Kenya" onClick={inputTexttoFilter} className="filter__button text text-fz12" style={{ 'borderRadius': '0px 0px 0px 0px' }}>Kenya</button>
					<button value="Columbia" onClick={inputTexttoFilter} className="filter__button filter__button-left text text-fz12 " style={{ 'borderRadius': '0px 4px 4px 0px' }}>Columbia</button>
				</div>
			</div>
			{chooseProducts.length === 0 ? <div className='filter__message'>Nothing found (Нічого не знайдено)</div> : <div></div>}
		</section>
	);
};

export default FilterCoffee;