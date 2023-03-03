import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderNavBar.scss';
import '../Text/Text.scss'

import NavBeens from '../../Image/Icons/nav-beens.svg'

const HeaderNavBar = ({ navActive, setNavActive, defoltChooseCoffee }) => {

	return (
		<nav className={navActive ? 'nav nav-visible' : 'nav'}>
			<img src={NavBeens} alt='Coffee-Beens' className='nav__beens'></img>
			<ul className='nav__items' >
				<li className='nav__item' onClick={() => defoltChooseCoffee()}>
					<NavLink exact activeStyle={{ 'fontWeight': '700' }} to='/'  className='nav__link text-fz12'>Coffee house
					</NavLink>
				</li>
				<li className='nav__item'  onClick={() => defoltChooseCoffee()}>
					<NavLink exact activeStyle={{ 'fontWeight': '700' }} to='/ourcoffee' className='nav__link text-fz12' >Our coffee
					</NavLink>
				</li>
				<li className='nav__item'  onClick={() => defoltChooseCoffee()}>
					<NavLink exact activeStyle={{ 'fontWeight': '700' }} to='/pleasure' className='nav__link text-fz12'>For your pleasure
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default HeaderNavBar;