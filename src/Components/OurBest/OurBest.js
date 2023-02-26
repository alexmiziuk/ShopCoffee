import React from 'react';
import './OurBest.scss';

const OurBest = ({ bestCoffee }) => {
	return (
		<div className='best' id='best'>
			<h2 className="best__title title title-fz24">
				Our best
			</h2>
			<ul className="best__cards">
				{bestCoffee.map(item => (
					<li key={item.id} className="best__card">
						<img className={!item.class ? 'best__img' : item.class} src={item.src} alt='best__coffee' ></img>
						<p className='best__descr text text-fz14'>{item.item}</p>
						<p className='best__price text text-fz14'>{item.price}</p>
					</li>
				))}
			</ul>
		</div >
	);
};

export default OurBest;