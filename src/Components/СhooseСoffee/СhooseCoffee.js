import React from 'react';
import './ChooseCoffee.scss';

const СhooseCoffee = ({onFilterChange, chooseProducts, blockVisible, SetBlockVisible}) => {
	

	return (
		<section className={blockVisible? 'choose unvisible__block' : 'choose'} >
			<ul className="choose__cards">
				{chooseProducts.map(item => (
					<li key={item.id} className='choose__card' onClick={() => SetBlockVisible(!blockVisible)} id={item.adress} >
						<a href={item.href} className='choose__link' key={item.target} onClick={() => onFilterChange(item.target)}>
						<img className='choose__img' src={item.src} alt='choose__coffee' >
						</img>
						<div className="choose__box">
							<p className='choose__coffee text text-fz14'>{item.item}</p>
							<p className='choose__made text text-fz14'>{item.made}</p>
							<p className='choose__price text text-fz14'>{item.price}</p>
						</div>
						</a>
					</li>
				))}
			</ul>
		</section >
	);
};

export default СhooseCoffee;