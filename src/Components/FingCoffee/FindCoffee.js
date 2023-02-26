import React from 'react';
import './FindCoffee.scss';

const FindCoffee = ({chooseProducts}) => {
	return (
		<section className='choose' >
				<ul className="choose__cards">
	
				{chooseProducts.map(item => (
	
						<li key={item.id} className="choose__card">
							<img className='choose__img' src={item.src} alt='choose__coffee' >
							</img>
							<div className="choose__box">
								<p className='choose__coffee text text-fz14'>{item.item}</p>
								<p className='choose__made text text-fz14'>{item.made}</p>
								<p className='choose__price text text-fz14'>{item.price}</p>
							</div>
						</li>
					))}
				</ul>
	
	
			</section>
	);
};

export default FindCoffee;