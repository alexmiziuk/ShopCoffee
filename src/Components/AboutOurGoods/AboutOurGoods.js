import React from 'react';
import Separator from '../Separator/Separator';

import './AboutOurGoods.scss'

import Cup from '../../Image/coffee-cup.jpg'

const AboutOurGoods = () => {
	return (
		<div className='ourgoods'>
			<div className="ourgoods__box">
				<img src={Cup} alt="girlDrinks" className="ourgoods__img" />
				<div className="ourgoods__block">
					<h2 className="ourgoods__title title title-fz24">
					About our goods
					</h2>
					<Separator />
					<div className="ourgoods__descr">
						<p className="ourgoods__items text text-fz14">
							Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
						</p>
						<p className="ourgoods__items ourgoods__items-padding text text-fz14">
							Afraid at highly months do things on at. Situation recommend objection do intention <br /> so questions.
							<br />
							As greatly removed calling pleased improve an. Last ask him cold feel <br />
							met spot shy want. Children me laughing we prospect answered followed. At it went <br />
							is song that held help face.
						</p>
					</div>
				</div>
			</div>
			<span className="ourgoods__divider"></span>
		</div>
	);
};

export default AboutOurGoods;