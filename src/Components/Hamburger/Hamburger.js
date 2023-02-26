import React from 'react';
import Clouse from '../../Image/Icons/close-white.svg';
import './Hamburger.scss';

const Hamburger = ({ menuActive, setMenuActive }) => {


	return (
		<>
			<div className={menuActive ? 'hamburger hidden' : 'hamburger'} onClick={() => setMenuActive(true)}>
				<span className='hamburger__line'></span>
				<span className='hamburger__line'></span>
				<span className='hamburger__line'></span>
			</div>
			<img src={Clouse} alt="close" className={menuActive ? 'clouse visible' : 'clouse '} onClick={() => setMenuActive(false)} />
		</>
	);
};

export default Hamburger;