import React from 'react';

import Beans from '../../Image/Icons/Coffee-beans.png'
import './MainPromo.scss'

const MainPromo = () => {
	return (
		<>
			<header className='promo'>
				<h1 className="promo__title title title-fz40">
					Everything You Love About Coffee
				</h1>
				<div className="promo__separator">
					<div className="promo__line"></div>
					<div><img src={Beans} alt="" /></div>
					<div className="promo__line"></div>
				</div>
				<h2 className="promo__descr title title-fz24">
					We makes every day full of energy and taste
				</h2>
				<p className="promo__quest title title-fz24">Want to try our beans?</p>
				<div className='promo__wrapper'>
					<a href="/#best" className="promo__link text text-fz14">
						<div className="promo__btn">
							More
						</div>
					</a>
				</div>
			</header>
		</>
	);
};

export default MainPromo;