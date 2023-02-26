import React from 'react';
import './FilterCoffee.scss'


const FilterCoffee = ({ onChainge }) => {

	const inputTexttoFilter = (event) => {
		onChainge(event.target.value.toLowerCase());
		
	};

	return (
		<section className='filter'>
			<div className="filter__boxes">
				<div className="filter__box">
					<label className="filter__item text-fz14">
						Lookiing for
					</label>
					<input type="text" placeholder='start typing here...' onChange={inputTexttoFilter} className="filter__input text text-fz12" />
				</div>
				<div className="filter__wrapper">
					<div className="filter__text  text-fz14">Or filter</div>
					<button className="filter__button text text-fz12">Brazil</button>
					<button className="filter__button text text-fz12" style={{ 'borderRadius': '0px 0px 0px 0px' }}>Kenya</button>
					<button className="filter__button filter__button-left text text-fz12 " style={{ 'borderRadius': '0px 4px 4px 0px' }}>Columbia</button>
				</div>
			</div>
		</section>
	);
};

export default FilterCoffee;