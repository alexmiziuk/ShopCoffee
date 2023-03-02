import React from 'react';

import Separator from '../Separator/Separator';

import './AboutIt.scss'

const AboutIt = ({ itemadd, blockVisible, SetBlockVisible }) => {
	
	
	
	return (
		<div className={blockVisible?'aboutit ' : 'aboutit unvisible__aboutit'}>
			{itemadd.map(item => (
				// eslint-disable-next-line no-useless-concat
				<div className='aboutit__wrapper' id={item.adress}>
					
					<img src={item.src1} alt="coffee_aromistico" className="aboutit__img" />
					<div className="aboutit__block">
						<a href={item.href} className="aboutit__clouse" onClick={() => SetBlockVisible(false)}>X</a>
						<h2 className="aboutit__title title title-fz24">
							About it
						</h2>
						<Separator />
						<div className="aboutit__box">
							<p className='aboutit__name text-fz12'><b className='text-fz14'>Country:</b> {item.made}</p>
							<p className='aboutit__descr text-fz14'>
								<b className='text-fz14'>
									Description:
								</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
							<p className='aboutit__price'>
								<b className='text-fz14'>Price:
									<span className='aboutit__sum text-fz14'> {item.price1}
									</span>
								</b>
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default AboutIt;