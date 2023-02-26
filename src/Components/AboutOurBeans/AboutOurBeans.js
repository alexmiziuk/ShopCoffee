import React from 'react';
import Separator from '../Separator/Separator';
import './AboutOurBeans.scss';
/* import Beans from '../../Image/Icons/about-beens.svg' */
import girlDrinks from '../../Image/girl-drink.jpg'

const AboutOurBeans = () => {
	return (
		<div className='ourbeans'>
			<div className="ourbeans__box">
				<img src={girlDrinks} alt="girlDrinks" className="ourbeans__img" />
				<div className="ourbeans__block">
					<h2 className="ourbeans__title title title-fz24">
						About our beans
					</h2>
					<Separator />
					<div className="ourbeans__descr">
						<p className="ourbeans__items text text-fz14">
							Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
						</p>
						<p className="ourbeans__items ourbeans__items-padding text text-fz14">
							Afraid at highly months do things on at. Situation recommend objection do intention <br /> so questions.
							<br />
							As greatly removed calling pleased improve an. Last ask him cold feel <br />
							met spot shy want. Children me laughing we prospect answered followed. At it went <br />
							is song that held help face.
						</p>
					</div>
				</div>
			</div>
			<span className="ourbeans__divider"></span>
		</div>
	);
};

export default AboutOurBeans;