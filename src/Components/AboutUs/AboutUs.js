import React from 'react';
import './AboutUs.scss';
import BlackBeens from '../../Image/Icons/about-beens.svg'

const AboutUs = () => {
	return (
		<div className='about'>
			<h2 className="about__title title title-fz24">
				About Us
			</h2>
			<div className="about__separator">
				<div className="about__line"></div>
				<div><img src={BlackBeens} alt="black-beens" className='about__img' /></div>
				<div className="about__line"></div>
			</div>
			<p className="about__descr text text fz-14">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
				Afraid at highly months do things on at. Situation recommend objection do intention
				so questions. As greatly removed calling pleased improve an. Last ask him cold feel
				met spot shy want. Children me laughing we prospect answered followed. At it went
				is song that held help face.
			</p>
			<p className="about__descr about__descr-bottom text text fz-14">Now residence dashwoods she excellent you. Shade being under his bed her, Much
				read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
				horrible but confined day end marriage. Eagerness furniture set preserved far
				recommend. Did even but nor are most gave hope. Secure active living depend son
				repair day ladies now.
			</p>

		</div>
	);
};

export default AboutUs;