import React from 'react';
import { NavLink } from 'react-router-dom';
import Separator from '../Separator/Separator';
import './FooterNavBar.scss';

import footerImg from '../../Image/Icons/footer__beens.svg'
/* import Beens from '../../Image/Icons/about-beens.svg' */


const FooterNavBar = () => {
	return (
		<nav className='footer'>
			<div className='footer__box'>
				<img className='footer__beens' src={footerImg} alt="Beens" />
				<ul className="footer__items">
					<li className="footer__item">
						<NavLink exact activeStyle={{ 'fontWeight': '700' }} to='/' className='footer__link' alt=''>Coffee house</NavLink>
					</li>
					<li className="footer__item">
						<NavLink exact activeStyle={{ 'fontWeight': '700' }} to='/ourcoffee' className='footer__link' alt=''>Our coffee</NavLink>
					</li>
					<li className="footer__item">
						<NavLink exact activeStyle={{ 'fontWeight': '700' }} to='/pleasure' className='footer__link' alt=''>For your pleasure</NavLink>
						<a href='/#' className='footer__link' alt=''>
						</a>
					</li>
				</ul>
			</div>
			{/* <div className="footer__separator">
				<div className="footer__line"></div>
				<div><img className='footer__img' src={Beens} alt="" /></div>
				<div className="footer__line"></div>
			</div> */}
			<Separator/>
		</nav>
	);
};

export default FooterNavBar;